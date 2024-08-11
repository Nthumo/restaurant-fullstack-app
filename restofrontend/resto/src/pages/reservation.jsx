import axios from "axios";
import React, {useState, useEffect} from "react";
import { getCsrfToken } from "../utils/csrf";


 const ReservationPage = ({isOpen, onClose}) => {
    const[formData, setFormData] = useState({
        number_of_people:"",
        reservation_date:"",
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

    if (!isOpen) return null;


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value,
        });
    };

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await axios.post(
                "api/reservations/",
                JSON.stringify(formData),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": getCsrfToken(),
                    },
                }
            );
            console.log(response.data)
            onclose();
        }catch(error) {
            console.error("Error submitting the form", error);
        }
    };


    return(
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-md bg-center flex justify-center items-center">
            
            <button 
            onClick={onClose}
            className=" text-black text-6xl md:text-5xl bg-white absolute top-1 md:top-2 rounded-full md:rounded-none md:right-8 w-16  md:p-2 hover:text-white hover:bg-black md:w-14 "
            >
                &times;
            </button>

            <div className="bg-gray-400 w-full max-w-5xl h-reserve p-8 mx-4 space-y-12 md:rounded-none rounded-lg md:mt-0 mt-14">
                <h2 className="text-black text-center text-4xl font-bold mb-4">Reservations</h2>
                <form className="space-y-10 " onSubmit={handleFormSubmit}>

                    <div>
                        <label htmlFor="number_of_people" className="font-bold">
                            Number of people <span className="text-gray-800 italic">-required</span>
                        </label>
                        <select 
                        name="number_of_people" 
                        id="number_of_people"
                        value={formData.number_of_people}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-600 h-12 md:h-16"
                        >
                            <option value="">Number Of People</option>
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5 People</option>
                            <option value="6">6 People</option>
                            <option value="7">7 People</option>
                            <option value="8">8 People</option>
                            <option value="9">9 People</option>
                            <option value="10">10+ People</option>
                        </select>
                    </div>
                    

                    <div >
                        <label htmlFor="reservation_date" className="font-bold">
                            Date <span className="text-gray-800 italic">- Required</span>
                        </label>
                        <input 
                        type="date" 
                        id="reservation_date"
                        name="reservation_date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-600 h-12 md:h-16"
                        />
                    </div>
                    

                    <div className="pt-10 flex items-center justify-center">
                        <button 
                        type="submit" 
                        className="bg-black text-white w-32 py-3 hover:text-black hover:bg-gray-400 hover:scale-105 border hover:border-black"
                        >
                            Find A Table
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
 };
 export default ReservationPage;