import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharacterDetails from './pages/CharacterDetails';  
import Navbar from './components/Navbar';
import Aliens from './pages/Aliens';
import Humans from './pages/Humans';
import About from './pages/About';
import { CssBaseline } from '@mui/material'; 


function App() {
  return (
    <Router>
      <CssBaseline /> {}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/aliens" element={<Aliens />} />
        <Route path="/humans" element={<Humans />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
