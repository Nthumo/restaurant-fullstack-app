import React from "react";
import { useNavigate } from "react-router-dom";


 const EventsPage = () => {
    const navigate = useNavigate();
    return(
        <>
        <div>
            <h1 className="text-4xl  font-bold text-center pt-20">This page is not available.. yet!</h1>
        </div>

        <div className="flex justify-center mt-16">
            <button onClick={() => navigate('/')}
            className="bg-black text-white text-2xl p-4 rounded-lg border hover:bg-gray-800 hover:border-black hover:scale-105"
                >
                &larr; Home
            </button>
        </div>
        
        </>
        
        
    );
 };
 export default EventsPage;