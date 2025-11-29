import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderImage from './assets/HeaderImage.jpg';


function App() {
  
  return(
    <>
     <div className='HeaderImage'>
      <img id="Image" src={HeaderImage} alt='Skin products-Header Image'/>
      <p id="HeaderPar"> Désirée — where beauty meets gentle care.<p id="shop"> Explore our products</p></p>
      {/* <button className="Button" type='button'> Shop </button> */}
    </div>
    </>
  )
}

export default App
