import React,{useState,useEffect} from 'react'
import GlitchedButton from './GlitchedButton';

function CourseGrid({ courses,func,breadcrumb }) {
    const [chosen,setChosen] =useState(0)
  
  
      useEffect(()=>{
        const usernameToFind = localStorage.getItem('user'); // Replace this with the actual username

        let storedUsersString = localStorage.getItem('users');
        let storedUsers = JSON.parse(storedUsersString);
        
        // Find the index of the user based on the username
        const userIndex = storedUsers.findIndex(user => user.username === usernameToFind);
        
        if (userIndex !== -1) {
          // Edit the element (e.g., change the 'course' property)
          storedUsers[userIndex].course = "Web security";
        
          // Serialize the edited array of users back to a string
          let editedUsersString = JSON.stringify(storedUsers);
        
          // Update the value in localStorage
          localStorage.setItem('users', editedUsersString);
          console.log('User info updated successfully.');
        } else {
          console.log('User not found.');
        }

      },[])
      
   
      function SetCourse(course,index){
        setChosen(index)
      // Assume you have a way to collect or obtain the username
const usernameToFind = localStorage.getItem('user'); // Replace this with the actual username

let storedUsersString = localStorage.getItem('users');
let storedUsers = JSON.parse(storedUsersString);

// Find the index of the user based on the username
const userIndex = storedUsers.findIndex(user => user.username === usernameToFind);

if (userIndex !== -1) {
  // Edit the element (e.g., change the 'course' property)
  storedUsers[userIndex].course = course;

  // Serialize the edited array of users back to a string
  let editedUsersString = JSON.stringify(storedUsers);

  // Update the value in localStorage
  localStorage.setItem('users', editedUsersString);
  console.log('User info updated successfully.');
} else {
  console.log('User not found.');
}

      }
  return (
    <div className='course-grid-component'>

<div className='r'>
        {breadcrumb()}
<section>
        <div className='course-grid-info'>
            <div className='top'>
            <h1>Choose 
course</h1>
            <p>Lets select the first course you will go with this will be the certificate you will receive</p>
            </div>
            <GlitchedButton
        name="continue"
        onClick={()=>func()}
        backgroundColorClass="secondary"
        borderColorClass="secondary"
        mainfont="fontBackground"
      />   
           

        </div>
    <div className="course-grid-container">
      {courses.map((item, index) => (
        <div key={index} className="course-grid-item" style={{backgroundColor:`${chosen==index?"#6ff7d1":"#2b121d"}`,color:`${chosen==index?"#2b121d":"#6ff7d1"}`}} onClick={() => SetCourse(item.title, index)}>
            <section>
          <img src={item.imagePath} alt={`Image ${index}`} />
          <p>{item.title}</p>
          </section>
        </div>
      ))}
    </div>
    </section>
    </div>
    </div>
  )
}

export default CourseGrid