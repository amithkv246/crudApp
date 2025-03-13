import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import CardCom from '../components/cardCom';
import FooterCom from '../components/footerCom';
import { useNavigate } from 'react-router';
import { baseURL } from '../APIServices/baseURL';
import axios from 'axios';

function HomePage() {
  const navigate = useNavigate()
  const [allAds, setAllAds] = useState([])
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"))
  const userId = userCredentials.userId

  useEffect(() => {
    const fetchAllAds = async () => {
      try {
        const response = await axios.get(`${baseURL}/getAllAds/${userId}`)
        setAllAds(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchAllAds();
  }, [userId])

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#eee", padding: "24vh 0vw" }}>
        <div className='d-flex flex-row flex-wrap gap-3' style={{ marginLeft: "12vw" }}>
          {
            allAds &&
              allAds.length > 0 ?
              allAds.map((item, index) => (
                <CardCom key={index + "ads"} onClick={() => navigate("/product_details")} ad={item} />
              ))
              :
              (
                <p>No ads found.</p>
              )
          }
        </div>
      </div>
      <FooterCom />
    </>
  );
}

export default HomePage;
