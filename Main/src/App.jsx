// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
    <Header />
    <Footer />
    <Outlet />
  </>
  )
}

export default App
