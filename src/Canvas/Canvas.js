import React from 'react';
import PropTypes from 'prop-types';

import { CanvasRow } from './CanvasRow';

import './canvas.css';

export const Canvas = ({ canvas }) => {
  return (
    <table className="canvas">
      <tbody>
      {
        canvas.map((row, index) => (
          <CanvasRow row={row} i={index} key={index} />
        ))
      }
      </tbody>
    </table>
  );
};

Canvas.propTypes = {
  canvas: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])))
};

Canvas.defaultProps = {
  canvas: []
};