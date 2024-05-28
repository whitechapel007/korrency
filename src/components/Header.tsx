import logo from "../assets/pictures/Logo_Email_Signature.svg";
import menu from "../assets/pictures/menu-04.svg";
import secondLogo from "../assets/pictures/Korrency-white-version_Test_Landing 1.svg";
import { useState } from "react";
import DropDown from "./DropDown";
import Button from "./Button";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="shadow-md top-0 left-0 relative bg-primary md:bg-white h-screen md:h-20 mx-auto">
      <div className="flex justify-between md:grid grid-cols-3 items-center  p-6 md:max-w-[1900px] mx-auto ">
        <img src={secondLogo} alt="" className="md:hidden" />
        <img src={logo} alt="" className="hidden md:block" />

        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src={menu} alt="" />
        </div>
        <div className="gap-6 hidden md:flex text-white   justify-center text-xl font-normal leading-5 md:text-heading-text">
          <ul>Company</ul>
          <ul>Resources</ul>
          <ul>Support</ul>
        </div>

        <div className="items-center w-[80%] hidden md:flex">
          <DropDown />

          <Button variant="primary" size="md">
            Get the app
          </Button>
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
