import React, { useEffect } from "react";
import UnderlineExample from "../../Componant/Navbar/Navbar";
import './About Us.css';
import meet from './Image/bee_breeders_architecture_competition_organisers_cover.jpeg';
import angelone from './Image/angel-1.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import angeltow from './Image/angel-2.jpg';
import angeltre from './Image/angel-3.jpg';
import angelfor from './Image/angel-4.jpg';
import Footer from "../../Componant/Footer/Footer";
import top from './Image/top.jpg';


export default function About() {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <UnderlineExample />
            <img className="frem" src={top} />
            <h1 className="had" data-aos="zoom-in" data-aos-duration="3000">Project Compitition</h1>



            <h1 className="hads" data-aos="zoom-in" data-aos-duration="3000">Investor's</h1>
            <div className="trans">
                <div className="inve">
                    <img className="cards" src={angelone} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000" />

                    <img className="cards" src={angeltow} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000" />
                </div>


                <h1 className="titl">Mr.Sanket Ghodke</h1>
                <h1 className="titr">Miss.Poonam Digole</h1>


                <div className="invo">
                    <img className="cards" src={angeltre} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000" />
                    <img className="cards" src={angelfor} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000" />
                </div>
            </div>
            <h1 className="titl">Mr.Ganesh Sawant</h1>
            <h1 className="titr">Miss.Divya Gawade</h1>




            <div className="marg">
                <div className="tesx" >
                    <h1 className="tit" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">Project Enovetion</h1>
                    <h4 className="smm" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">is our premier annual event dedicated to celebrating and fostering innovation within the IT industry. Hosted by our company, this event gathers professionals, enthusiasts, and thought leaders to explore new technological advancements, exchange groundbreaking ideas, and collaborate on future innovations.
                    </h4>
                </div>
                <div className="tesxt">
                    <div className="">
                        <h1 className="tit" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">Our Vision</h1>
                        <h4 className="smmt" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">Project Enovetion envisions a dynamic platform where creativity and technology converge to drive the future of IT. We are committed to nurturing a vibrant community that is eager to innovate, share knowledge, and transform ideas into impactful solutions.
                        </h4>
                    </div>
                    <div className="">
                        <h1 className="tit" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">Our Mission</h1>
                        <h4 className="smmt" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">Our mission is to empower participants to harness their creativity, collaborate effectively, and bring their visionary projects to life. Through a variety of engaging activities including keynote speeches, interactive workshops, and ample networking opportunities, we aim to inspire and equip attendees with the tools and insights they need to excel.
                        </h4>
                    </div>
                </div>
                <div className="tesx" >
                    <h1 className="tit" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">Event Highlights</h1>
                    <li className="smm" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"> Keynote Speeches: Gain insights from industry pioneers and leading experts on the latest trends and future directions in technology.
                    </li>
                    <li className="smm" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">Workshops: Engage in practical, hands-on sessions to learn new skills and approaches from seasoned professionals.
                    </li>
                    <li className="smm" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">
                        Networking Opportunities: Connect with peers, potential collaborators, and industry mentors to expand your professional network.
                    </li>
                    <li className="smm" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">
                        Innovation Showcase: Present and discover cutting-edge projects and solutions developed by our talented community.
                    </li>
                </div>
            </div>





            <Footer />



        </>
    )
}