import React, { useEffect } from "react";
import UnderlineExample from "../../Componant/Navbar/Navbar";
import './Past.css';
import one from './Image/Past-1.jpeg';
import tow from './Image/Past-2.jpg';
import tre from './Image/Past-3.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Componant/Footer/Footer";


export default function Past(){
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(
        <>
        <UnderlineExample/>
        <div className="gredent">
        </div>
        <h1 className="varch">ALL EVENTS</h1>
        <p className="varchs">Here you can find all our events.</p>



        <div className="cardinf" data-aos="flip-right" data-aos-duration="3000">
            <img className="caimg" src={one}/>
            <div>
                <p className="old">PAST EVENT</p>
                <h1 className="old1">PROJECT COMPITITION 2022<br/> GLOBAL FINALS</h1>
                <p className="diu">Welcome to the Creative Business Cup! If you want to be part of the biggest global event for the creative<br/> sector, you're in the right place!</p>
            </div>
            <div className="patti"></div>
        </div>

        <div className="cardinf" data-aos="flip-right" data-aos-duration="3000">
            <img className="caimg" src={tow}/>
            <div>
                <p className="old">PAST EVENT</p>
                <h1 className="old1">PROJECT COMPITITION 2020<br/> DENMARK</h1>
                <p className="diu">If you're a startup with a fantastic product or service and you're innovative, creative, and ready to be ,s's<br/> to showcase it to the world, then here's your chance!</p>
            </div>
            <div className="patti"></div>
        </div>

        <div className="cardinf" data-aos="flip-right" data-aos-duration="3000">
            <img className="caimg" src={tre}/>
            <div>
                <p className="old">PAST EVENT</p>
                <h1 className="old1">PROJECT COMPITITION 2018 <br/> SPRINT & PITCH</h1>
                <p className="diu">Start your fundraising journey and meet investors biggest Start your fundraising journey and  investors<br/>
                </p>
            </div>
            <div className="patti"></div>
        </div>
        <Footer/>

        </>
    )
}