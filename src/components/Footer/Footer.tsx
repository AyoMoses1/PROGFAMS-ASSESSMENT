import React from "react";
import Text from "components/Text";
import icon1 from "assets/icon1.svg"
import icon2 from "assets/icon2.svg"
import icon3 from "assets/icon3.svg"

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8 pb-[160px] pt-[67.5px] flex gap-[120.25px] pl-[113px] pr-[78.5px]">
      <div className="flex-col items-center col-span-2">
        <span className="font-poppins font-bold text-6xl leading-tight">
          LOGO
        </span>
        <Text
          fontWeight={300}
          fontSize="18px"
          textColor={"white"}
          lineHeight={"21.94px"}
          mb={"12px"}
        >
          Subscribe to our newsletters and stay up to date on features and
          releases.
        </Text>
        <p className="font-500 text-[18px]">Copyrights @ Progfams 2024</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <ul>
            <li className="mb-[50px]">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-[50px]">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Service
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <li className="mb-[50px]">
            <a href="#" className="hover:underline">
              Works
            </a>
          </li>
          <li className="mb-[50px]">
            <a href="#" className="hover:underline">
              Boot Camp
            </a>
          </li>
        </ul>
        <ul>
          <li className="mb-[50px]">
            <a href="#" className="hover:underline">
              Consultation
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
        </ul>
        <div>
          <ul>
            <li className="mb-[25px]">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <p className="font-400 text-[16px] mb-[10px]">+234 810 112 8072</p>
          <p className="font-400 text-[16px] mb-[10px]">Info@Progfams.com</p>
          <p className="font-400 text-[16px]">
            10B, Harmony Close, <br />
            Ikeja, Lagos.
          </p>
          <div className="flex mt-[24.5px] gap-[12px]">
            <img src={icon1}/>
            <img src={icon2}/>
            <img src={icon3}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
