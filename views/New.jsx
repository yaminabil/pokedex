const React = require("react") ; 

const myStyle = { 
    color : "#ffffff",
    backgroundColor : "#000000" 
}

// {name: "venusaur",
// power : "solarbeam",
// readyToFight :true,
// img: "http://img.pokemondb.net/artwork/venusaur"
// },


class New extends React.Component { 
    render () {
        return(
        <div>
           
                <div style={myStyle}> <h1>create new pokemon </h1> </div>
                <a href = "/pokemon">  go back to the main page </a>

                <form action="/pokemon" method="POST">

                pokemon Name : <input name="name" type ="text"/><br/>
                pokemon Power : <input name="power" type="text"/><br/>
                Ready To Fight : <input name ="readyToFight" type="checkbox"/><br/>
                Picture URL : <input name ="img" type="text"/><br/>
                Creat : <input type="submit"/>
                
                </form>
        </div>

        )
    }
}

module.exports = New ;