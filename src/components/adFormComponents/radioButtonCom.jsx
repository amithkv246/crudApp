import React, { useId } from 'react';

function RadioButtonCom({ value, name, onChange }) {
  const id = useId()
  return (
    <>
      <input type="radio" name={name} className="btn-check" id={id} autoComplete="off" onChange={() => onChange(value)} />
      <label className="btn btn-outline-secondary" htmlFor={id}>{value}</label>
    </>
  );
}

export default RadioButtonCom;
