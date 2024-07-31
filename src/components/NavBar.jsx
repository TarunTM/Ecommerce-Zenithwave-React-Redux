import React from 'react'
import logo from '../assets/zenithwaveWhiteText.png';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {

  const {cart} = useSelector( (state) => state);

  return (
    <div >
      <nav className='flex justify-between h-20 items-center max-w-6xl mx-auto'>
        <NavLink to='/'><img src={logo} alt='Logo' loading='lazy' width={250}></img></NavLink>
        
        <div className='flex items-center font-medium mr-5 space-x-6 text-slate-100 tracking-tighterr'>
            <NavLink to='/'> <p className='cursor-pointer hover:text-blue-400 transition duration-300  ease-in'>Home</p> </NavLink>
            <NavLink to='/cart'> 
                              <div className='relative'>
                                  <FaShoppingCart className='text-2xl' /> 
                                  {
                                    cart.length > 0 && 
                                    <span className='absolute -top-1 -right-2 bg-blue-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
                                      {cart.length}
                                    </span>
                                  }
                              </div>
            </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar