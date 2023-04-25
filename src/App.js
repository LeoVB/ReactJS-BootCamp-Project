import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting'
import GreetingF from './components/pure/greetingF'
import Task_listComponent from './components/container/task_list';
import ContactListComponent from './components/container/ContactList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente greetings creado por mi*/}
{/* 
        <Greeting name="Leonardo"></Greeting> */}
        {/* <GreetingF name="Llexod"></GreetingF> */}

        {/* ComponenteListado de Tareas */}
        {/* <Task_listComponent></Task_listComponent> */}

        {/* Tareilla contactos */}
        <ContactListComponent></ContactListComponent>

      </header>
    </div>
  );
}

export default App;
