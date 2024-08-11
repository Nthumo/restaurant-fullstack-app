import React from "react";
import { useNavigate } from "react-router-dom";


 const ShopPage = () => {
    const navigate = useNavigate();
    return(
        <>
        <div>
            <h1 className="text-4xl font-bold text-center pt-20">The Shop page is not available.......yet!</h1>
        </div>
        <div className="flex justify-center mt-16">
            <button onClick={()=> navigate('/')}
            className="text-xl bg-black text-white p-4 rounded-lg border hover:border-black hover:bg-gray-800 hover:scale-105"
                >
                &larr; Home
            </button>
        </div>
        
        </>
        
    );
 };
 export default ShopPage;