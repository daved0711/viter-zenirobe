import React from 'react'
import { imgPath } from '../../../helpers/functions-general'
import { Link } from 'react-router-dom';



const Carditem = ({item, key}) => {
  const title = item.title;
  return (
    <Link to={`/product/${title.toLowerCase().replaceAll(" ","-")}`}>
    <div className='new-arrival-card px-10' key={key} >
    <div className='mb-4 relative group'>
     <p className='absolute top-3 left-3 bg-white px-4 py-1 rounded-full text-[10px] font-bold uppercase z-20 group-hover:opacity-0'>new</p>
     <img
           src={`${imgPath}/${item.img1}`}
           alt=""
           className="transition-opacity group-hover:opacity-1"
         />
         <img
           src={`${imgPath}/${item.img2}`}
           alt=""
           className="transition-opacity absolute left-0 top-0 group-hover:opacity-0 z-10"
         />
    
    </div>
    <div className=' text-center space-y-4'>
        <h5>{item.title}</h5>
        <h6>${item.price}AUD</h6>
        <ul className=' flex gap-5 justify-center'>
         <li className='tooltip' data-tooltip="in stock">29</li>
         <li className='tooltip' data-tooltip="in stock">30</li>
         <li className='tooltip' data-tooltip="in stock">31</li>
         <li className='tooltip' data-tooltip="in stock">32</li>
         <li className='tooltip' data-tooltip="out of stock">33</li>
        </ul>
    </div>           
   </div>
   </Link>
  )
}

export default Carditem
