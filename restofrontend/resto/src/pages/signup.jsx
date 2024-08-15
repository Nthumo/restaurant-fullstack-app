import React, { useState, useEffect } from "react";
import axios from '../utils/axiosConfig';
import { getCsrfToken } from "../utils/csrf";


const Modal = ({isOpen, onClose}) => {
    const[formData, setFormData] = useState({
        first_name:"",
        second_name:"",
        email:"",
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "/api/email-signup/",
                JSON.stringify(formData), //sent data in JSON
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": getCsrfToken(),
                    },
                }
            );
            console.log(response.data);
            onClose(); //Close the modal after successful submission
        }catch (error) {
            console.error("Error submitting the form", error);
        }
    };

    if (!isOpen) return null;


    return (
        
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-center bg-black bg-opacity-50 backdrop-blur-md">
            <div className="absolute inset-0 z-0 bg-black bg-opacity-60"></div>
                <button
                    onClick={onClose}
                    className="absolute top-1 md:top-2 md:right-4 bg-white w-14 p-2 flex justify-center text-4xl font-bold text-gray-700 hover:text-white hover:bg-black md:rounded-none rounded-full"
                    >
                        &times;
                </button>
            
            <div className="bg-gray-400 p-8 rounded-lg shadow-lg  md:h-signup relative max-w-4xl w-full mx-4 mt-12 md:mt-0">
                <h2 className="text-2xl font-bold text-center mb-4">Email Signup</h2>
                <form className="relative md:left-20 space-y-4 max-w-2xl" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="first_name" className="block text-black font-bold mb-1">
                            First Name <span className="text-gray-400 italic">- Required</span>
                        </label>
                        <input 
                        type="text" 
                        id="first_name"
                        name="first_name"
                        className="w-full px-3 py-2 border border-gray-600 rounded-lg"
                        required
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="second_name" className="block text-black font-bold mb-1">
                            Last Name <span className="text-gray-400 italic">- Required</span>
                        </label>
                        <input 
                        type="text" 
                        id="second_name"
                        name="second_name"
                        className="w-full px-3 py-2 border border-gray-600 rounded-lg"
                        required
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-black font-bold mb-1">
                            Email <span className="text-gray-400 italic">- Required</span>
                        </label>
                        <input 
                        type="text" 
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-600 rounded-lg"
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-center pt-16">
                        <button
                        type="submit"
                        className="w-20 bg-black text-white py-2 border hover:border-black hover:scale-105 hover:bg-gray-400 hover:text-black"
                        >
                            Submit
                        </button>
                    </div>
                   
                </form>
            </div>
        </div>
    );
};

export default Modal;