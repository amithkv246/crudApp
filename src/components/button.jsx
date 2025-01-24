import React from 'react';

function Button({ value, onClick }) {
  return (
    <>
      <button type="button" className="fs-5 border border-1 border-white rounded-2" onClick={onClick}>{value}</button>
      <style>
        {`
button {
  outline: none;
  height: 45px;
  font-weight: 500;
  color: #FFFFFF;
  background-color: transparent;
  transition: 0.2s ease;
}

button:hover {
  color: #9FA6B2;
  background-color: #FFFFFF;
}
        `}
      </style>
    </>
  );
}

export default Button;