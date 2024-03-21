import React from 'react'

const Navbar = ({Setinput, foundLength}) => {

  return (
    <div className='Navbar'>
     <h2 className='Navbar-logo-header'><span style={{fontSize:"25px"}}>🍿</span> usePopcorn</h2>
      <input type="text" className='Navbar-Search-Field' onChange={(e)=>{Setinput(e.target.value)}} placeholder='Search Movies...'/>
      <p className='Navbar-logo-header'>Found <span>{foundLength || 0}</span> Top Results</p>
    </div>
   
  )
}

export default Navbar