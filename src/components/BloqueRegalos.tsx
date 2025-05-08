import React from "react";
import regalosImage from "../assets/regalotextb.png"; // Import the image

type BloqueFotoProps = {
  bgImage: string; // path or URL to the background image
  text: string;
};

const BloqueRegalos: React.FC<BloqueFotoProps> = ({ bgImage, text }) => {
  return (
    <div
      id="regalos"
      className="h-screen overflow-hidden w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center", // push image 40px down
      }}
    >
      <img src={regalosImage} alt="Regalos" className="w-[75%] mt-[60vh]" />
      {text}
    </div>
  );
};

export default BloqueRegalos;
