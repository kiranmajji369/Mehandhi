import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import About from "./components/aboutpage";
import ContactUs from './components/contactpage';
import Footer from './components/footerpage';
import Header from './components/headerpage';
import HeroSection from './components/herosection';
import ServicesSection from './components/servicesection';
import ServicesPage from './components/servicepage';
import Gallery  from './components/gallery';
import GalleryHomeSection from './components/galleryhomesection';
import HomePage from './components/homepage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/aboutpage' element={<About/>}/>
        <Route path='/contactpage' element={<ContactUs/>}/>
        <Route path='/footerpage' element={<Footer/>}/>
        <Route path='/headerpage' element={<Header/>}/>
        <Route path='/herosection' element={<HeroSection/>}/>
        <Route path='/servicesection' element={<ServicesSection/>}/>
        <Route path='/servicepage' element={<ServicesPage/>}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/galleryhomesection' element={<GalleryHomeSection />}/>
        <Route path='/homepage' element={<HomePage />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
