
import './App.css'
import { Header } from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Service from './components/Services/Service'
import Rooms from './components/Room/Room' 
import { Amenities } from './components/Amenities/Amenities'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Nav/>
      <Header />
      <About />
      <Service />
      <Rooms />
      <Amenities />
      <Testimonial />
      <Footer/>
    </>
  )
}

export default App
