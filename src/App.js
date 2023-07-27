import logo from './logo.svg';
import './index.css';
import Image from './components/Image';
import Imagedsc from './components/Imagedsc';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import Test from './components/Test';
import About from './components/About';
import Tail from './components/Tail';
import Navbar from './components/Navbar';
import Menu from './blocks/Menu';
import MainOne from './blocks/MainOne';

function App() {
  return (
    <div className="App mx-auto w-4/5">
      <Menu />
      <MainOne />
      <MenuTwo />
      <Footer />


    </div>
  );
}

export default App;
