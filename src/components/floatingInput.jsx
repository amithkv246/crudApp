import React from 'react';

function FloatingInput({ type, label, value, onChange }) {
    return (
        <>
            <div className="floatContainer">
                <input className='fs-5 border border-1 border-light rounded-2' id='floatInput' type={type} value={value} onChange={onChange} required />
                <label className='fs-5 text-light' htmlFor='floatInput'>{label}</label>
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
    outline: none;
    line-height: 40px;
    background: transparent;
    transition: 0.1s ease;
    z-index: 2;
}

label {
    position: absolute;
    transition: 0.2s ease;
    background: transparent;
    z-index: 2;
}

input:focus,
input:valid {
    color: #66ff00;
    border: 4px solid #66ff00;
    z-index: 1;
}

input:focus+label,
input:valid+label {
    color: #66ff00;
    height: 40px;
    line-height: 40px;
    transform: translate(-1px, -20px) scale(0.80);
    z-index: 20;
}
                `}
            </style>
        </>
    );
}

export default FloatingInput;