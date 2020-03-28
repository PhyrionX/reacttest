import React from 'react'
import './total.scss'

export default function Total({ total }) {
  return (
    <div className="billin-total">
      <span>Total</span><span>{ total } €</span>
    </div>
  )
}