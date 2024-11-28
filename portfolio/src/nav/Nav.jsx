import React from 'react'

export default function Nav() {
  return (
    <div style={{width:"100%",backgroundColor: 'gray', display: 'flex', justifyContent: 'center', alignItems: 'center',width: '132%',marginLeft:"-16%"}}>
      <nav style={{ color: 'white', padding: '10px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <button type="button" style={{border: 'none', background: 'none', color: 'white', padding: '10px', margin: '0 10px'}} data-toggle="collapse" data-target="#myNavbar">
              <span style={{display: 'block', width: '20px', height: '2px', backgroundColor: 'white', margin: '5px 0'}}></span>
              <span style={{display: 'block', width: '20px', height: '2px', backgroundColor: 'white', margin: '5px 0'}}></span>
              <span style={{display: 'block', width: '20px', height: '2px', backgroundColor: 'white', margin: '5px 0'}}></span> 
          </button>
          <a href="#" style={{color: 'white', textDecoration: 'none', margin: '0 10px'}}>Luper Dev</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar" style={{display: 'flex', justifyContent: 'flex-end'}}>
          <ul style={{display: 'flex', listStyle: 'none', padding: '0', margin: '0'}}>
            <li style={{margin: '0 10px'}} className="active"><a href="#" style={{color: 'white', textDecoration: 'none'}}>Home</a></li>
            <li style={{margin: '0 10px'}}><a href="#" style={{color: 'white', textDecoration: 'none'}}>About</a></li> 
            <li style={{margin: '0 10px'}}><a href="#" style={{color: 'white', textDecoration: 'none'}}>Portfolio</a></li>
            <li style={{margin: '0 10px'}}><a href="#" style={{color: 'white', textDecoration: 'none'}}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
