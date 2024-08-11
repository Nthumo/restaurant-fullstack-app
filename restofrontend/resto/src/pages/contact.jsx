import React, {useState} from "react";
import axios from '../utils/axiosConfig';
import { getCsrfToken } from "../utils/csrf";


const Contactus = ({isOpen, onClose}) => {
    const[contactData, setContactData] = useState({
        name:"",
        email:"",
        phone_number:"",
        reason:"",
        message:"",
    });

    const [inquiry, setInquiry] = useState("");

     //form
    const handleFormChange = (e) => {
        const{ name, value } = e.target;

        if (name === 'reason') {
            setInquiry(value);
            setContactData(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else {
            setContactData(prevState => ({
                ...prevState,
            [name]: value,
            }));
        }
        };
        

    

    const handFormSubmit = async(e) => {
        e.preventDefault();
        //console.log(contactData);
        try {
            const response = await axios.post(
                "api/contact-messages/",
                JSON.stringify(contactData),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": getCsrfToken(),
                    },
                }
            );
            console.log(response.data)
            onClose();
        }catch (error) {
            console.error("Error submitting the form", error);
        }
    };




    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
                <div className="absolute inset-0 z-0 bg-black bg-opacity-60"></div>
            <button
                onClick={onClose}
                className="bg-white hover:bg-black hover:text-white w-14 p-2 rounded-full md:rounded-none flex justify-center absolute top-1 md:top-2 md:right-16 text-4xl font-bold"
                >
                    &times;
            </button>

            <div className="bg-gray-400 p-8 rounded-lg  shadow-lg h-contact2 md:h-contact relative max-w-4xl w-full mx-4 overflow-y-auto mt-12 md:mt-0">
                <h2 className="text-2xl font-bold text-center mb-4 pt-2">Reach Out</h2>
                <form className="relative md:left-20 space-y-6 md:space-y-8 max-w-2xl" onSubmit={handFormSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-black font-bold m">
                            Name <span className="text-gray-700 italic">- Required</span>
                        </label>
                        <input 
                        type="text" 
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-600 rounded-lg"
                        required
                        onChange={handleFormChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-black font-bold mb-1">
                            Email <span className="text-gray-700 italic">- Required</span>
                        </label>
                        <input 
                        type="text" 
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-600 rounded-lg"
                        required
                        onChange={handleFormChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone_number" className="block text-black font-bold mb-1">
                            Phone Number <span className="text-gray-700 italic">- required</span>
                        </label>
                        <input 
                        type="text" 
                        id="phone_number"
                        name="phone_number"
                        className="w-full px-3 py-2 border border-gray-600 rounded-lg"
                        required
                        onChange={handleFormChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="reason">
                            What are you getting in touch about? <span className="text-gray-700 italic">-optional</span>
                        </label>
                        <select 
                        name="reason" 
                        id="reason"
                        value={inquiry}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border border-gray-600"
                        >
                            <option value="">Select a reason</option>
                            <option value="1">General Inquiry</option>
                            <option value="2">Press Inquiry</option>
                        </select>
                    </div>

                    <div className="pt-4">
                        <label htmlFor="message" className="block text-black font-bold mb-1">
                            Message <span className="text-gray-700 italic">- required</span>
                        </label>
                        <textarea 
                        name="message" 
                        id="message"
                        className="text-black  w-full my-2 h-32 border border-gray-600 rounded-lg"
                        required
                        onChange={handleFormChange}
                        >
                        </textarea>
                    </div>

                    <div className="flex items-center justify-center md:pt-16">
                        <button
                        type="submit"
                        className="w-20 bg-black text-white py-2 hover:bg-gray-400 hover:text-black hover:scale-105 border hover:border-black"
                        >
                            Submit
                        </button>
                    </div>
                   
                </form>
            </div>
        </div>
    );
};

export default Contactus;