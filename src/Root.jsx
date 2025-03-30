import './App.css'
import Client from './components/Client'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Services from './components/Services'
import Tools from './components/Tools'
import Whatsapp from './components/Whatsapp'
import { Helmet } from "react-helmet";

function App() {
//https://cybertizeweb.com/
  return (
    <>
    <Helmet>
        <title>spactour Technology | Website Development Company in Patna</title>
        <meta
          name="description"
          content="spactour Technology - Your trusted partner for website design, app development, and software solutions in Patna. We specialize in modern, user-friendly websites, innovative apps, and comprehensive IT services to help businesses grow."
        />
      </Helmet>

      <Nav/>
      <Whatsapp/>
      <Home/>
      <Services/>
      <Tools/>
      <Client/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
