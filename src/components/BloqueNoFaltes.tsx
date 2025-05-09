import React from 'react';
import nofaltes from '../assets/nofaltes.png'; // Import the image
type BloqueFotoProps = {
  bgImage: string; // path or URL to the background image
  text: string;
};

const BloqueNoFaltes: React.FC<BloqueFotoProps> = ({ bgImage, text }) => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center' // push image 40px down
      }}
      
    >
      <img className='w-[95%] mt-[65vh] md:w-1/3' src={nofaltes} alt="" />
      {text}

    </div>
  );
};

export default BloqueNoFaltes;
