import { Link } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import ReservationPage from "../pages/reservation";
import Modal from "../pages/signup";
import Contactus from "../pages/contact";
import JobsPage from "../pages/jobs";
import AboutPage from "../pages/about";

const Header = () => {
    const [isReservationsOpen, setReservationsOpen] = useState(false);
    const[isJobsOpen, setJobsOpen] = useState(false);
    const[isContactOpen, setContactOpen] = useState(false);
    const[isAboutOpen, setAboutOpen] = useState(false);
    const[isModalOpen, setModalOpen] = useState(false);




    const restoClassNames= `fixed text-3xl md:text-8xl font-bold z-10 text-black hover:text-white italic transform  transition-transform duration-300 ease-in-out hidden md:block`;
    const headerClassNames = `fixed top-0 mt-1 md:mt-0 left-1/2 transform -translate-x-1/2 w-full md:w-1/2 text-center z-10 transition-transform duration-500 ease-in-out `;


    return (
      
        <div>
        { !isJobsOpen && !isContactOpen && !isAboutOpen && !isModalOpen && ( 
        <>
            <div className={restoClassNames}>
                <Link to="/" className="flex">RESTO</Link>
            </div>
            <div className={headerClassNames}>
                <div className="flex items-center justify-center font-mono rounded-lg  bg-opacity-60 bg-black md:bg-opacity-35 backdrop-blur-hd border md:bg-none md:h-14 h-12 container absolute mx-0 top-0 ">
                    <div className="space-x-3 text-white md:p-4 md:space-x-14 font-bold md:text-xl">
                        <Link to="/menu" className="underline ">Menu</Link>
                        <Link to="/events" className="underline ">Events</Link>
                        <Link to="/shop" className="underline ">Shop</Link>
                        <button onClick={() => setAboutOpen(true)} className="underline">About</button>
                        <button
                        onClick={() => setReservationsOpen(true)}
                        className="text-white p-0.5 rounded md:p-2 bg-black hover:bg-gray-400 border hover:border-black hover:text-black hover:scale-105">
                            Reservations</button>
                    </div>
                </div>

            </div>
        </>
        )}
        
        <AboutPage isOpen={isAboutOpen} onClose={() => setAboutOpen(false)}/>
        <Contactus isOpen={isContactOpen} onClose={() => setContactOpen(false)}/>
        <ReservationPage isOpen={isReservationsOpen} onClose={() => setReservationsOpen(false)} />
        <JobsPage isOpen={isJobsOpen} onClose={() => setJobsOpen(false)}/>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>


        </div>
    );
};
export default Header;