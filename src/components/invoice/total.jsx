import React from 'react'
import PropTypes from 'prop-types';
import './total.scss'

function Total({ total }) {
  return (
    <div className="billin-total">
      <span>Total</span><span>{ total } €</span>
    </div>
  )
}

Total.propTypes = {
  total: PropTypes.number
}

export default Total;
