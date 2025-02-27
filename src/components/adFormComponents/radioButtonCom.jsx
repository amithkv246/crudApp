import React, { useId } from 'react';

function RadioButtonCom({ value }) {
  const id = useId()
  return (
    <>
      <input type="checkbox" className="btn-check" id={id} autoComplete="off" />
      <label className="btn btn-outline-secondary" htmlFor={id}>{value}</label>
    </>
  );
}

export default RadioButtonCom;