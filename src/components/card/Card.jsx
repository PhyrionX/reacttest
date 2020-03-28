import React from 'react';
import './card.scss';

export default function Card({ title, children }) {
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