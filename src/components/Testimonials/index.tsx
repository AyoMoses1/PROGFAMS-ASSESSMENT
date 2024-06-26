import image from "assets/4.png";
import Heading from "components/Heading";
import Text from "components/Text";
import arrow1 from "assets/a1.svg"
import arrow2 from "assets/a2.svg"


const index = () => {
  return (
    <div className={"bg-[#4393D840] pl-[86px] pr-[100px] py-[97px] mt-[104px]"}>
      <div className="w-[503px]">
        <Text
          fontWeight={500}
          fontSize="24px"
          textColor={"#8D8D8D"}
          lineHeight={"29.26px"}
          mb={"30px"}
        >
          Testimonials
        </Text>
        <Heading
          fontWeight={700}
          fontSize="36px"
          textColor={"#000000"}
          lineHeight={"43.88px"}
        >
          See what others are saying about us{" "}
        </Heading>
      </div>
      <div className="grid grid-cols-2 gap-[76px] mt-[60px]">
        <div className="py-[46px]">
          <Text
            fontWeight={400}
            fontSize="28px"
            textColor={"#000000"}
            lineHeight={"44px"}
            mt={"24px"}
            mb={"48px"}
          >
            “Explore the course catalog and syllables to identify courses that
            align with personal learning objectives. Take advantage of
            interactive tutorials we offer to reinforce your understanding and
            apply concepts in real world scenarios.”
          </Text>
          <Heading
            fontWeight={700}
            fontSize="24px"
            textColor={"#000000"}
            lineHeight={"29.26px"}
          >
            Faaruq Azeez
          </Heading>
          <Text
            fontWeight={400}
            fontSize="24px"
            textColor={"#000000"}
            lineHeight={"29.26px"}
            mb={"6px"}
            mt={"4px"}
          >
            Founder, Justwear
          </Text>
          <Text
            fontWeight={300}
            fontSize="24px"
            textColor={"#8D8D8D"}
            lineHeight={"29.26px"}
            mb={"30px"}
          >
            United Arab Emirate
          </Text>
          <div className="flex justify-between w-[159px]">
            <img src={arrow2}/>
            <img src={arrow1}/>
          </div>
        </div>
        <img src={image} />
      </div>
    </div>
  );
};

export default index;
