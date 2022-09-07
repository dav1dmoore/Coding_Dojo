import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Teams from './components/Teams.jsx';
import Players from './components/Players.jsx';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React Routing</h1>
      <NavBar />
      <Routes>
        <Route path="/aboutus" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:city" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/" element={<h1>Hi, I'm Home!</h1>} />
    </Routes>
    </div>
  );
}

export default App;
