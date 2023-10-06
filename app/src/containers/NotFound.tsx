import React from 'react';
import NotFoundImage from '../assets/images/not-found.jpg'

const NotFound: React.FC = () => {
  // Your component logic goes here

  return (
    <div style={{ height: 'calc(100vh - 64px)', textAlign: 'center' }}>
      <img src={NotFoundImage} alt="not-found" height="100%" />
    </div>
  );
};

export default NotFound;
