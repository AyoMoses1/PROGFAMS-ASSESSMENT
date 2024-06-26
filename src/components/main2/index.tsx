import image from "assets/3.png";
import Heading from "components/Heading";
import Text from "components/Text";

const index = () => {
  return (
    <div className="grid grid-cols-2 gap-[76px] ml-[86px] mr-[100px] py-[104px]">
      <img src={image} />
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
      </div>
    </div>
  );
};

export default index;
