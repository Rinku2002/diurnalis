import { Route, Routes } from 'react-router-dom';
import './App.css';
import Socialmedia from './components/socialmedia/socialmedia';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import Aboutus from './pages/aboutus/aboutus';
import Composition from './pages/composition/composition';
import Articles from './pages/articles/articles';
import Navbar from './components/navbar/navbar';
import Joinus from './pages/joinus/joinus';
import {BsFillArrowDownSquareFill} from 'react-icons/bs'
import Fac from './pages/fac/fac';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/composition' element={<Composition/>}></Route>
        <Route path='/joinus' element={<Joinus/>}/>
        <Route path='/fac' element={<Fac/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
      <Socialmedia/>
      {/* <Homemenu/> */}
      <div className='arrow'>
        <a href='#footer' className=''>
          <BsFillArrowDownSquareFill className='arrowIcon bg-dark border border-light'/>
        </a>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
