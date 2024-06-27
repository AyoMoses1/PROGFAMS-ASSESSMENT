import { FaTrashAlt } from "react-icons/fa";

const index = () => {
  const tasks = [
    { id: 1, task: "I will wake up at 8 in the morning" },
    { id: 2, task: "I will practice html for 1 hour" },
    { id: 3, task: "I will give time for 2 hours css" },
    { id: 4, task: "Then I will have breakfast" },
  ];
  return (
    <div className="bg-[#345FC2] py-[100px]">
      <div className="bg-white rounded-md p-[40px] max-w-[500px] mx-auto">
        <div className="flex items-center overflow-hidden gap-[20px] mb-[80px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border-2 focus:border-[#556EAE] font-[500] focus:outline-none montserrat montserrat"
          />
          <button className="bg-[#3C6AE4] text-white px-[20px] py-[8px] rounded-[4px] font-[700]">
            Add
          </button>
        </div>
        <div className="flex flex-col gap-[8px]">
          {tasks.map((item) => (
            <div className="flex justify-between items-center px-[8px] py-[4px] border-[1px] border-[#B7C2C4] rounded-[4px] bg-[#CBE0E5]">
              <p>{item.task}</p>
              <button className="bg-[#1C1A9B] text-white px-[14px] py-[12px] rounded-[4px] font-[700]">
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
