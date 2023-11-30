import React from 'react'
import GlitchedButton from './GlitchedButton';

function Navbar() {
    const handleClick = () => {
        // Your onClick logic here
        console.log('Button clicked!');
      };
  return (
    <div className='navbar'>
        <div className='navbarcontainer'>
            <span className='logo'>Linda</span>
            <div className='buttons'>
            <GlitchedButton
        name="Join"
        onClick={()=>window.location.href = '/join'}
        backgroundColorClass="background"
        borderColorClass="primary"
        mainfont="fontprimary"
      />
           
           <GlitchedButton
        name="Login"
        onClick={()=> window.location.href = '/login'}
        backgroundColorClass="background"
        borderColorClass="primary"
        mainfont="fontprimary"
      />
            </div>
        </div>
    </div>
  )
}

export default Navbar