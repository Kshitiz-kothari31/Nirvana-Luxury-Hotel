import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Rooms from './components/Rooms/Rooms';
import Services from './components/Services/Services';
import Discount from './components/Discount/Discount';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <Discount />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
