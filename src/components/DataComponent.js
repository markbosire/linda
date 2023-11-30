import React from 'react';

const DataComponent = ({ data }) => {
  return (
    <div className='grid-component'>
    <div className="grid-container">
      {data.map((item, index) => (
        <div key={index} className="grid-item">
            <section>
          <img src={item.imagePath} alt={`Image ${index}`} />
          <p>{item.paragraph}</p>
          </section>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DataComponent;
