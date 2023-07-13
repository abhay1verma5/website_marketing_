
import Navbar from './component/Navbar';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Plans from './component/Plans';
import Grid from './component/Grid';
function App() {
  return (
    <div className="">

    <div><Navbar> </Navbar> </div>
    <div className='fullpage'> <Routes><Route path="/" element={<Home/>}></Route>
    <Route path="/Plans" element={<Plans/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    </Routes></div>
   
   <Grid></Grid>
    </div>
  );
}

export default App;
