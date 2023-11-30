import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import GlitchedButton from '../components/GlitchedButton';
import TwisterTech from"../assets/images/twistertech.png"
import Orchad from "../assets/images/orchad.png"
import AmazeCart from "../assets/images/amazecart.png"
import StreamFlix from "../assets/images/streamflix.png"
import QuantumSearch from "../assets/images/QuantumSearch.png"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const JoinPage = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [success,setSuccess] = useState(true)
  const fakeCompanies = [
    {
      companyId: 1,
      companyName: "TwitsterTech",
      companyDescription: "A social media and technology conglomerate",
      companyLogo: TwisterTech,
    },
    {
      companyId: 2,
      companyName: "Orchard Innovations",
      companyDescription: "A leading company in consumer electronics",
      companyLogo: Orchad,
    },
    {
      companyId: 3,
      companyName: "AmazeCart",
      companyDescription: "An online retail giant offering a diverse range of products",
      companyLogo: AmazeCart,
    },
    {
      companyId: 4,
      companyName: "StreamFlix",
      companyDescription: "A popular streaming service with a vast library of exclusive content",
      companyLogo: StreamFlix,
    },
    {
      companyId: 5,
      companyName: "QuantumSearch",
      companyDescription: "A cutting-edge search engine and technology company",
      companyLogo: QuantumSearch,
    },
  ];
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    console.log("click")
    event.preventDefault();
  
  

    if (password !== confirmPassword) {
        setOpen(true)
        setSuccess(false)
          setMessage("The password entered is not the same as the confirmed password")
      return;
    }
    localStorage.removeItem('users')
   
    const users=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
    // Check if 'companies' exists in localStorage
if (!localStorage.getItem('companies')) {
    // If it doesn't exist, assign the fakeCompanies array to it
    localStorage.setItem('companies', JSON.stringify(fakeCompanies));
  }
  
  // Retrieve the companies from localStorage
  const companiesFromLocalStorage = JSON.parse(localStorage.getItem('companies'));
  
  // Create a user object with a random companyId
  const randomCompanyId = Math.floor(Math.random() * companiesFromLocalStorage.length) + 1;
  const user = {
    username:username,
    password:password,
    companyId: randomCompanyId,
    task:1,
    
    xp:0

    // Add other user properties as needed
  };
  
  // Assign the user object to localStorage

    console.log(user)
    console.log(users)
     users.push(user)

    console.log(users)
    localStorage.setItem('user', username);
    localStorage.setItem('users', JSON.stringify(users));
 
    setSuccess(true)
      setMessage('Sign up successful proceed to sign in!');
      setOpen(true);
    setTimeout(() => {
      window.location.href = '/onboard';
    }, 1500);
  };

  return (
    <React.Fragment>
      <div className='Join'>
        <section>
          <span className='title'>Linda</span>

          <div className='window'>
            <section>
              <span>Join</span>
             
                <input type='text' placeholder='Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                
                />
                <input type='password' placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <input type='password' placeholder='Confirm Password' 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
                   <GlitchedButton
        name="Join"
        onClick={handleSubmit}
        backgroundColorClass="secondary"
        borderColorClass="secondary"
        mainfont="fontBackground"
      />
           
            </section>
          </div>
          <span className='Footer'>
            Already have an account?{' '}
            <u
              onClick={() => {
                window.location.href = '/join';
              }}
            >
              Login
            </u>
          </span>
        </section>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <div>
    <Alert onClose={handleClose} severity={success?"success":"error"}>
      {message}
    </Alert>
  </div>
      </Snackbar>
    </React.Fragment>
  );
};

export default JoinPage;
