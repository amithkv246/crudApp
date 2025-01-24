import React from 'react';
import Navbar from '../components/navbar';
import CardCom from '../components/cardCom';

function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <div className='continer d-flex flex-row gap-2'>
          <CardCom />
        </div>
      </div>
    </>
  );
}

export default HomePage;