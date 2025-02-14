import './App.css'
import Navbar from './components/navbar/Navbar'
import Topbar from './components/topbar/Topbar'
import Footer from "./components/footer/Footer"
import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import { useEffect } from 'react'
import OfficalPage from './pages/officalPage/OfficalPage'
import PartnersPage from './pages/partnersPage/PartnersPage'
import ContactPage from './pages/contactPage/ContactPage'
import ServicePage from './pages/servicePage/ServicePage'
import FormPage from './pages/formPage/FormPage'
import CareerPage from './pages/careerPage/Career'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function App() {

  const location = useLocation();

  useEffect(() => {
    if(!location.hash) {
      window.scrollTo(0, 0);
    }
    
  }, [location])
  

  return (
    <div className='app'>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/Anasayfa" element={<HomePage />}/>
        </Route>
        <Route path="/Kurumsal" element={<OfficalPage />}/>
        <Route path="/Ortaklarimiz" element={<PartnersPage />}/>
        <Route path="/Iletisim" element={<ContactPage />}/>
        <Route path="/Hizmetler" element={<ServicePage />}>
          <Route path=":serviceName" element={<ServicePage />} />
        </Route>
        <Route path="/Teklif-Al" element={<FormPage />}/>
        <Route path="/Kariyer" element={<CareerPage />}/>
      </Routes>
      <Footer />
      <div className="contact-icons">
        <a href="https://api.whatsapp.com/send?phone=905400996666" target="_blank" ><WhatsAppIcon className="whatsapp"/><span className="shadow"></span><span className="shadow2"></span></a>
      </div>
    </div>
  )
}

export default App
