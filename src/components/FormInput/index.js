import React from 'react'

import './formInput.less'

const Input = ({ input, label, type, className, placeholder, meta: { dirty, error } }) => {
  return (
    <div className={`inputField ${className || ''}`}>
      <label htmlFor={input.name} className={`inputField__label ${className ? `${className}__label` : ''}`}>{ label }</label>
      <input
        className={`inputField__input ${className ? `${className}__input` : ''}`}
        placeholder={placeholder}
        type={`${type || 'text'}`}
        {...input}
      />
      {dirty &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  )
}

export default Input
