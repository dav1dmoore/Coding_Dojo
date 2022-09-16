import './App.css';
import Main from './views/Main';
import Details from './components/Details'
import Edit from './components/Edit'
import {Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product/:id" element={<Details/>}/>
        <Route path="/:id/edit" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
