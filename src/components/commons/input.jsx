import React from 'react';
import './input.scss';

export default function Input({type, value, id, error, onChange, placeholder, label, onKeyPress}) {
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