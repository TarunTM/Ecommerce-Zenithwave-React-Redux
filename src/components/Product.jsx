import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { remove, add } from '../redux/slices/CartSlice';

const Products = ({product}) => {

  const {cart} = useSelector( (state) => state);
  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(product.id));
    toast.error('Item removed from cart');
  }

  function addToCart(){
    dispatch(add(product));
    toast.success('Item added to cart');
  }


  return (
    <div className='group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5 rounded-xl'>

        <p className='truncate w-40 mt-1 text-gray-700 font-semibold text-lg text-left'>{product.title}</p>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{product.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        
          <div className='w-[200px] h-[200px]'>
            <img src={product.image} className='w-full h-full object-contain' />
          </div>
        
        
        

        <div className='flex items-center justify-between w-full mt-5'>
            <p className='text-blue-600 font-semibold'>${product.price}</p>
            {
              cart.some( (p) => p.id == product.id) ? 
              (<button onClick={removeFromCart} className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'>REMOVE ITEM</button>) :
              (<button onClick={addToCart} className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'>ADD TO CART</button>)
            }
        </div>
    </div>
  )
}

export default Products