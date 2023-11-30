import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import LindaImage from "../assets/images/linda.png";
import GlitchedButton from './GlitchedButton';

function InfoComponent({ title, description, buttonText, onButtonClick }) {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className='infoComponent'>
      <div className='infoComponentContainer'>
        <div className='infoComponentSubContainer'>
          <div className='top-part'>
            <img src={LindaImage} alt="Linda" />
            <p>{`${title} ${description}`}</p>
            
          </div>
          <div className='bottom-part'>
            <div className='mt'>.</div>

            <GlitchedButton
              name={buttonText}
              onClick={handleClick}
              backgroundColorClass="secondary"
              borderColorClass="secondary"
              mainfont="fontBackground"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

// Prop types for type validation
InfoComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

export default InfoComponent;
