import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

function Card({ title, children }) {
  return (
    <div className="tfg-card">
      { title  && (<div className="tfg-card__heading">
        { title }
      </div>) } 
      { children && (<div className="tfg-card__body">
        { children }
      </div>) }
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default Card;
