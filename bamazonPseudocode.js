// Bamazon Pseudocode

// connect to our database
// test if the connection works, if it does, run promptUser function


//In promptUser function
  // Display the available products with their ID #s
  // Use inquirer to ask the user for the ID # of the product they want
    // if their response is "Q" or "q", connection.end();
    // else Query the database to check if the ID # corresponds to an existing ID # in the products table
    // select * from products where id = userResponse
  // Once we get a response from the database, check if the length of the response is greater than 0
  // Console log the response to check that it's working
    // If it's not, tell the user the item doesn't exist and call the promptUser function again
  
  // Use inquirer again to ask the user for how many they want

  // check the quantity from the database query response, see if it's greater than or equal to the number that the user wants (if statement)
    // If the user's request is greater than the available quantity, tell the user it's not in stock and call promptUser function again

  
  // If there are enough in stock, calculate what the new quantity will be by subtracting the user's purchase quantity from the current quantity (store this value in a variable)

  // query the database to update the quantity using UPDATE quantity to new quantity where ID is the ID that the user chose
    // Tell the user their purchase was successful, and tell them how much they paid
    // multiply the quantity by the price of the product

    //  call promptUser again