import React, { useState,useEffect } from 'react';
import GlitchedButton from './GlitchedButton';
import twistertech from "../assets/images/twistertech.png"
import intern from '../assets/images/intern.png'

function EmployeeformComponent({ breadcrumb }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [partner, setPartner] = useState('');
  const [pet, setPet] = useState('');
  const [child, setChild] = useState('');
  const [hobby, setHobby] = useState('');
  const [companyname, setCompanyName] = useState("");
  const [companylogo, setCompanyLogo] = useState("");
  const [companySlogan, setCompanySlogan] = useState("");

  useEffect(() => {

    const fetchData = () => {
      // Assuming 'companies' and 'users' are already in localStorage
      const companiesFromLocalStorage = JSON.parse(localStorage.getItem('companies'));
      const usersFromLocalStorage = JSON.parse(localStorage.getItem('users'));
      const userFromLocalStorage = localStorage.getItem('user');
      console.log(usersFromLocalStorage)
      console.log(userFromLocalStorage)

      // Function to get user information based on username
      function getUserInfo(username) {
        return usersFromLocalStorage.find(user => user.username === username);
      }

      // Function to get company information based on companyId
      function getCompanyInfo(companyId) {
        return companiesFromLocalStorage.find(company => company.companyId === companyId);
      }

      // Check if 'user' exists
      if (userFromLocalStorage && userFromLocalStorage) {
        const username = userFromLocalStorage;
        const userInfo = getUserInfo(username);
        console.log(userInfo)

        if (userInfo && userInfo.companyId) {
          const companyId = userInfo.companyId;
          const companyInfo = getCompanyInfo(companyId);

          if (companyInfo) {
            // Update state variables based on companyInfo
            setCompanyName(companyInfo.companyName);
            setCompanyLogo(companyInfo.companyLogo);
            setCompanySlogan(companyInfo.companyDescription);
          } else {
            console.log('Company not found.');
          }
        } else {
          console.log('User information does not contain companyId.');
        }
      } else {
        console.log('User or username not found in localStorage.');
      }
    };

    fetchData();
  }, []); 

  const saveDataToLocalstorage = () => {
    const employeeData = {
      "firstname": firstname,
      "lastname": lastname,
      "nickname": nickname,
      "birthyear": birthdate,
      "partner": partner,
      "pet": pet,
      "mom": child,
      "hobby": hobby,
    };
  
    // Retrieve the username from local storage
    const storedUsername = localStorage.getItem('user');
  
    // Retrieve the users array from local storage
    let storedUsersString = localStorage.getItem('users');
    let storedUsers = JSON.parse(storedUsersString);
  
    // Find the user in the array based on the username
    const userIndex = storedUsers.findIndex(user => user.username === storedUsername);
  
    if (userIndex !== -1) {
      // Edit the user's data (e.g., change the 'employeeData' property)
      storedUsers[userIndex].employeeData = employeeData;
  
      // Serialize the edited array of users back to a string
      let editedUsersString = JSON.stringify(storedUsers);
  
      // Update the value in localStorage
      localStorage.setItem('users', editedUsersString);
      console.log(localStorage.getItem("users"));
      window.location.href = '/home';
    } else {
      console.log('User not found.');
    }
  };
  

  return (
    <div className='employeeformcomponent'>
      <div className='r'>
        {breadcrumb()}
        <div className='employeeContainer'>
          <section className='employeeContainerSection'>
            <div className='images'>
              <img src={companylogo} alt="Twistertech Logo" />
              <img src={intern} alt="Intern Logo" />
            </div>
            <div className='employeeSubContainer'>
              <section className='employeeSubContainerSection'>
                <p>
                  {`You have been given the role of an intern at ${companyname}, ${companySlogan}. Fill in your virtual data (do not use real data) for your company socials to complete your job application.`}
                </p>
                <div className='names'>
                <input
        type='text'
        className='inputOutline'
        placeholder='First Name'
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        type='text'
        className='inputOutline'
        placeholder='Last Name'
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
                </div>
                
      <input
        type='text'
        className='inputOutline'
        placeholder='Nick Name'
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type='text'
        className='inputOutline'
        placeholder='Birth year'
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <input
        type='text'
        className='inputOutline'
        placeholder="Partner's Name"
        value={partner}
        onChange={(e) => setPartner(e.target.value)}
      />
      <input
        type='text'
        className='inputOutline'
        placeholder="Pet's Name"
        value={pet}
        onChange={(e) => setPet(e.target.value)}
      />
      <input
        type='text'
        className='inputOutline'
        placeholder="Mom's Name"
        value={child}
        onChange={(e) => setChild(e.target.value)}
      />
      <input
        type='text'
        className='inputOutline'
        placeholder='Hobby'
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
      />                <GlitchedButton
                  name="Continue"
                  onClick={saveDataToLocalstorage}
                  backgroundColorClass="secondary"
                  borderColorClass="secondary"
                  mainfont="fontBackground"
                />
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EmployeeformComponent;
