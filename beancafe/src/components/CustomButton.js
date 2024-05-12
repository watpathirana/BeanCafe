import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ children, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
