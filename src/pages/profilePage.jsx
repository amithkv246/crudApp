import React from 'react';
import Navbar from '../components/navbar';
import FooterCom from '../components/footerCom';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#eee", padding: "20vh 0vw", marginLeft: "2vw" }}>
        <div className='grid row'>
          <div className='col-3 p-4 pt-0'>
            <h2 className='fw-bold'>My Profile</h2>
            <div className='d-flex justify-content-start align-items-center ms-5' style={{ height: "100px" }}>
              <div className='bg-secondary p-4 rounded-5'>
                <span className='text-white'>DP</span>
              </div>
            </div>
            <p>Amith K V</p>
            <p>Member since "date registered"</p>
            <button className="fs-5 btn btn-outline-secondary" style={{ width: "100%" }}>Edit Profile </button>
          </div>

          <div className='col-9 p-3 pt-5' style={{ minHeight: "20rem" }}>
            <div className='d-flex flex-column gap-3 align-items-center'>
              <div className='d-flex justify-content-center align-items-center' style={{ height: "10rem" }}><i className="profileCarImg fa-solid fa-car-side fa-2xl" style={{ fontSize: "10rem" }}></i></div>
              <p>You haven't listed anything yet.</p>
              <button className="fs-5 btn btn-outline-secondary" onClick={() => navigate("/ad_form")} >Start Selling</button>
            </div>
            {/* <div className='d-flex flex-column gap-5' style={{ marginLeft: "12vw" }}></div> */}
          </div>
        </div>
      </div>
      <FooterCom />
    </>
  );
}

export default ProfilePage;