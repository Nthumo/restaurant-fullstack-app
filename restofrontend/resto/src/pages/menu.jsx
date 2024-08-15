import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosConfig";
import lunchImage from "../assets/lunch.jpeg";
import dinnerImage from "../assets/dinner.jpeg";
import drinksImage from "../assets/drinks.jpeg";


const MenuPage = () => {
    const[items, setMenuData] = useState([]);
    const[selectedCategory, setSelectedCategory] = useState('Lunch');
    const navigate = useNavigate();



    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('api/menu-items/');
                setMenuData(response.data);
            } catch (error) {
                console.error('Error fetching menu items', error);
            }
        };

        fetchData();
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredItems = items.filter(item => item.category == selectedCategory);

    const getCategoryImage = () => {
        switch(selectedCategory) {
            case 'Lunch':
                return lunchImage;
            case 'Dinner':
                return dinnerImage;
            case 'Drinks':
                return drinksImage;
            default:
                return null;
        }
    };

    const getCategoryClass = () => {
        switch(selectedCategory) {
            case 'Lunch':
                return'text-gray-200';
            case 'Dinner':
                return'text-gray-200';
            case 'Drinks':
                return'text-gray-200 ';
            default:
                return '';
        }
    };



    return (
        <div className=" grid place-items-center  bg-black bg-opacity-50 backdrop-blur-md">
            <div className="absolute top-2 md:top-12 left-2  md:left-16 rounded-full p-2 bg-white md:bg-gray-100 md:bg-opacity-50 md:hover:bg-gray-200 z-20">
                <button onClick={() => navigate('/') } 
                className="md:text-4xl text-xl md:font-bold text-text-black italic "> 
                    &larr; back
                </button>
            </div> 
            <div className="bg-gradient-to-r from-black via-gray-700 to-black w-menuphone md:w-menu overflow-y-auto mb-0 md:h-svh h-menu ">
                <div className="space-x-8 text center text-2xl flex justify-center pt-16 md:pt-8 text-white text-xl sticky top-0 z-10">
                    <button 
                    onClick={() => handleCategoryChange('Lunch')}
                    className={`bg-black border hover:border-black hover:bg-gray-400 hover:scale-105 hover:text-black p-1 md:p-2  ${selectedCategory === 'Lunch' && 'bg-white text-black'}`}
                    >
                        Lunch
                    </button>

                    <button 
                    onClick={() => handleCategoryChange('Dinner')}
                    className={`bg-black border hover:border-black hover:bg-gray-400 hover:text-black hover:scale-105 p-1 md:p-2 ${selectedCategory === 'Dinner' && 'bg-white text-black'}`}
                    >
                        Dinner
                    </button>

                    <button 
                    onClick={() => handleCategoryChange('Drinks')}
                    className={`bg-black hover:bg-gray-400 border hover:border-black hover:scale-105 hover:text-black p-1 md:p-2 ${selectedCategory === 'Drinks' && 'bg-white text-black'}`}
                    >
                        Drinks
                    </button>
                </div>

                <div className="grid place-items-center">

                    <div className="md:w-menu2 relative grid place-items-center left-54 mt-8">
                        <img src={getCategoryImage()} alt={selectedCategory} className="w-1/2"/>
                    </div>


                    <table className="md:w-full md:max-w-xl text-white mt-8 mb-10 md:mb-20 w-menuphone2">

                        <tbody>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 1</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 2</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 3</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 4</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 5</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 6</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 7</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 8</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 8</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 8</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 8</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 8</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                            <tr className="border border-white-700">
                                <td className="p-4 text-left">Food 8</td>
                                <td className="p-4 text-right">Sh.500</td>
                            </tr>
                        </tbody>

                        <tbody>
                            {filteredItems.map(item => (
                                <tr key={item.id} className={`border border-white-700 ${getCategoryClass()}`}>
                                    <td className="p-4 text-left">{item.name} </td>    
                                    <td className="p-4 text-right">Sh.{item.price}</td>  
                                </tr>
                            ))}
                        </tbody>
                        
                    </table>
                </div>
        </div>
                
                
        </div>

    );
};
export default MenuPage;
