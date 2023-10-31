import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import AdvertiseMain from './Components/Advertise/AdvertiseMain';
import About from './Components/About/About';
import NavbarTrial from './Components/Header/NavbarTrial';

function App() {
  return (
    <BrowserRouter className='bg-gray-200'>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/advertise" element={<AdvertiseMain/>}/>
        <Route path="/support" element={<About/>}/>
        <Route path="/contact" element={<About/>}/>
        <Route path="/nav" element={<NavbarTrial/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
