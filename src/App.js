import './App.css';
import Homemenu from './components/homemenu/homemenu';
import Socialmedia from './components/socialmedia/socialmedia';
import Home from './pages/home/home';

function App() {
  return (
    <div>
      <Home/>
      <Socialmedia/>
      <Homemenu/>
    </div>
  );
}

export default App;
