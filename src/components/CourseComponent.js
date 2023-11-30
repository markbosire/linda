import React from 'react'
import Blockchain from '../assets/images/courses/blockchain.png'
import Cloud from '../assets/images/courses/cloud.png'
import Database from '../assets/images/courses/database.png'
import Email from '../assets/images/courses/email.png'
import Info from '../assets/images/courses/info.png'
import Mobile from '../assets/images/courses/mobile.png'
import Network from '../assets/images/courses/network.png'
import OS from '../assets/images/courses/os.png'
import Web from '../assets/images/courses/web.png'
import CourseGrid from './CourseGrid'

function CourseComponent({func,breadcrumb}) {
    const Course = [
       {imagePath:Web,title:"Web security"},
       {imagePath:Info,title:"Information security"},
       {imagePath:OS,title:"OS security"},
       {imagePath:Email,title:"Email security"},
       {imagePath:Mobile,title:"Mobile security"},
       {imagePath:Network,title:"Network security"},
       {imagePath:Database,title:"Database security"},
       {imagePath:Cloud,title:"Cloud security"},
       {imagePath:Blockchain,title:"Blockchain"},

       
        // Add more data objects as needed
      ];
  return (
    <div>
      
        
        <CourseGrid courses={Course} func={func} breadcrumb={breadcrumb}/></div>
  )
}

export default CourseComponent