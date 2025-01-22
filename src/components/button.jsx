import React from 'react';

function Button({ value, onClick }) {
  return (
    <>
      <button type="button" class="btn btn-outline-light" onClick={onClick}>{value}</button>
    </>
  );
}

export default Button;