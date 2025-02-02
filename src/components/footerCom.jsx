import React from 'react';

function FooterCom() {
  return (
    <>
      <footer>
        <div className='d-flex flex-row justify-content-around p-3 pt-4 pe-5' style={{ color: " #B0B0B0", background: "linear-gradient(to top right, #800000, #A83232)" }}>
          <div>
            <h5>POPULAR LOCATIONS</h5>
            <p role='button'>Kolkata</p>
            <p role='button'>Mumbai</p>
            <p role='button'>Chennai</p>
            <p role='button'>Pune</p>
          </div>

          <div>
            <h5>TRENDING LOCATIONS</h5>
            <p role='button'>Bhubaneshwar</p>
            <p role='button'>Hyderabad</p>
            <p role='button'>Chandigarh</p>
            <p role='button'>Nashik</p>
          </div>

          <div>
            <h5>ABOUT US</h5>
            <p role='button'>Tech@CARVAULT</p>
          </div>

          <div>
            <h5>CARVAULT</h5>
            <p role='button'>Blog</p>
            <p role='button'>Help</p>
            <p role='button'>Sitemap</p>
            <p role='button'>Legal & Privacy Information</p>
            <p role='button'>Vulnerability Disclosure Program</p>
          </div>

          <div>
            <h5>FOLLOW US</h5>
            <div className='mt-3 d-flex flex-row gap-2'>
              <i role='button' className="fa-brands fa-square-facebook fa-xl"></i>
              <i role='button' className="fa-brands fa-square-instagram fa-xl"></i>
              <i role='button' className="fa-brands fa-square-twitter fa-xl"></i>
              <i role='button' className="fa-brands fa-square-youtube fa-xl"></i>
            </div>
          </div>
        </div>

        <div className='position-relative' style={{ minHeight: "25vh" }}>
          <div className='position-absolute w-100 d-flex flex-row justify-content-around align-items-center p-3' style={{ minHeight: "25vh", color: "#D3D3D3", backgroundColor: "#1C1C1C" }}>
            <div className='d-flex flex-row gap-5 align-items-center pe-5'>
              <h2 className="fw-bold text-end" style={{ lineHeight: "1.5rem" }}>CarTradeTech<br /><span className='fs-4 fw-normal'>Group</span></h2>
              <span className='border-end border-1 border-light' style={{ height: "16vh" }}></span>
              <h2 className="fw-bold">CarVault</h2>
            </div>
            <h3 role='button' className="fw-bold">carWale</h3>
            <h3 role='button' className="fw-bold">bikeWale</h3>
            <h3 role='button' className="fw-bold">CarTrade</h3>
            <h3 role='button' className="fw-bold text-center" style={{ lineHeight: "1.5rem" }}>MOBILITY<br />OUTLOOK</h3>
          </div>
          <p style={{ color: "#D3D3D3" }} className="py-2 px-4 position-absolute start-0 bottom-0"><span role='button'>Help - Sitemap</span></p>
          <p style={{ color: "#D3D3D3" }} className="py-2 px-4 position-absolute end-0 bottom-0"><span role='button'>All rights reserved © 2006-2025 CarVault</span></p>
        </div>
      </footer>
    </>
  );
}

export default FooterCom;