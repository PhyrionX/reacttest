import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

function Input({type, value, id, error, onChange, placeholder, label, onKeyPress}) {
  return (
    <div className="form-group">
      { label && <label htmlFor={ id }>{ label }</label> }
      <input type={ type }
          value={ value }
          aria-label="input" 
          className={ `form-control ${ error ? 'is-invalid' : '' }` }
          placeholder={ placeholder }
          id={ id }
          onKeyPress={event => {
            if (event.key === 'Enter' && onKeyPress) {
              onKeyPress(event);
            }
          }}
          onChange={ onChange } />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
}

export default Input;
