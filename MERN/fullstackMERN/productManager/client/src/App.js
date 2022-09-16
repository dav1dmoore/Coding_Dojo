import './App.css';
import Main from './views/Main';
import Details from './components/Details'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
