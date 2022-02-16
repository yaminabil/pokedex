// load express 
const express = require ("express"); 
const pokemon =require ("./models/pokemon");

//create our app 
const app = express ();


// seting up the engine 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



// get route 
app.get ("/" , (req,res) => {
    res.send ("welcome to the pokemon app !");
})

// idex 
app.get ("/pokemon" , (req,res) => {
    res.render ("Index" , {pokemon});
})

//new 



//delete 



//update 



// create 



//edit 




//show 











//port  3000 
app.listen (3000 , () => {
    console.log ("listening to port 3000");
})