
require('dotenv').config()
console.log (process.env.MONGO_URI);

// load express 
const express = require ("express"); 
const mongoose = require("mongoose") ;
const Pokemon =require ("./models/pokemon");

//create our app 
const app = express ();


// seting up the engine 
//view
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//models 

mongoose.connect (process.env.MONGO_URI , { 
    useNewUrlParser : true ,
    useUnifiedTopology : true
})


//Middleware 
app.use (express.urlencoded({extended : true}));
app.use ( (req,res,next)=> {
    console.log (req.body) ; 
    next () ;
})




// get route 
app.get ("/" , (req,res) => {
    res.send ("welcome to the pokemon app !");
})

// idex 
app.get ("/pokemon" , (req,res) => {
    Pokemon.find( {} , (err,foundPokemon) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.render ("Index.jsx" , {
                pokemon : foundPokemon
            })
        }
    })
})

//new 
app.get ("/pokemon/new" , (req,res) => {
    res.render ("New.jsx") ;
})


//delete 



//update 



// create 

app.post ("/pokemon" , (req,res) => {

    if (req.body.readyToFight === "on" ) {
     req.body.readyToFight=true;

    }else {
        req.body.readyToFight =false ;
    
    }

    Pokemon.create  (req.body , (err,pokemonCreated) => {
        if (err) {
            res.status(403).send(err) ;
        } else {
            console.log(req.body);
            res.redirect("/pokemon")
        } 
    })

    // pokemon.push (req.body); //before 
    // res.redirect ("/pokemon")
})



//edit 




//show 
app.get ("/pokemon/:id" , (req,res) => {
   Pokemon.findById (req.params.id , (err,pokemonFound) =>{
       if (err) {
           res.status(400).send(err);
       }else {
           res.render("Show.jsx" , {
               pokemon :pokemonFound 
           })
       }
   })
})











//port  3000 
app.listen (3000 , () => {
    console.log ("listening to port 3000");
})