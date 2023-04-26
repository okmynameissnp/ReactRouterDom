import './App.css';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Service} from './Components/Service';
import {Gallery} from './Components/Gallery';
import {Contact} from './Components/Contact';
import {BrowserRouter as R1,Routes as R2,Route as R3} from 'react-router-dom';
import {Signup } from './Components/Signup';
import {Signin } from './Components/Signin';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div classNmae='Nav-bar'>
       
    
        <R1>
        <R2>
  
          <R3 path='/' element={<Home/>}>Home</R3>
          <R3 path='/About' element={<About/>}>About</R3>
          <R3 path='/Service' element={<Service/>}>Service</R3>
          <R3 path='/Gallery' element={<Gallery/>}>Gallery</R3>
          <R3 path='/Contact' element={<Contact/>}>Contact</R3>
          <R3 path='/Signin' element={<Signin/>}>Signin</R3>
          <R3 path='/Signup' element={<Signup/>}>Signup</R3>


        </R2>
      </R1>
        </div>
        <div className='lo-bar'>

        </div>
      </div>
      
    </div>
  );
}

export default App;