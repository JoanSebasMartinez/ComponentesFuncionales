import logo from './';
import './App.css';
import PersonCard from "./componentes/PersonCard";
import LightSwitch from './componentes/LightSwitch';




function App() {
  return (
    <div className="App">
      <PersonCard perfil={logo} name={"Carla Garcia"} age={25}></PersonCard>
      <PersonCard perfil={logo} name={"Luis Recalde"} age={25}></PersonCard>
      <PersonCard perfil={logo} name={"Andres Moye"} age={25}></PersonCard>
      <LightSwitch ></LightSwitch>
    </div>
  );
}

export default App;
