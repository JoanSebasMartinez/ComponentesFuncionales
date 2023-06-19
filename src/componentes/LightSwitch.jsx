import { useState } from 'react';

/*class LightSwitch extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            position: "On",
            number: 0
        };
        this.flipSwitch = this.flipSwitch.bind(this);
        this.cambiar = this.cambiar.bind(this);
    }
    render() {
        return (
            <fieldset>
                <p>The light is currently { this.state.position }</p> 
                <button onClick={this.flipSwitch}>Flip Switch</button>
                <p>{this.state.number}</p>
                <button onClick={this.cambiar}>Like</button>
            </fieldset>
        );
    }
    flipSwitch() {
        if( this.state.position == "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    } 
    cambiar(){
        this.setState({...this.state, number: this.state.number+1})
    } 
}*/

function LightSwitch(props){
    const [position, setPosition] = useState("On");
    const [number, setNumber] = useState(0);

    const flipSwitch = () => {
        if( position == "On" ) {
            setPosition("Off" );
        } else {
            setPosition("On" );
        }
    } 

    const cambiar = () =>{
        setNumber(number+1);
    }

    return (
        <fieldset>
            <p>The light is currently { position }</p> 
            <button onClick={flipSwitch}>Flip Switch</button>
            <p>{number}</p>
            <button onClick={cambiar}>Like</button>
        </fieldset>
    );
}

export default LightSwitch;