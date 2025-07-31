
import './App.css'
import ContactForm from './Pages/ContactForm'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'


const App=() =>  {

  return (
        <Router>
          <div>
        <nav>
          <Link to="/">Home</Link>| {"  "}
          <Link to="/contact">Contact</Link>| {"  "}
          <Link to="/about">About</Link>| {"  "}  

          </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/about" element={<AboutUs/>} />

        </Routes>
      </div>
    </Router>
    
  )
}

export default App
