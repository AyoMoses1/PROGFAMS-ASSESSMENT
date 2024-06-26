import Logo from "../../../src/assets/icons/Logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-primary h-[10vh] flex gap-[400px] items-center px-[108px]">
      <img src={Logo} alt="Logo" className="" />

      <div>
        <ul className="flex gap-7 cursor-pointer font-medium text-base text-white">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/bootcamp"> Bootcamp</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
