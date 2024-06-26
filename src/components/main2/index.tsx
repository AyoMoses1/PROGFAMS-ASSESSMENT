import image from "assets/3.png";
import Button from "components/Button/Medium";
import Heading from "components/Heading";
import Text from "components/Text";

const index = () => {
  return (
    <div
      className="grid grid-cols-2 gap-[76px] ml-[86px] mr-[100px] my-[104px]"
      style={{ border: `4px solid #FF9900`, borderRadius: `24px` }}
    >
      <img src={image} className="rounded-tl-[24px] rounded-bl-[24px]"/>
      <div className="py-[46px]">
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
        <div className="grid grid-cols-2 gap-[34px] w-[448px]">
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
      </div>
    </div>
  );
};

export default index;
