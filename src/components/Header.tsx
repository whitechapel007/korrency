import logo from "../assets/pictures/Logo_Email_Signature.svg";
import menu from "../assets/pictures/menu-04.svg";
import secondLogo from "../assets/pictures/Korrency-white-version_Test_Landing 1.svg";
import { useState } from "react";
import DropDown from "./DropDown";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="shadow-md top-0 left-0 relative bg-primary md:bg-white h-screen md:h-20">
      <div className="grid grid-cols-3 items-center  p-6 ">
        <img src={secondLogo} alt="" className="md:hidden" />
        <img src={logo} alt="" className="md:block" />

        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src={menu} alt="" />
        </div>
        <div className="flex gap-4 text-white  md:text-primary">
          <ul>Company</ul>
          <ul>Resources</ul>
          <ul>Support</ul>
        </div>

        <div>
          <DropDown />
        </div>
      </div>
      <div
        className={`bg-white p-3 absolute w-[90%] left-[35px] rounded-tl-[20px] rounded-tr-none  rounded-b-[20px] flex flex-col gap-11 px-6 py-12 text-primary text-base font-bold leading-8 font-gilroy-bold transition-all duration-500 ease-in ${
          openMenu ? "top-20 opacity-100" : "top-[-450px] opacity-0"
        }`}
      >
        <ul>Company</ul>
        <ul>Resources</ul>
        <ul>Support</ul>
      </div>
    </div>
  );
}

export default Header;
