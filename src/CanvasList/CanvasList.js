import React from 'react';
import PropTypes from 'prop-types';
import Canvas from '../Canvas';

import './canvas-list.css';

export const CanvasList = ({ canvasList }) => {
  console.log(canvasList);
  return (
    <div>
      <h3 className="canvas-list-title">Canvas list</h3>
      <div>
        {canvasList.map((canvas, index) => (
          <Canvas canvas={canvas} key={index} />
        ))}
      </div>
    </div>
  );
};

CanvasList.propTypes = {
  canvasList: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      )
    )
  )
};

CanvasList.defaultProps = {
  canvasList: []
};