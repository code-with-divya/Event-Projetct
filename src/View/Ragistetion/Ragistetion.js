import React, { useEffect, useState } from "react";
import UnderlineExample from "../../Componant/Navbar/Navbar";
import Footer from "../../Componant/Footer/Footer";
import './Ragistetion.css';
import ai from './Image/ai.webp';
import brine from './Image/Brain.webp';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Ragistetion(){
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

    const[name,setName]=useState('-')
    const[email,setEmail]=useState('-')
    const[number,setNumber]=useState('-')
    const fnav = (a) => {
        setName(a.target.value)
    }
    const emai = (b) => {
        setEmail(b.target.value)
    }
    const num = (c) => {
        setNumber(c.target.value)
    }

    


    return(
        <>
        <UnderlineExample/>
        <div>

        <img className="aiimg" src={ai}/>
        <h1 className="had" data-aos="zoom-in" data-aos-duration="3000">Registiation</h1>
        </div>
        <div className="bakc">
            <h1 className="title">Registiation</h1>
            <h1 className="naa">Project Competition</h1>
            <div className="res">

            </div>
            <h4 className="qqq"> 1. Enter your Name </h4>
            <input onChange={fnav} className="innputs" type="text"  placeholder="Enter Your Name" required/>
            
            <h4  className="qqq"> 2. Phone Number </h4>
            <input  className="innpu" type="number"  placeholder="Number" />
            <h4  className="qqqs"> 3. E-mail </h4>
            <input onChange={emai} className="innpus" type="email"  placeholder="E-mail" required/>
            <h4 className="qqq"> 4. Company Name </h4>
            <input onChange={num} className="innputs" type="text"  placeholder="Company Name"/>
            <h4 className="qqq"> 5. Address </h4>
            <input className="innputs" type="text"  placeholder="Address" required/>

            <button id="nav" className="qqqn">Submit</button>


        </div>
        <div className="tiki" data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="3000">
            <img className="bre" src={brine}/>
            <div >
                <h1 className="iii">Project Competition</h1>
                <br/>
                <h5 >Name :{name}</h5><br/>
                <h5 >E-mail :{email}</h5><br/>
                <h5 >Company Name :{number}</h5><br/>
                <h4 className="iii">15 AUG 2024  ,  11:30</h4>
                
            </div>
            

        </div>
        
        <br/>
        

        <Footer/>
        </>
    )
}