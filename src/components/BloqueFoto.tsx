import React from 'react';

type BloqueFotoProps = {
  bgImage: string; // path or URL to the background image
  text: string;
};

const BloqueFoto: React.FC<BloqueFotoProps> = ({ bgImage, text }) => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center' // push image 40px down
      }}
      
    >
      <h3 className='text-white mt-2 shadow text-3xl'>{text}</h3>
    </div>
  );
};

export default BloqueFoto;
