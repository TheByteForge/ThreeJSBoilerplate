import React from 'react';

export default ({ className }) => (
  <div className={`${className || ''} example__target`}>
    Long Touch and Drag Or Hover Here
  </div>
);
