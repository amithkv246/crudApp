import React from 'react';
import InputGroup from './inputGroup';

function Navbar() {
    return (
        <>
            <header className='position-fixed top-0' style={{height: "12vh", width: "100%"}} >
                <nav className='d-flex justify-content-between align-items-center p-3 bg-secondary-subtle'>
                    <div>
                        <h1 className='fw-bold'><span>OLX</span></h1>
                    </div>
                    <div>
                        <InputGroup type={'text'} placeholder={'Find cars...'}/>
                    </div>
                    <div>
                        <button><p>wishlist</p></button>
                    </div>
                    <div>
                        <button><p>notification</p></button>
                    </div>
                    <div>
                        <button><p>login</p></button>
                    </div>
                    <div>
                        <button><p>sell</p></button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;