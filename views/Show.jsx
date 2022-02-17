const React = require ("react") ; 
const myStyle = { 
    color : "#ffffff",
    backgroundColor : "#000000" 
}



class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon;
        return ( 
            <div>

                <div style = {myStyle}><h1>Gotta Catch 'Em All</h1></div>
                <nav> 
                    <a href = "/pokemon">go back to pokemon list </a>
                </nav>
            
            
            
            <h1> {pokemon.name}</h1>
            <img src={pokemon.img+".jpg"}/>
            <h2>Power : {pokemon.power} </h2>
            <h2>{pokemon.img}</h2>
            </div>
            
          
           

        )
    }

}



module.exports = Show ;