import React from 'react'
import Userrow from './Userrow'

function Userlist({api ,search,deleterow,setapi,handeleselectedDelete,setSelectedRows,selectedRows}) {
  return (
    <div>
      <Userrow search={search} api={api} deleterow={deleterow} setapi={setapi} handeleselectedDelete={handeleselectedDelete} setSelectedRows={setSelectedRows} selectedRows={selectedRows}/>
    </div>
  )
}

export default Userlist
