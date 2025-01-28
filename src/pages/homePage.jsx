import React from 'react';
import Navbar from '../components/navbar';
import CardCom from '../components/cardCom';
import FooterCom from '../components/footerCom';
import { useNavigate } from 'react-router';

function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className='bg-secondar' style={{ background: "linear-gradient(to bottom right, #5A6268, #6C757D)", padding: "24vh 0vw" }}>
        <div className='d-flex flex-column gap-5' style={{ marginLeft: "12vw" }}>
          <CardCom onClick={() => navigate("/product_details")} />
        </div>
      </div>
      <FooterCom />
    </>
  );
}

export default HomePage;