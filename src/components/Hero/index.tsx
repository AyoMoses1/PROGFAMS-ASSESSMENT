import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../src/assets/icons/Logo.svg";
import bg from "assets/bg.jpeg";
import image from "assets/2.png";
import Button from "components/Button/Button";

const Index = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="hero w-full relative overflow-hidden h-[560px] pb-[42.8px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "0% 55%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute bg-primary inset-0 opacity-50 z-10" />
      <div className="h-[10vh] flex gap-[400px] items-center px-[108px] relative z-20">
        <img src={Logo} alt="Logo" className="" />
        <div>
          <ul className="flex gap-7 cursor-pointer font-medium text-base">
            <li>
              <Link
                to="/"
                className={`${
                  isActive("/") ? "text-white" : "text-[#4393D8]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/bootcamp"
                className={`${
                  isActive("/bootcamp") ? "text-white" : "text-[#4393D8]"
                }`}
              >
                Bootcamp
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center h-full relative z-20">
        <div>
          <h1 className="text-white font-montserrat text-hero-header font-hero-header leading-hero-header mb-[27px]">
            Get the best knowledge from our Versatile Tutors
          </h1>
          <Button textColor="black" bgColor="white">
            Start learning!
          </Button>
        </div>
        <img src={image} alt="hero-image" />
      </div>
    </div>
  );
};

export default Index;
