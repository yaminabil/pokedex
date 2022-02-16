// load express 
const express = require ("express"); 
const pokemon =require ("./models/pokemon");

//create our app 
const app = express ();

// get route 
app.get ("/" , (req,res) => {
    res.send ("welcome to the pokemon app !");
})

app.get ("/pokemon" , (req,res) => {
    res.send (pokemon);
})

//port  3000 
app.listen (3000 , () => {
    console.log ("listening to port 3000");
})