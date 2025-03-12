import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import FooterCom from '../components/footerCom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CardCom from '../components/cardCom';
import { baseURL } from '../APIServices/baseURL';

function ProfilePage() {
  const navigate = useNavigate()
  const [adDetails, setAdDetails] = useState([])
  const [userDetails, setUserDetails] = useState({})
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"))
  const userId = userCredentials.userId

  useEffect(() => { //API calls for fetching ads and userDetails
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${baseURL}/getUserDetails/${userId}`);
        setUserDetails(response.data)
      } catch (err) {
        console.error("Error fetching user details: ", err);
      }
    };

    const fetchAds = async () => {
      try {
        const response = await axios.get(`${baseURL}/getUserAds/${userId}`);
        setAdDetails(response.data);
      } catch (err) {
        console.error("Error fetching ads: ", err);
      }
    };

    fetchUserDetails();
    fetchAds();
  }, [userId])

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#fff", padding: "20vh 0vw", paddingLeft: "3rem", overflowX: "hidden" }}>
        <div className='grid row'>
          <div className='col-3 p-4 pt-3 rounded-1' style={{ height: "70vh", backgroundColor: "#eee" }}>
            <h2 className='fw-bold mb-0'>My Profile</h2>
            <div className='d-flex align-items-center ms-5' style={{ height: "170px", paddingLeft: "2.5rem" }}>
              <div className='bg-secondary d-flex justify-content-center align-items-center' style={{ height: "7rem", width: "7rem", borderRadius: "5rem", overflowX: 'hidden' }}>
                {
                  userDetails &&
                    userDetails?.dp?.length > 0 ?
                    <img src={`${baseURL}${userDetails?.dp[0]}`} alt="img" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                    :
                    <span className='text-white'>DP</span>
                }
              </div>
            </div>
            <p>{userDetails.name}</p>
            <p>{userDetails.email}</p>
            <p>Member since "{userDetails.createdAt?.split("T")[0]}"</p>
            <button onClick={() => navigate("/edit_profile")} className="fs-5 btn btn-outline-secondary" style={{ width: "100%" }}>View or Edit Profile</button>
          </div>

          <div className='col-9 p-3 pt-0 bg-white' style={{ minHeight: "20rem" }}>
            <h2 className='fw-bold'>My Ads</h2>
            {
              adDetails?.length === 0 ?
                <div className='d-flex flex-column gap-3 align-items-center'>
                  <div className='d-flex justify-content-center align-items-center' style={{ height: "10rem" }}><i className="profileCarImg fa-solid fa-car-side fa-2xl" style={{ fontSize: "10rem" }}></i></div>
                  <p>You haven't listed anything yet.</p>
                  <button className="fs-5 btn btn-outline-secondary" onClick={() => navigate("/ad_form")} >Start Selling</button>
                </div>
                :
                <div className='d-flex flex-row flex-wrap gap-3'>
                  {
                    adDetails.map((item, index) => (
                      <CardCom key={index + "userAd"} userAd={item} />
                    ))
                  }
                </div>
            }
          </div>
        </div>
      </div>
      <FooterCom />
    </>
  );
}

export default ProfilePage;
