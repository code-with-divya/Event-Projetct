import React, { useEffect } from "react";
import './Home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import UnderlineExample from "../../Componant/Navbar/Navbar";
import Footer from "../../Componant/Footer/Footer";
import carde from './Image/Innovation Invitation.png';
import arou from './Image/WhatsApp_Image_2024-06-16_at_19.28.41_1a742fc2-removebg-preview.png';





export default function Home() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="kama">
      <UnderlineExample />

      <div className="homu" >
        <div className="shep" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000">
          <h1 className="titls">PROJECT COMPETITION</h1>
        </div>
        <h1 className="innv">INNOVATION</h1>
        <h5 className="innvs">IN YOUR ORGANISATION</h5>

        <div className="mah" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000">



          <div>
            <h2>Date- 15 AUG 2K24</h2><br />
            <h5 className="innve">Join us at Project<br /> Competition to be part<br /> of a community<br /> dedicated to <br />driving the future of IT <br />trough innovation and <br />collaboration.</h5>
          </div>


          <div className="dutel"></div>

          <div>
            <h2>Time- 11:30</h2>
            <h5 className="innves">1st Prize  - Rs.15,000<br />
              2nd Prize - Rs.10,000<br />
              3rd Prize - Rs.5,000<br /><br />

              FREE REGISTRATION</h5>
          </div>


        </div>

        <h3 className="lastc">Let's innovate , create , and  lead together...!</h3>
        <a href="/Ragistetion"> <button className="rass">Register Now</button> </a>



      </div>





      <Footer />
    </div>
  )
}