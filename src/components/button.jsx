import React from 'react';

function Button({value}) {
  return (
    <>
      <button type="button" class="btn btn-outline-light shadow-none">{value}</button>
    </>
  );
}

export default Button;