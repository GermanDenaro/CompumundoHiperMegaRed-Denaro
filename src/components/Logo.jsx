import React from 'react';
import King from '../Images/Logo.png';
import { Image } from 'react-bootstrap';

const Logo = () => {
  return (
    <div className="container">
      <Image src={King} fluid alt="Logo" className="logo" />
    </div>
  );
};

export default Logo;
