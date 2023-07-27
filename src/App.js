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
import Main from './blocks/Main';
import LeftSidebar from './blocks/LeftSidebar';
import RightSideBar from './blocks/RightSideBar';

function App() {
  return (
    <div className="App mx-auto w-4/5">
      <Menu />
      <div className = "flex justify-around">
        <div className = "item-center">
          <LeftSidebar />
        </div>
        <div className = "item-center">
           <Main />
        </div>
        <div className = "item-center">
          <RightSideBar />
        </div>
      </div>
      <div>
         <Footer />
      </div>
    </div>
  );
}

export default App;
