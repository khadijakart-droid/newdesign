import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './navbar/navbar'
import Home from './home/home'
import Service from './service/service'
import Portfolio from './portfolio/portfolio'
import Aboutus from './aboutus/aboutus'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/aboutus' element={<Aboutus />} />
      </Routes>
    </>
  )
}

export default App