import './App.css';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Service } from './Components/Service/Service';
import { Contact } from './Components/Contact/Contact';
import { Project } from './Components/Project/Project';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="service" element={<Service />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="project" element={<Project />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
