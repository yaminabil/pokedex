const React = require ("react"); 
const myStyle = {
    color :"#ffffff",
    backgroundColor : "#000000"
}

class Index extends React.Component {
    render () {
        const pokemon = this.props.pokemon ;
       
        return (
            <div>
                
                <div style = {myStyle}><h1>See All The Pokemon!</h1></div>
                <ul> 
                    {
                        pokemon.map ( (poke) => {
                            return ( 
                            <li> name : {poke.name[0].toUpperCase()+poke.name.slice(1)} </li>)
                          
                    }) 
                    }               
                </ul>
            </div>
        )
    }
}

module.exports = Index ; 