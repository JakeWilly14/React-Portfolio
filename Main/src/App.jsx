// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css'

function App() {
  return (
    <>
    <Nav />
    <Outlet />
  </>
  )
}

export default App
