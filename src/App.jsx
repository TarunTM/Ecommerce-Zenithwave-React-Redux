import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {



  return (
    <div className=''>
      <div className='bg-slate-900'>
        <NavBar/>
      </div>
      

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App
