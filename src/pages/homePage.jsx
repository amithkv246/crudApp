import React from 'react';
import Navbar from '../components/navbar';
import CardCom from '../components/cardCom';
import FooterCom from '../components/footerCom';

function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <div className='d-flex' style={{ margin: "24vh 0px 0px 12vw" }}>
          <CardCom />
        </div>
        <FooterCom />
      </div>
    </>
  );
}

export default HomePage;