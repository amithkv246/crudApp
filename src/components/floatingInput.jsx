import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FloatingInput({ type, placeholder, label, value, onChange }) {
    return (
        <>
            <FloatingLabel controlId="floatingPassword" label={label} className='' >
                <Form.Control className='focus-ring' style={{--bs-focus-ring-color: "rgba(var(--bs-success-rgb), .25)"}} type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </FloatingLabel>
        </>
    );
}

export default FloatingInput;