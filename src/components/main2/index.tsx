import React from 'react';
import image from "assets/3.png";
import Button from "components/Button/Medium";
import Heading from "components/Heading";
import Text from "components/Text";
import { FaArrowCircleRight } from "react-icons/fa";

const Index = () => {
  return (
    <div className="relative ml-[86px] mr-[100px] my-[104px]">
      <div className="relative bg-white rounded-[24px] overflow-hidden">
        <div className="grid grid-cols-2 gap-[76px] p-[4px]">
          <img
            src={image}
            className="rounded-tl-[24px] rounded-bl-[24px] h-[100%]"
          />
          <div className="py-[46px] px-[30px]">
            <Heading
              fontWeight={700}
              fontSize="36px"
              textColor={"#000000"}
              lineHeight={"43.88px"}
            >
              Fast track your Tech Career
            </Heading>
            <Text
              fontWeight={300}
              fontSize="24px"
              textColor={"#000000"}
              lineHeight={"29.26px"}
              mt={"24px"}
              mb={"48px"}
            >
              Get the right teams with zero worries for your project every now and
              then. Get the right teams with zero worries for your project every now
              and then.
            </Text>
            <div className="grid grid-cols-2 gap-[34px] w-[448px] mb-[48px]">
              <Button textColor="white" bgColor="#072951">
                #30,000.00
              </Button>
              <Button textColor="white" bgColor="#4393D8">
                3 months
              </Button>
              <Button textColor="white" bgColor="black">
                Mon-Fri (4pm -6pm)
              </Button>
              <Button textColor="white" bgColor="#8D8D8D">
                GoogleMeet
              </Button>
            </div>
            <Button
              textColor={"#072951"}
              className={"flex align items-center gap-[14px] px-0"}
            >
              <FaArrowCircleRight color={"#072951"} />
              More Details
            </Button>
          </div>
        </div>
      </div>
      {/* Pseudo-element for gradient border */}
      <div
        className="absolute inset-0 rounded-[24px] pointer-events-none"
        style={{
          border: '4px solid transparent',
          borderImage: 'linear-gradient(to bottom, #FF9900, #072951) 1',
        }}
      ></div>
    </div>
  );
};

export default Index;
