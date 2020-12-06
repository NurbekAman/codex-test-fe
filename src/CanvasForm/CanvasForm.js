import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import './canvas-form.css';

export const CanvasForm = ({ onSubmit }) => {
  const [file, setFile] = useState();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (file) {
      onSubmit(file);
    }
    }, [file]);

  const onChange = ({ target }) => {
    if (target && target.files && target.files.length) {
      setFile(target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="canvas-form">
      <input type="file" onChange={onChange} />
      <button
        type="submit"
        className="canvas-form__button"
        disabled={!file}
        title={!file ? 'please choose a file' : ''}
      >
        send file
      </button>
    </form>
  );
};

CanvasForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
