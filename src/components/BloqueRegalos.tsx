import React from "react";
import { useNavigate } from "react-router-dom";
import regalosImage from "../assets/regalotextb.png";

type BloqueFotoProps = {
  bgImage: string;
  text: string;
};

const BloqueRegalos: React.FC<BloqueFotoProps> = ({ bgImage, text }) => {
  const navigate = useNavigate();

  return (
    <div
      id="regalos"
      className="h-screen overflow-hidden w-full flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
      }}
    >
      <img src={regalosImage} alt="Regalos" className="w-[75%] md:w-1/3 mt-[60vh]" />
      {text}
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 bg-white text-black px-4 py-2 rounded shadow"
      >
        Volver
      </button>
    </div>
  );
};

export default BloqueRegalos;
