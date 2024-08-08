import React from "react";
import './Footer.css';
import fot from './Image/fotimg.jpg';
import logo from './Image/WhatsApp_Image_2024-06-16_at_19.28.41_1a742fc2-removebg-preview.png';
import facebook from './Image/facebook.png';
import linked from './Image/linkedin.png';
import instgram from './Image/instagram.png';
import twiter from './Image/twiter.png';



export default function Footer(){
    return(
        <>
        <div className="foot">
            <div className="colo">
                
                <p className="safed">NETWORK</p>
                <h1 className="safeds">JOIN THE COMMUNITY</h1>
                <p className="safeds">This is the place where a unique tribe of innovative disruptors,<br/> creatives, entrepreneurs, and business experts meet.</p>
            </div>
            <div className="colos">
                <img className="fotimg" src={fot}/>
            </div>
        </div>

        <div className="blacks">
            <div className="parts">
                <a href="/arohi">
            <img className='logoss' src={logo}/>
            </a>
            <h2>Arohi Software</h2>
            </div>
            <div className="parts">
                <a href="/" className="pagess">Home</a><br/>
                <a href="/arohi" className="pagess">Arohi Software</a><br/>
                <a href="/About" className="pagess">About</a><br/>
                <a href="/Past" className="pagess">Past</a><br/>
                <a href="/Ragistetion" className="pagess">Ragistetion</a><br/>
            </div>
            <div className="parts">
                <h4>FOLLOW US</h4>
                <a href=""><img className="iconss" src={facebook}/></a>
                <a href="www.linkedin.com/in/. gawade 41b4922b5"><img className="iconss" src={linked}/></a>
                <a href=""><img className="iconss" src={twiter}/></a>
                <a href="https://www.instagram.com/diuu_2603?igsh=MXhyaWFnMHFjNGpwaw=="><img className="iconss" src={instgram}/></a><br/>
                <p>Stay Curious, Discover More...</p>
            </div>
            
        </div>
        </>
    )
}