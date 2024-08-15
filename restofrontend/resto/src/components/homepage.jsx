import {Carousel} from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

 const HomePage = () => {
    const images = [
        {src: '/images/4.jpeg', alt: 'Image 1'},
        {src: '/images/2.jpeg', alt: 'Image 2'},
        {src: '/images/6.jpeg', alt: 'Image 3'},
    ];

    return(
        <>
        
        <div className=" pt-16 grid place-items-center">
            <Carousel 
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            interval={2000}
            stopOnHover
            emulateTouch
            className="md:w-home shadow-xl shadow-black w-phone "
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
             
            <div className="bg-gradient-to-r from-gray-800 to-gray-400 rounded-xl md:absolute md:right-5 text-center p-4 shadow-xl shadow-black top-16 w-auto md:w-home1 h-auto md:h-home md:mt-0 mt-8">
                <h1 className="underline text-white font-bold text-xl">OUR STORY</h1>
                <p className="text-black mt-4 text-center text-base md:text-xl font-bold">
                    Resto is one of the few formal restaurants in Nairobi serving Authentic African Cuisine,
                    including rare indigenous delicacies such as wild mushrooms, bambara nuts, groundnuts, 
                    all the seven indigenous Kenyan (Kienyeji) vegetables and tsiswa (white ants) among other dishes.
                 </p>
            </div>

                <img src="/images/chef.png"  alt="coffee-cup" className="md:absolute md:right-36 md:top-96 right-16 top-48 md:w-cook1 w-cook mt-4" />

            <div className="bg-gradient-to-r from-gray-400 to-gray-800 rounded-xl md:absolute left-5 w-auto md:w-home1 h-auto md:h-home top-64 shadow-xl shadow-black text-center p-8 md:mt-0 mt-8 mb-8">
                <img src="/images/coffee-cup.png" width={60} alt="feathers" className="absolute md:left-12 md:top-4" />
                <h1 className="font-bold  text-white text-2xl underline">YOU'RE WELCOME</h1>
                <p className="mt-8 md:mt-16 text-black text-xl font-bold">
                    "The magic of a restaurant lies in its ability to turn an ordinary day into something extraordinary. 
                    It's where food meets heart, and every dish is crafted with care and love."
                </p> 
            </div>
            
        </div>

        <div className="bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 md:mt-4 h-auto md:h-land md:mb-10 rounded-lg">
            <div className='md:pt-16 pt-8'>
                <h1 className='text-center font-bold text-xl'>Another Quote 😂</h1>
                <div className="md:absolute md:inset-x-1/3 md:mt-4 mt-10 flex justify-center text-center w-auto md:w-home">
                    <p className="text-black text-4xl h-checkout p-8 text-cente shadow-black shadow-md font-bold ">
                        " We all eat, and it would be a waste of opportunity to eat badly "
                    </p>
                </div>

                <img src="/images/restaurant1.png"  alt="restaurant" className="absolute md:right-24 w-restaurant1 md:w-restaurant"/>
                <img src="/images/skimmer.png" alt="skimmer" className="md:absolute md:left-36 md:w-skimmer1 w-skimmer"/>

                <div className="md:absolute flex justify-center items-center md:left-8 md:rounded-none bg-black md:h-checkout md:w-home1 text-center p-6 md:p-4 shadow-lg shadow-gray-200 md:shadow-blue-800 md:bottom-28 mt-16 md:mt-0">
                    <div>
                        <h1 className="md:text-4xl text-3xl font-bold text-white underline decoration-white">Checkout our menu</h1>
                        <Link to="/menu">
                            <button className="bg-gray-400 md:text-3xl text-xl md:rounded-none rounded-lg text-black p-2 w-32 md:shadow-md md:shadow-gray-600 hover:bg-black border hover:border-white hover:text-white hover:scale-105 mb:mt-16 mt-10 md:mb-0 mb-6">
                                Menu
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='md:absolute md:bottom-28 md:inset-x-1/3 flex justify-center md:p-4'>
                    <img src="/images/toast.png" alt="toast" className='w-cook md:w-cook1 flex justify-center md:mt-4 mt-8'/>
                </div>

                <div className="md:absolute md:bottom-28 md:w-home1 md:right-5 h-auto md:h-checkout bg-black text-white p-4 md:p-8 text-center shadow-md shadow-gray-200 md:shadow-xl md:shadow-blue-800 mt-12 md:mb-0 mb-12 pb-12">
                    <h1 className="underline font-bold">HOURS</h1>
                    <div className="mt-4">
                         <p className="mt-4">LUNCH: <span>Monday - Sunday 11 am - 3 pm</span></p>
                        <p className="mt-4">DINNER: <span>Monday - Sunday 5 pm - 10:30 pm</span></p>

                    </div>
                    
                </div>
            </div>

        </div>
        </>

    );
 };
 export default HomePage;
