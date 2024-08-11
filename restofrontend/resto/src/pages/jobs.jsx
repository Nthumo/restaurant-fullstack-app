import React, {useState} from "react";
import axios from "../utils/axiosConfig";
import { getCsrfToken } from "../utils/csrf";


 const JobsPage = ({isOpen, onClose}) => {
    const[jobData, setJobData] = useState({
        fullName:'',
        email:'',
        phoneNumber:'',
        coverLetter:'',
        resume:null,
        application:null
        
    });

    const handleChange = (e) => {
        const{name, value, type, files} = e.target;
        setJobData({
            ...jobData,
            [name]: type == 'file'? files[0] : value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        //console.log(jobData)
        const formData = new formData();
        formData.append('name', jobData.fullName);
        formData.append('email', jobData.email);
        formData.append('phone_number', jobData.phoneNumber);
        formData.append('cover_letter', jobData.coverLetter);
        formData.append('resume', jobData.resume);
        formData.append('application', jobData.application);

        try {
            const response = await axios.post(
                "api/job-application",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-CSRFToken": getCsrfToken(),
                    },
                }
            );
            console.log(response.data);
            onClose();
        }catch(error){
            console.error("Error submitting application", error);
        }
    };

    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 z-10 flex item-center justify-center bg-fixed bg-center bg-black bg-opacity-50 backdrop-blur-md">
                <div className="bg-black inset-0 z-0 bg-opacity"></div>
            <button onClick={onClose}
            className="text-black bg-white w-14 p-2 absolute md:right-8 md:top-8 md:rounded-none rounded-full text-4xl font-bold hover:bg-black hover:text-white "
            >
                &times;
            </button>

            <div className="bg-gray-400 p-8 md:h-full relative max-w-4xl w-full mx-4 mt-16 md:mt-0 rounded-lg overflow-y-auto">
                <h2 className="text-2xl text-center font-bold mb-4">WORK WITH US</h2>
                <form className="relative md:left-20 space-y-4 max-w-2xl " onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName" className="block text-black font-bold mb-1">
                            Full Name <span className="text-gray-700 italic">- Required</span>
                        </label>
                        <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        className="w-full px-3 py-2 border border-gray-600 rounded-lg"
                        required
                        onChange={handleChange}
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
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block text-black font-bold mb-1">
                            Phone Number <span className="text-gray-700 italic">- Required</span>
                        </label>
                        <input 
                        type="text" 
                        id="phoneNumber"
                        name="phoneNumber"
                        className="w-full px-3 py-2 border border-gray-600 rounded-lg"
                        required
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="coverLetter" className="block text-black font-bold mb-1">
                            Cover Letter <span className="text-gray-700 italic">- required</span>
                        </label>
                        <textarea 
                        name="coverLetter" 
                        id="coverLetter"
                        className="text-black  w-full my-2 h-24 md:h-32 border border-gray-600 rounded-lg"
                        required
                        onChange={handleChange}
                        >
                        </textarea>
                    </div>

                    <div>
                        <label htmlFor="application" className="">
                            Upload your application <span className="text-gray-700 italic">-required</span>
                        </label>
                        <br />
                        <input 
                        type="file" 
                        name="application" 
                        id="application" 
                        className="py-2"
                        required
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="resume" className="">
                            Upload your resume <span className="text-gray-700 italic">-required</span>
                        </label>
                        <br />
                        <input 
                        type="file" 
                        name="resume" 
                        id="resume" 
                        className="py-2"
                        required
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
 export default JobsPage;