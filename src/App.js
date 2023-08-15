import './App.css';
import Main from './pages/Main';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
