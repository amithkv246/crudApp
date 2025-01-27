import React from 'react';
import Navbar from '../components/navbar';
import CardCom from '../components/cardCom';
import FooterCom from '../components/footerCom';
import { useNavigate } from 'react-router';

function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <Navbar />
        <div className='d-flex' style={{ margin: "24vh 0vw 24vh 12vw" }}>
          <CardCom onClick={() => navigate("/product_details")} />
        </div>
        <FooterCom />
      </div>
    </>
  );
}

export default HomePage;