import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ onClick, children }) => (
  <Button variant="primary" onClick={onClick}>
    {children}
  </Button>
);

export default CustomButton;
