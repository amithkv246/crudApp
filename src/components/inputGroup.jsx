import React from 'react';

function InputGroup({type, placeholder, onChange, onClick}) {
    return (
        <>
            <div className="input-group">
                <input type={type} className="form-control shadow-none" placeholder={placeholder} onChange={onChange} />
                <span className="input-group-text" role='button' onClick={onClick}>search</span>
            </div>
        </>
    );
}

export default InputGroup;