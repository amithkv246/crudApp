import React, { useId } from 'react';

function FloatingInput({ type, label, value, onChange }) {
    const id = useId()
    return (
        <>
            <div className="floatContainer d-flex align-items-center">
                <input className='border border-1 border-white rounded-2' id={id} type={type} value={value} onChange={onChange} required />
                <label className='rounded-2' htmlFor={id}>{label}</label>
            </div>
            <style>
                {`
.floatContainer {
    position: relative;
    height: 40px;
    line-height: 40px;
}

input {
    position: absolute;
    width: 100%;
    line-height: 40px;
    outline: none;
    background: transparent;
    transition: 0.2s ease;
    z-index: 2;
    padding: 2px 10px;
    font-size: 1.25rem;
}

label {
    position: absolute;
    color: #FFFFFF;
    background: transparent;
    font-weight: 400;
    transition: 0.2s ease;
    z-index: 3;
    padding: 0px 10px;
    font-size: 1.25rem;
}

input:focus,
input:valid {
    color: #FFFFFF;
    z-index: 1;
    padding: 4px 10px 0px;
}

input:focus + label,
input:valid + label {
    color: #9FA6B2;
    background-color: #FFFFFF;
    font-weight: 800;
    transform: translate(10px, -23px);
    z-index: 4;
    padding: 0px 5px;
    line-height: 20px;
    font-size: 0.62rem; 
}
                `}
            </style>
        </>
    );
}

export default FloatingInput;