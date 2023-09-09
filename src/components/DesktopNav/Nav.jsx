import { useState } from "react";
import Dropdown from "../DesktopNav/Dropdown";
import logo from "../../assets/Frame.svg";
import Open from "./Open";
import { CaretDown } from "phosphor-react";
import Learn from "./Learn";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const clickBtn = () => {
    setOpen(!open);
  };

  const [isOpen, setIsOpen] = useState(false);
  const clickBtn1 = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" hidden xl:flex items-center justify-between py-5 font-Roboto text-primary-blue font-bold  container m-auto">
      <div className="flex items-center justify-center gap-4">
        <img src={logo} alt="paystack-logo" />
        <p
          onClick={clickBtn}
          className="relative flex items-center gap-1 cursor-pointer hover:text-sky-500"
        >
          Why paystack <CaretDown weight="fill" />
        </p>
        {open && <Open />}
        <p className="cursor-pointer hover:text-sky-500">Customers</p>
        <p className="cursor-pointer hover:text-sky-500">Pricing</p>
        <p
          onClick={clickBtn1}
          className="relative flex items-center gap-1 cursor-pointer hover:text-sky-500"
        >
          Learn <CaretDown weight="fill" />
        </p>
        {isOpen && <Learn />}
      </div>

      <div className="flex items-center justify-center gap-4">
        <Dropdown
          label="Developers"
          items={["Overview", "Intergration", "Status pay", "Documentation"]}
        />
        <Dropdown
          label="Support"
          items={["Quick Help", "Contact Us", "Why i was debited"]}
        />
        <p className="hover:text-sky-500 cursor-pointer">Login</p>

        <p className="bg-light-green p-2 rounded-md text-white cursor-pointer ">
          Create Free Account
        </p>
        <Dropdown
          label="NIG"
          items={["Ghana", "Kenya", "South Africa", "Others"]}
        />
      </div>
    </div>
  );
};

export default Nav;
