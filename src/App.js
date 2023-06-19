import logo from '../src/img3.png';
import logo2 from '../src/img1.gif';
import logo3 from '../src/img2.gif';
import './App.css';
import PersonCard from "./componentes/PersonCard";
import LightSwitch from './componentes/LightSwitch';


function App() {
  return (
    <div className="App">
      <PersonCard perfil={logo} name={"Carla Garcia"} age={25}></PersonCard>
      <PersonCard perfil={logo2} name={"Luis Recalde"} age={25}></PersonCard>
      <PersonCard perfil={logo3} name={"Andres Moye"} age={25}></PersonCard>
      <LightSwitch ></LightSwitch>
    </div>
  );
}

export default App;
