import React from 'react';

function InputCom({ type, onChange, placeholder, className, value, style }) {
    return (
        <>
            <input type={type} onChange={onChange} placeholder={placeholder} className={`${className} border-secondary`} value={value} style={style} />
        </>
    );
}

export default InputCom;