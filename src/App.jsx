import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';

import Navbar from './Components/Navbar';
import Userlist from './Components/Userlist.jsx';


function App() {
  const [search,setSearch] = useState("");//serach state
  const [api,setapi]= useState([]);
  async function deleterow(id){
    const filteredarr =api.filter((item)=>item.id!==id)
    setapi(filteredarr);
}

  
  async function callapi  (){
   try{
    const res = await axios("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    console.log(res.data)
    setapi(res.data);
   }
   catch(error){
    console.log(error)
   }
    
 }
   useEffect(()=>{
    callapi();
   },[])
  return (
    <>
      <div className="app">
      <Navbar search={search} setSearch={setSearch}/>
      <Userlist search={search} api={api} setapi={setapi} deleterow={deleterow}/>
      </div>
    </>
  )
}

export default App
