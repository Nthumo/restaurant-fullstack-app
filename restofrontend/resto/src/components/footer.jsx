import React, {useState} from "react";
import Modal from "../pages/signup";
import Contactus from "../pages/contact";
import JobsPage from "../pages/jobs";


const Footer = () =>{
    const[isJobsOpen, setJobsOpen] = useState(false)
    const[isModalOpen, setModalOpen] = useState(false)
    const[isContactOpen, setContactOpen] = useState(false)

    const openJobs = () => {
        setJobsOpen(true);
    };

    const closeJobs = () => {
        setJobsOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
        
    };

    const closeModal = () => {
        setModalOpen(false);
        setContactOpen(false);
    };

    const openContact = () => {
        setContactOpen(true);
    };

    const closeContact = () => {
        setContactOpen(false);
    };
    
    

    return(
        <footer className="">
            <div className="md:space-x-6 md:fixed  h-10 z-10 flex items-center justify-center space-x-2 m">
                {!isJobsOpen && !isModalOpen && !isContactOpen && (
                    <>

                        <div className="md:fixed bottom-8 right-8 md:bottom-4 md:right-12">
                            <button
                            onClick={openJobs}
                            className="text-white bg-black p-1 md:hover:bg-gray-400 border md:hover:border-black md:hover:scale-105 md:hover:text-black italic md:rounded-lg"
                            >
                                Work with us
                            </button>
                        </div>
                    
                        <div className="md:fixed bottom-8 right-36 md:bottom-4 md:right-40">
                            <button
                            onClick={openContact}
                            className="text-white bg-black p-1 text- hover:bg-gray-400 hover:text-black border hover:border-black hover:scale-105 italic md:rounded-lg"
                            >
                                Contact Us
                            </button>
                            
                        </div>

                        <div className="md:fixed bottom-8 right-60 md:bottom-4 md:right-72 ">
                            <button
                            onClick={openModal}
                            className="text-white bg-black p-1 md:p-3 md:hover:bg-gray-400 border italic md:italic-none md:hover:border-black md:hover:scale-105 md:hover:text-black "
                            >
                                Email Signup
                            </button>
                            
                        </div>
                    </>
                    
                )
                    
                }
             
                <Contactus isOpen={isContactOpen} onClose={closeContact} />
                <Modal isOpen={isModalOpen} onClose={closeModal} />
                <JobsPage isOpen={isJobsOpen} onClose={closeJobs} />
            </div>

            <div className="text-white flex items-center justify-center text-center mt-4 mb-2">
                <p className="italic text-sm ">&copy; 2024 Resto. All rights reserved.</p>
            </div>
        </footer>
    );
};


export default Footer