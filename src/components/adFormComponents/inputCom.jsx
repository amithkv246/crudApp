import React from 'react';

function InputCom({ type, onChange, placeholder, className, value, style, other }) {
    return (
        <>
            <input {...other} type={type} onChange={(e) => onChange(e)} placeholder={placeholder} className={`${className} border-secondary`} value={value} style={style} />
        </>
    );
}

export default InputCom;