import React from 'react';
import PropTypes from 'prop-types';

export const CanvasRow = ({ row, i }) => (
  <tr>
    {row.map((item, j) => (
      <td key={`${i+j}`}>{item === 0 ? <span /> : item}</td>
    ))
    }
  </tr>
);

CanvasRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  i: PropTypes.number
};

CanvasRow.defaultProps = {
  row: []
};
