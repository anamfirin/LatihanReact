import React from "react";
import HeroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded full object-cover
      transform transition-transform duration-300 hover:scale-105 "
      />
      <h1 className="text-4xl font-bold">
        i'm {}
        <span>Mohammad Anam </span>
        ,Pekerja Keras dan Ingin Kaya Raya
      </h1>
      <p>Saya adalah seorang pekerja keras yang ingin kaya raya. Saya memiliki mimpi untuk punya rumah</p>
      <div>
        <button> Contact With Me</button>
        <button> Resume</button>
      </div>
    </div>
  );
};

export default Hero;
