/** @type {import('tailwindcss').Config} */
module.exports ={ 
  content:[
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend: {
      transitionProperty: {
        'transform': 'transform',
        'opacity': 'opacity',
      },
      scale: {
        '75': '0.75',
      },
      height: {
        'signup': '570px',
        'signup2': '500px',
        'contact': '600px',
        'contact2': '500px',
        'reserve': '500px',
        'home': '300px',
        'land': '700px',
        'checkout': '200px',
        'menu': '700px',
      },
      width: {
        'menu': '900px',
        'menu2': '700px',
        'menuphone': '345px',
        'menuphone2': '300px',
        'home': '400px',
        'home1': '450px',
        'home2': '300px',
        'phone': '250px',
        'cook1': '200px',
        'cook': '180px',
        'restaurant': '250px',
        'restaurant1': '0px',
        'skimmer': '0px',
        'skimmer1': '250px',
        'toast': '180px',
        'toast1': '200px'
      },
      blur:{
        'hd':'0.5px'
      },
    },
  },
  plugins:[],
};

  
  