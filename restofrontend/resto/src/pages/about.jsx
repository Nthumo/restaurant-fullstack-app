import React, {useEffect} from "react";

const AboutPage = ({isOpen, onClose}) => {

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
 
  return (
    <div className="fixed inset-0 bg-black  bg-opacity-50 backdrop-blur-md bg-center h-screen z-50 flex justify-center items-center ">

      <button onClick={onClose}
      className="text-white text-5xl md:text-6xl md:text-black bg-black md:bg-white absolute top-1 md:top-2 md:right-16 md:rounded-none rounded-full w-12 md:w-16 md:hover:bg-black md:hover:text-white "
      >
        &times;
      </button>

      <div className="bg-gray-200 shadow-md rounded-lg p-8  md:p-8 max-w-3xl w-full md:mb-0 overflow-y-auto max-h-[80vh] md:max-h-[100vh] mt-6 md:mt-6  mb-0 md:mx-0 mx-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">About Resto Restaurant</h1>
        <p className="text-lg mb-4">
          Welcome to Resto, where culinary excellence meets a warm and inviting atmosphere. Our story began with a passion for food and a dream to create a place where people could come together to enjoy delicious meals and create lasting memories.
        </p>
        <p className="text-lg mb-4">
          At Resto, we pride ourselves on offering a diverse menu that features a blend of traditional and contemporary dishes. Our talented chefs use only the freshest ingredients, sourced locally whenever possible, to craft each dish with care and precision.
        </p>
        <p className="text-lg mb-4">
          Since opening our doors, Resto has become a beloved dining destination for locals and visitors alike. Our commitment to quality, innovation, and exceptional service has earned us a reputation as one of the finest restaurants in the area.
        </p>
        <p className="text-lg mb-4">
          Whether you're here for a casual lunch, a romantic dinner, or a special event, we strive to provide an unforgettable dining experience. Thank you for choosing Resto, and we look forward to serving you.
        </p>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to create a memorable dining experience for every guest by offering exceptional food, outstanding service, and a welcoming environment.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Quality: We use the finest ingredients to create delicious, high-quality dishes.</li>
            <li>Innovation: We continuously explore new culinary trends and techniques to delight our guests.</li>
            <li>Customer Service: We prioritize the needs and satisfaction of our customers in everything we do.</li>
            <li>Community: We are committed to supporting local farmers, suppliers, and our community.</li>
          </ul>
        </div>
      </div>      
    </div>
  );
};

export default AboutPage;
