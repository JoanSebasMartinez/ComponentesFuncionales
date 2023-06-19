import React from "react";

class PersonCard extends React.Component{
    render(){
        const {perfil, name, age} = this.props;
        return (
            <div className="contenedor">
                <div className="profilePic"><img src={perfil} alt="profile"></img></div><br></br>
                <h2>{name}</h2>
                <h5>Age: {age}</h5>
            </div>
        );
    }
}

export default PersonCard;