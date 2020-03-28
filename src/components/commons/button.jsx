import React from 'react';
import './button.scss';

export default function Button({ text, onClick }) {
  return (
    <button className="billin-button" aria-label="button" onClick={ onClick }>{ text }</button>
  )
}