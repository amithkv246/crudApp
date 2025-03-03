import React, { useId } from 'react';

function RadioButtonCom({ value, onChange }) {
  const id = useId()
  return (
    <>
      <input type="checkbox" className="btn-check" id={id} autoComplete="off" onChange={(e) => onChange(e)} />
      <label className="btn btn-outline-secondary" htmlFor={id}>{value}</label>
    </>
  );
}

export default RadioButtonCom;