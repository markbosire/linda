import React from 'react'
import Navbar from '../components/Navbar'
import InfoComponent from '../components/InfoComponent'
import Companies from '../assets/images/companies.png'
import Play from '../assets/images/play.png'
import Role from '../assets/images/role.png'
import Tutorials from '../assets/images/tutorials.png'
import DataComponent from '../components/DataComponent'

function LandingPage() {
    const data = [
        { imagePath: Companies, paragraph: 'Pick your virtual company, dive into a cool workplace, and tackle challenges to build a killer career. Level up your skills and rock the corporate world as a top player!' },
        { imagePath: Role, paragraph: 'Jump into the virtual realm where your role awaits! Our game assigns you a unique position, letting you experience the excitement of navigating challenges and rising through the ranks.' },
        { imagePath: Tutorials, paragraph: 'Embark on your adventure with a helpful tutorial! Our game ensures a smooth start, guiding you through the basics so you can dive into the virtual experience with confidence.' },
        { imagePath: Play, paragraph: 'Engage in corporate warfare! Seize the thrill as you strategically attack rival companies while fortifying your own. Navigate challenges, dominate the market, and rise to corporate supremacy!' },
       
       
        // Add more data objects as needed
      ];
  return (
    <React.Fragment>
    <Navbar/>
    <InfoComponent
  title="Level up through epic challenges"
  description="Master the realm of digital protection!"
  buttonText="Get Started"
  onButtonClick={() => window.location.href = '/join'}
/>

    <DataComponent data={data}/>
    </React.Fragment>
  )
}

export default LandingPage