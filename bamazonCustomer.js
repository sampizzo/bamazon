var mysql = require("mysql");
require("dotenv").config();
var inquirer = require("inquirer");

//vars
var customerTemp = [];
var dbTemp = [];
var total = 0;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_DB_PASS,
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // run the start function after the connection is made to prompt the user
  shopOrGo();
});
//
//
function shopOrGo() {
  inquirer
    .prompt([
      {
        name: "answer",
        type: "confirm",
        message: "It's Bamazon! \nHey! You gonna buy somethin' already?",
        default: true
      }
    ])
    .then(function(ans) {
      if (ans.answer) {
        listItems();
      } else {
        console.log("\r\nEh...You'll be back.\r\nBAMAZON!\r\n");
        connection.end();
      }
    });
  //
  //
  function listItems() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(
        "--------------------------------------------------------------------------"
      );
      for (var i = 0; i < 9; i++) {
        console.log(
          res[i].item_id +
            "  || " +
            res[i].product_name +
            " || " +
            res[i].department_name +
            " || $" +
            res[i].price +
            " || " +
            res[i].stock_quantity +
            "\n" +
            "--------------------------------------------------------------------------"
        );
      }
      for (var i = 9; i < res.length; i++) {
        console.log(
          res[i].item_id +
            " || " +
            res[i].product_name +
            " || " +
            res[i].department_name +
            " || $" +
            res[i].price +
            " || " +
            res[i].stock_quantity +
            "\n" +
            "--------------------------------------------------------------------------"
        );
      }
      console.log(
        "=========================================================================="
      );
      purchase(res);
    });
  }
  //
  //
  function purchase(query) {
	inquirer
	.prompt([{
		name: "item_id",
		type: "input", 
		message: "Well, what's the item # of whatever it is you wanna buy?\r\n"
	},
	{
		name: "quantity",
		type: "input",
		message: "How many those you want?"
	}])
	.then(function(res) {
		var validItem = false;
		for (var i = 0; i < query.length && !validItem; i++) {
		  if (query[i].item_id === parseInt(res.item_id)) {
				validItem = true;
		 	}
		 }
		if (validItem) {
		    stockCheck(parseInt(res.item_id), parseInt(res.quantity));
		}
		else {
			console.log("Oh boy... swing and miss.\r\nIf you don't see it on the fancy list, Bamazon don't got it.")
		}	
	});
}
//
//
function stockCheck(id, quantity) {
    connection.query("SELECT * from products where?", 
		[{
			item_id: id
		}], 
		function(err, res) {
			if (err) throw err; 
			else {
				if(res[0].stock_quantity >= parseInt(quantity)) {
					var total = parseInt(quantity) * res[0].price;
					console.log("That's $" + total + " you owe me.")
					updateStock(id, quantity, res[0].stock_quantity);
				}
				else {
					console.log("Apparently, we don't have that. Maybe this time you can pick something we actually, ya know, DO have in stock.");
				}
			}
			})
    }
//
//
function updateStock(id, requested, instock) { connection.query("UPDATE products SET ? WHERE ?", 
    [
        {
            stock_quantity: (instock-requested)
        },
        {
            item_id: id
        }
    ],
    function(err,res){
        console.log("You're all set. Have a good one. Now leave.\r\nBAMAZON!");
        connection.end();
})
}
}