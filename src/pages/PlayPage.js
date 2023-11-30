import React,{useState} from 'react'
import Homenavbar from '../components/Homenavbar'
import InfoComponent from '../components/InfoComponent'
import Cloud from "../assets/images/play/cloud.png"
import Instructions from "../assets/images/play/instructions.png"
import Local from "../assets/images/play/local.png"
import XP from "../assets/images/play/xp.png"
import DataComponent from '../components/DataComponent'
import Dialog from '@mui/material/Dialog';
import Password from '../assets/Games/Password'
function PlayPage() {
    const [openPassword, setOpenPassword] = useState(false);
  
    const data = [
        { imagePath: XP, paragraph: 'Click here to watch a tutorial on how to complete this level' },
        { imagePath: Instructions, paragraph: 'Click here to read here to get details on what you need complete this level' },
        { imagePath: Cloud, paragraph: 'Click here to use our pcs to complete this level' },
        { imagePath: Local, paragraph: 'Click here to know how to use your computers to complete this level' },
       
       
        // Add more data objects as needed
      ];

      const tasks =[{
        title:"Pick a password:",
        description:"Complete the first task by picking a suitable company password",
        
      },
    ];
    
  return (
    <React.Fragment><Password openModal={openPassword} setOpenModal={setOpenPassword}/>
       <div className='PlayPage'>
        <section>
        <Homenavbar location="Play"/>
            <div className="PlayComponent">
            <InfoComponent
  title="Pick a password:"
  description="Complete the first task by picking a suitable company password"
  buttonText="Start!"
  onButtonClick={() => {setOpenPassword(true);}}
/>
<DataComponent data={data}/>
            </div>
        </section>
    </div></React.Fragment>
 
  )
}

export default PlayPage