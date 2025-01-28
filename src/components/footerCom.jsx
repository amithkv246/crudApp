import React from 'react';

function FooterCom() {
  return (
    <>
      <footer>
        <div className='d-flex flex-row justify-content-around p-3' style={{ color: " #B0B0B0", background: "linear-gradient(to top right, #800000, #A83232)" }}>
          <div>
            <h3>Popular Locations</h3>
            <p>Kolkata</p>
            <p>Mumbai</p>
            <p>Chennai</p>
            <p>Pune</p>
          </div>

          <div>
            <h3>Trending Locations</h3>
            <p>Bhubaneshwar</p>
            <p>Hyderabad</p>
            <p>Chandigarh</p>
            <p>Nashik</p>
          </div>

          <div>
            <h3>About Us</h3>
            <p>Tech@OLX</p>
            <p>OLX</p>
            <p>Blog</p>
            <p>Help</p>
            <p>Sitemap</p>
          </div>

          <div>
            <h3>Legal & Privacy</h3>
            <p>Legal & Privacy Information</p>
            <p>Vulnerability Disclosure Program</p>
          </div>
        </div>

        <div style={{ minHeight: "25vh", color: "#D3D3D3", backgroundColor: "#1C1C1C" }}>
          icons
          <span style={{ color: "#ffd700" }}>// #FFD700 another font color.</span>
          <span style={{ color: "#ff6f61" }}>// #FF6F61 hover color for icons.</span>
        </div>
      </footer>
    </>
  );
}

export default FooterCom;