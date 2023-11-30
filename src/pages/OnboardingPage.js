import React, { useState } from 'react';
import CourseComponent from '../components/CourseComponent';
import EmployeeformComponent from '../components/EmployeeformComponent';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function OnboardingPage() {
  const [currentView, setCurrentView] = useState('course');

  const switchToEmployeeForm = () => {
    setCurrentView('employeeForm');
  };

  const handleBreadcrumbClick = (view) => {
    setCurrentView(view);
  };

  const renderBreadcrumb = () => {
    return (
      <Breadcrumbs
      className='paddingBread'
        separator={<NavigateNextIcon fontSize='large' className='navbut'/>}
        aria-label="breadcrumb"
      >
        <Typography
        className='circleprimary'
          color={currentView === 'course' ? 'textPrimary' : 'inherit'}
          
          style={{ cursor: 'pointer', backgroundColor:`${currentView === 'course' ? "#ff8da4":"#1d0c13"}`, color:`${currentView === 'course' ? "#1d0c13":"#ff8da4"}` }}
        >
          1
        </Typography>
        <Typography
         className='circleprimary'
          color={currentView === 'employeeForm' ? 'textPrimary' : 'inherit'}
         
          style={{ cursor: 'pointer', backgroundColor:`${currentView === 'employeeForm' ? "#ff8da4":"#1d0c13"}`,color:`${currentView === 'employeeForm' ? "#1d0c13":"#ff8da4"}`}}
        >
          2
        </Typography>
      </Breadcrumbs>
    );
  };

  return (
    <div>
     
      {currentView === 'course' ? (
        <CourseComponent func={switchToEmployeeForm} breadcrumb={renderBreadcrumb} />
      ) : (
        <EmployeeformComponent breadcrumb={renderBreadcrumb}/>
      )}
    </div>
  );
}

export default OnboardingPage;
