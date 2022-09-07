import './App.css';
import Form from './components/Form';
import PeopleComponent from './components/PeopleComponent';
import PlanetComponent from './components/PlanetComponent';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Form />
      <Routes>
        <Route path='/' element={<h1>C3P0 says hello</h1>}/>
        <Route path='/people/:id' element={<PeopleComponent />}/>
        <Route path='/planets/:id' element={<PlanetComponent />}/>
      </Routes>
    </div>
  );
}

export default App;
