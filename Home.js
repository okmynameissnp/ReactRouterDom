import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Assets/img1.jpeg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpeg';


export const Home = () => {
  return (
    <div className='Container'>
        <div className='Nav-bar'>
            
                <Link to="/" className='li'>Home</Link>
                <Link to="/About" className='li'>About</Link>
                <Link to="/Service" className='li'>Service</Link>
                <Link to="/Gallery" className='li'>Gallery</Link>
                <Link to="/Contact" className='li'>Contact</Link>
                <Link to="/Signin" className='li1'>Signin</Link>
                <Link to="/Signup" className='li1'>Signup</Link>
        </div> 
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={img1} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>i love the nature man</h5>
    <p>first pic</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img2} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>i feel like playing cricket</h5>
    <p>second pic</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img3} alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>i feel like ride my bike</h5>
    <p> third pic</p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
        
        
    


  )
}