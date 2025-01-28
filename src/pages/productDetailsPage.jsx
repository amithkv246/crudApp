import React from 'react';
import Navbar from '../components/navbar';
import FooterCom from '../components/footerCom';

function ProductDetailsPage() {
    return (
        <>
            <Navbar />
            <div className='bg-secondar' style={{ background: "linear-gradient(to bottom right, #5A6268, #6C757D)", padding: "24vh 0vw" }}>
                <div className='d-flex flex-column gap-5' style={{ marginLeft: "12vw" }}>
                    <p>Product Details....</p>
                </div>
            </div>
            <FooterCom />
        </>
    );
}

export default ProductDetailsPage;