import React, { useState } from 'react'

function Homenavbar({location}) {
    const [active,setActive]=useState(location)
  return (
    <div className='HomeNavbar' >
        <span className={active=="Home"?"first active":"first"} onClick={()=>{window.location.href = '/home';}}><div className={active=="Home"?"active":""}>Home</div></span>
        <span className={active=="Play"?"active":""} onClick={()=>{window.location.href = '/play';}}><div className={active=="Play"?"active":""}>Play</div></span>
        <span><div>Objectives</div></span>
        <span><div>Leaderboard</div></span>
        <span><div>Courses</div></span>
        <span><div>Challenges</div></span>
        <span className='last'><div>Profile</div></span>
    </div>
  )
}

export default Homenavbar