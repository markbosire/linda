import React,{useState,useEffect} from 'react';
import GlitchedButton from '../../components/GlitchedButton';
import Dialog from '@mui/material/Dialog';

function Password({openModal,setOpenModal}) {
    const [open, setOpen] = useState(openModal);
    const [dialogComponent,setDialogComponent]=useState(null)

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpenModal(false);
    };
    const [selectedPassword, setSelectedPassword] = useState(0);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
   const [passwords,setPasswords] =useState([])
    
  function generateRandomPassword(data) {
    const { firstname, lastname, nickname, birthyear, partner, pet, mom, hobby } = data;

    const passwords = [];

    // Add different combinations of personal data to generate passwords
    passwords.push(`${nickname}@${Math.floor(Math.random() * 1000)}`);
    passwords.push(`${partner}${Number(birthyear)}`);
    passwords.push(`${mom}_${Math.floor(Math.random() * 1000)}`);
    passwords.push(`${String(birthyear).slice(2)}${firstname}${lastname}`);
    passwords.push(`${pet}${Math.floor(Math.random() * 100)}`);
    passwords.push(`${hobby}${Math.floor(Math.random() * 100)}`);

    return passwords;
  }

  // ... (unchanged)

  const handlePasswordClick = (index) => {
   

    setSelectedPassword(index);
  };
  useEffect(() => {
    const signedInUsername = localStorage.getItem('user');
    let storedUsersString = localStorage.getItem('users');
    let storedUsers = JSON.parse(storedUsersString);

    const signedInUser = storedUsers.find((user) => user.username === signedInUsername);

    if (signedInUser) {
      const generatedPasswords = generateRandomPassword(signedInUser.employeeData);
      setPasswords(generatedPasswords);
    } else {
      console.log('Signed-in user not found.');
    }
  }, []); 
  const passwordGrid = passwords.map((password, index) => (
    <div
      key={index}
      className={`password-item ${selectedPassword==index? 'selected' : ''}`}
      onClick={() => handlePasswordClick(index)}
    >
      {password}
    </div>
  ));
  const handleSubmit = () => {
    const signedInUsername = localStorage.getItem('user'); 

    // Retrieve the users array from local storage
    let storedUsersString = localStorage.getItem('users');
    let storedUsers = JSON.parse(storedUsersString);
    const signedInUser = storedUsers.find((user) => user.username === signedInUsername);
    if (signedInUser) {
      const loggedInUsername = signedInUser.username;

      // Find the index of the logged-in user in the 'users' array
      const userIndex = users.findIndex(user => user.username === loggedInUsername);

      if (userIndex !== -1 && selectedPassword) {
        const selectedPass = passwords[selectedPassword];

        // Update the logged-in user's data
        const updatedUser = { ...users[userIndex] };
        updatedUser.companypassword = selectedPass;
        updatedUser.task = 2;

        // Update the 'users' array
        const updatedUsers = [...users];
        updatedUsers[userIndex] = updatedUser;

        // Update the local storage
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        // Update the state to trigger a re-render
        setUsers(updatedUsers);

        console.log('Selected Password:', selectedPass);
        console.log('User data after update:', updatedUser);
        handleClose()
      } else {
        console.log('Invalid selection or user not found.');
      }
    } else {
      console.log('Signed-in user not found.');
    }
  };


  return (
    <Dialog open={openModal} onClose={handleClose}>
    <div className='passwords'>
    <h2>Pick Password</h2>
    <div className="password-container">
      {passwordGrid}
      <GlitchedButton
                  name="Submit"
                  onClick={handleSubmit}
                  backgroundColorClass="secondary"
                  borderColorClass="secondary"
                  mainfont="fontBackground"
                />
    </div>
  </div>
  </Dialog>
  );
}

export default Password;
