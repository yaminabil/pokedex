// load express 
const express = require ("express"); 

//create our app 
const app = express ();

// get route 
app.get ("/" , (req,res) => {
    res.send ("welcome to the pokemon app !");
})

//port  3000 
app.listen (3000 , () => {
    console.log ("listening to port 3000");
})