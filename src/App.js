import React from 'react';
import { Router, Route } from 'wouter';
import LandingPage from './pages/LandingPage';
import CourseComponent from './components/CourseComponent';
import OnboardingPage from './pages/OnboardingPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/Joinpage';
import HomePage from "./pages/HomePage"
import PlayPage from "./pages/PlayPage"

import './App.css';

function App() {
  return (
    <div className="App">
      
     
      <Router>
        <Route path="/" component={LandingPage} />
        <Route path="/onboard" component={OnboardingPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/join" component={JoinPage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/play' component={PlayPage}/>

      </Router>
    </div>
  );
}

export default App;