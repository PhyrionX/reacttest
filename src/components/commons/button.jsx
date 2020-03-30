import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button({ text, onClick }) {
  return (
    <button className="billin-button" aria-label="button" onClick={ onClick }>{ text }</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
