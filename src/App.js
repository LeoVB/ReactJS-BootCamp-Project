import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting'
import GreetingF from './components/pure/greetingF'
import Task_listComponent from './components/container/task_list';
import ContactListComponent from './components/container/ContactList';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import ComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/GreetingSyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/OptionalRender';
import RectanguloRGB from './components/pure/RectanguloRGB';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/FetchExample';
import { AxiosError } from 'axios';
import AxiosExample from './components/pure/AxiosExample';
import AxiosChuckNorrisJoke from './components/pure/AxiosChuckNorrisJoke';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Componente greetings creado por mi*/}
      {/* 
        <Greeting name="Leonardo"></Greeting> */}
      {/* <GreetingF name="Llexod"></GreetingF> */}


      {/**CLASE  3*/}
      {/* ComponenteListado de Tareas */}
      {/* <Task_listComponent></Task_listComponent> */}

      {/* Tareilla contactos */}
      {/* <ContactListComponent></ContactListComponent> */}


      {/**CLASE  4*/}
      {/** Ejemplos de uso de HOOKS*/}
      {/* <Ejemplo1></Ejemplo1> */}

      {/* <Ejemplo2></Ejemplo2> */}

      {/* <ComponenteConContexto></ComponenteConContexto> */}

      {/**Todo lo que hay aqui adentro, es tratado como props.children */}

      {/* <Ejemplo4 nombre='Leo'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}


      {/**CLASE  6*/}
      {/* ComponenteListado de Tareas */}
      {/* <Task_listComponent></Task_listComponent> */}

      {/* <GreetingStyled name='Leo'></GreetingStyled> */}

      {/**CLASE  7*/}

      {/* <Task_listComponent></Task_listComponent> */}


      {/**Clase 8 Gestion de eventos */}
      {/* <Father></Father> */}


      {/**CLASE  9*/}

      {/* <Task_listComponent></Task_listComponent> */}

      {/**Clase 11 */}
      {/**Ejemplos de renderizado condicional */}

      {/* <OptionalRender></OptionalRender> */}

      {/**Tarea de rectanguloRGB */}
      {/* <RectanguloRGB></RectanguloRGB> */}

      {/**Clase 12 */}
      {/* <Task_listComponent></Task_listComponent> */}

      {/**Clase 13 */}
      {/**Ejemplos uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}


      {/**Clae 14 */}
      {/* <RegisterFormik></RegisterFormik> */}


      {/**Async examples */}
      {/* <AsyncExample></AsyncExample> */}

      {/**Observable with rxjs */}
      {/* <ObservableExample></ObservableExample> */}

      {/* <FetchExample></FetchExample> */}

      {/* <AxiosExample></AxiosExample> */}


      {/**Chuck Norris homework */}
      {/* <AxiosChuckNorrisJoke></AxiosChuckNorrisJoke> */}


      {/**CRUD Example */}
      <AxiosCRUDExample></AxiosCRUDExample>


      {/**Avance de proyecto */}
     
      

      {/*      </header> */}
    </div>
  );
}

export default App;
