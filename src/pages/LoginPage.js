import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import GlitchedButton from '../components/GlitchedButton';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginPage= () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const [success,setSuccess] = useState(true)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
  
   const users=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
   let count=0
    for (let index = 0; index < users.length; index++) {
        console.log(users[index])
       
        if(username==users[index].username){
            count++;
            if(password==users[index].password){
                localStorage.setItem('user', username);
            setSuccess(true)
            setMessage('Successfully signed in!');
            setOpen(true);
            setTimeout(() => {
                window.location.href = '/home';
               }, 1500);
            }

        }
    }
    if(count==0){
        setSuccess(false)
        setMessage('username does not exist');
        setOpen(false);

    }
  
  
  };

  return (
    <React.Fragment>
      <div className='Join'>
        <section>
          <span className='title'>Linda</span>

          <div className='window'>
            <section>
              <span>Login</span>
             
                <input type='text' placeholder='Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                
                />
                <input type='password' placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
             
             <GlitchedButton
        name="Login"
        onClick={()=>handleSubmit}
        backgroundColorClass="secondary"
        borderColorClass="secondary"
        mainfont="fontBackground"
      />
           
            </section>
          </div>
          <span className='Footer'>
           No account?{' '}
            <u
              onClick={() => {
                window.location.href = '/join';
              }}
            >
              Join
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

export default LoginPage;
