import React from 'react';

const PositionLabel = props => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false,
    } = {},
    elementDimensions: { width = 0, height = 0 } = {},
    isActive = false,
    isPositionOutside = false,
    position: { x = 0, y = 0 } = {},
  } = props;
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        background: 'skyblue',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: 100,
          height: 100,
          background: 'hotpink',
          borderRadius: '3rem',
        }}
      />
    </div>
  );
};

export default PositionLabel;
