import Heading from "components/Heading";
import Text from "components/Text";

const index = () => {
  return (
    <div className="py-[53px] flex justify-center">
      <div>
        <Heading
          fontWeight={700}
          fontSize="36px"
          textColor={"#000000"}
          lineHeight={"43.88px"}
        >
          Email capture form for updates and promotions
        </Heading>
        <Text
          fontWeight={400}
          fontSize="24px"
          textColor={"#000000"}
          lineHeight={"29.26px"}
          mt={"24px"}
          mb={"48px"}
        >
          Subscribe to our newsletters and stay up to date on features and
          releases.
        </Text>
        <div className="flex items-center border-[2px] border-[#000000] rounded-[50px] overflow-hidden w-[590px] mx-auto py-[6.5px] pl-[40px] pr-[7px] rounded-[50px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border-none focus:outline-none montserrat"
          />
          <button className="bg-[#031428] text-white px-[50px] py-[8px] rounded-[50px] font-[700]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
