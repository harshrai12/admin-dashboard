import React from 'react'
import Userrow from './Userrow'

function Userlist({api ,search,deleterow,setapi}) {
  return (
    <div>
      <Userrow search={search} api={api} deleterow={deleterow} setapi={setapi} />
    </div>
  )
}

export default Userlist
