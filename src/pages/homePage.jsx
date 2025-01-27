import React from 'react';
import Navbar from '../components/navbar';
import CardCom from '../components/cardCom';
import FooterCom from '../components/footerCom';

function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <div className='container mt-3 mb-3 me-0 d-flex'>
          <CardCom />
        </div>
        <FooterCom />
      </div>
    </>
  );
}

export default HomePage;