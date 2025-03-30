import { BrowserRouter as Router ,Route , Routes , Navigate } from 'react-router-dom';
import './App.css'
import Root from './Root'
import About from './components/About';
import ContactUs from './components/ContactUs';
import ServicesPage from './components/ServicesPage';
import PrivacyPolicy from './components/PrivacyPolicy';
function App() {
//https://cybertizeweb.com/
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={Root} />
          <Route path='/about' exact Component={About} />
          <Route path='/contact' exact Component={ContactUs} />
          <Route path='/service' exact Component={ServicesPage} />
          <Route path='/PrivacyPolicy' exact Component={PrivacyPolicy} />
          <Route path='/support@spactour.in' element={<Navigate to="/" replace />} />
          <Route path='/feed' element={<Navigate to="/" replace />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
