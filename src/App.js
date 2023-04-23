import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Partners from './Components/Partners';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Partners" element={<Partners />}/>
        <Route path="/Team" element={<Team />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
