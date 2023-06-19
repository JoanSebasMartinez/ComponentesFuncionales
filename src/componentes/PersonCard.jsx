import React from "react";

/*class PersonCard extends React.Component{
    render(){
        const {perfil, name, age} = this.props;
        return (
            <div className="contenedor">
                
                <div><img src={perfil} alt="profile" className="profilePic"></img></div>
                <div>
                <h2>{name}</h2>
                <h5>Age: {age}</h5>
                </div>
            </div>
        );
    }
}*/

function PersonCard(props){
    const {perfil, name, age}= props;
    return(
        <div className="contenedor">
                <div><img className="App-logo" src={perfil} alt="profile"></img></div>
                <div>
                <h2>{name}</h2>
                <h5>Age: {age}</h5>
                </div>
            </div>
    );
}

export default PersonCard;