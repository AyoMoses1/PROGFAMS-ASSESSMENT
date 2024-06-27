import image from "assets/3.png";
import Button from "components/Button/Medium";
import Heading from "components/Heading";
import Text from "components/Text";
import { FaArrowCircleRight } from "react-icons/fa";

const Index = () => {
  return (
    <div className="relative ml-[86px] mr-[100px] my-[104px]">
      <div
        className="relative p-[4px] rounded-[24px]"
        style={{
          background: "linear-gradient(to bottom, #FF9900, #072951)",
        }}
      >
        <div className="bg-white rounded-[20px] overflow-hidden">
          <div className="grid grid-cols-2 gap-[76px]">
            <img
              src={image}
              className="rounded-tl-[20px] rounded-bl-[20px] h-full"
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
                Get the right teams with zero worries for your project every now
                and then. Get the right teams with zero worries for your project
                every now and then.
              </Text>
              <div className="flex mb-[20px] gap-[34px]">
                <Button textColor="white" bgColor="#072951">
                  #30,000.00
                </Button>
                <Button textColor="white" bgColor="#4393D8">
                  3 months
                </Button>
              </div>
              <div className="flex mb-[48px] gap-[34px]">
                <Button textColor="white" bgColor="black">
                  Mon-Fri (4pm -6pm)
                </Button>
                <Button textColor="white" bgColor="#8D8D8D">
                  GoogleMeet
                </Button>
              </div>
              <button
                className={`flex justify-start items-center gap-[14px] px-0`}
                style={{
                  color: "#072951",
                  fontWeight: 600,
                }}
              >
                <FaArrowCircleRight size={"34px"} color={"#072951"} />
                More details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
