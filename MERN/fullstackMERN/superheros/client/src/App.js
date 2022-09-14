import './App.css';
import AllHeros from './components/AllHeros';
import {Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import AddHero from './components/AddHero';
import EditHero from './components/EditHero';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllHeros/>}/>
        <Route path="/hero/add_hero" element={<AddHero/>}/>
        <Route path="/hero/edit/:id" element={<EditHero/>}/>
      </Routes>
    </div>
  );
}

export default App;
