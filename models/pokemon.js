const mongoose =require("mongoose") ;
const { boolean } = require("webidl-conversions");

const pokemonSchema = new mongoose.Schema ({
name : String ,
power :String,
readyToFight :Boolean,
img : String
})

const Pokemon = mongoose.model ("Pokemon",pokemonSchema) ;
module.exports = Pokemon;





