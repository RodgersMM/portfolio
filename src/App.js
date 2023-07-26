import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import Imagedsc from './components/Imagedsc';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Image />
      <Imagedsc />

      <About />
      <Hobbies />

      <Skills />
      <Projects />
      <Footer />
     
    </div>
  );
}

export default App;
