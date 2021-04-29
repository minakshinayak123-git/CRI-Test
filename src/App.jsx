import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './screens/Home'

function App() {

  return (
    <div className="container">
      <div className="headerContainer">
      <Header />
      </div>
    
     <Home />
     <div className="footerContainer">

     <Footer/>
     </div>
     
    </div>
  )
}

export default App
