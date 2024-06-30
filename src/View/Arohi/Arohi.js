import React, { useEffect } from "react";
import './Arohi.css';
import logo from './Image/WhatsApp_Image_2024-06-16_at_19.28.41_1a742fc2-removebg-preview.png';
import AOS from "aos";
import "aos/dist/aos.css";
import UnderlineExample from "../../Componant/Navbar/Navbar";
import serv from './Image/SERVICES.png';
import solu from './Image/SOLUTION.png';
import expe from './Image/EXPERTISE.png';
import cutt from './Image/CUTTING-EDGE-TECH.png';
import tell from './Image/TAILOURED-SOLUTION.png';
import seven from './Image/7.png';
import Footer from "../../Componant/Footer/Footer";

export default function Arohi(){
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(
        <div className="backe">
          <UnderlineExample/>
          
          
        <img className="logos" src={logo} data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="3000"/>
         <p className="eventnames" data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="3000">Arohi Software </p>
         
         <div className="car">
          <div className="infcard"><img className="sersolu" src={serv}/>
          <h2>Services</h2><p>Provision of skill, SLA based ownership (IT infrastructure Management.)</p>
          </div>
          <div className="infcard"><img className="sersolu" src={solu}/>
          <h2>Solutions</h2><p>Provision of high-end skills, ownership for mission critical operational SLA</p>
          </div>
         </div><br/><br/>
         {/* <img className="aro" src={back}/> */}
         <h1 className="backg">WHY CHOOSE US ?</h1>
         <h1 className="nat">WHY CHOOSE US ?</h1><br/><br/>
         <div className="cars">
          <div>
            <img className="sersolu" src={expe}/><h1 className="wit">Expertise and Experience</h1>
            <p className="wit">Backed by extensive expertise and years of experience,<br/> we bring unparalleled solutions to the forefront of technology.</p>
          </div>
          <div>
            <img className="sersolu" src={cutt}/><h1 className="wit">Cutting-Edge Technology</h1>
            <p className="wit">Harnessing cutting-edge technology, we propel businesses<br/>  into the future  with innovative solutions and services.</p>
          </div>
         </div>
         <div className="cars">
         <div>
            <img className="sersolu" src={tell}/><h1 className="wit">Tailored Solutions</h1>
            <p className="wit">We craft tailored solutions that precisely align   with  your unique <br/>business needs and aspirations.</p>
          </div>
          <div>
            <img className="sersolu" src={seven}/><h1 className="wit">24/7 Support & Reliability</h1>
            <p className="wit">We provide 24/7 support and unwavering <br/>  reliability to ensure seamless technology<br/>  operations  around the clock.</p>
          </div>
          
         </div><br/><br/>
         <a href="/About" className="abo" >About Us</a>
         <br/><br/><br/><br/>
         <Footer/>
        </div>
        
    )
}