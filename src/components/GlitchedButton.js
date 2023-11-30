import React from 'react';

const GlitchedButton = ({ name, onClick, backgroundColorClass, borderColorClass,mainfont }) => {
  const buttonClassName = `btn ${borderColorClass} ${mainfont} `;
  const contentClassName = `btn-content ${backgroundColorClass}`
  const labelClassName = `btn__label ${backgroundColorClass}`
  const glitchClassName =`btn__glitch ${backgroundColorClass}`

  return (
    <div className={buttonClassName} onClick={onClick}>
      <span className={contentClassName}>{name}</span>
      <span className={glitchClassName}></span>
      <span className={labelClassName}>r25</span>
    </div>
  );
};

export default GlitchedButton;
