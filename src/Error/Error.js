import React from 'react';
import PropTypes from 'prop-types';

import './error.css';

export const Error = ({ error }) => <p className="error">{error && error.message}</p>;

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string
  })
};