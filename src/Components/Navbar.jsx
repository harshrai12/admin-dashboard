import React,{useState} from 'react'
import { MdDeleteOutline } from "react-icons/md";

function Navbar({search,setSearch}) {
  const [input,setInput]= useState("");
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value);
    }
  };
    
  return (
    
    <div className='navbar'>
      <div className="search">
      <input type="text" placeholder='Enter value' value={input} onChange={(e)=>setInput(e.target.value)}  onKeyDown={handleKeyDown}/>
      </div>
      <div className="delete">
      <button className='delete-selected'><MdDeleteOutline color='white' size='20' /></button>
      </div>
    </div>
  )
}

export default Navbar
