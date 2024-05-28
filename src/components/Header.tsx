// import logo from "../assets/Logo_Email_Signature.svg";
import menu from "../assets/pictures/menu-04.svg";
import secondLogo from "../assets/pictures/Korrency-white-version_Test_Landing 1.svg";
import { useState } from "react";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="shadow-md top-0 left-0 relative bg-primary h-screen">
      <div className="flex items-center justify-between p-6 ">
        <img src={secondLogo} alt="" />

        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src={menu} alt="" />
        </div>
      </div>
      <div
        className={`bg-white p-3 absolute w-[90%] left-[35px] rounded-tl-[20px] rounded-tr-none  rounded-b-[20px] flex flex-col gap-11 px-6 py-12 text-primary text-base font-bold leading-8 font-gilroy-bold transition-all duration-1000 ease-in ${
          openMenu ? "top-[-200px] h-0" : "top-auto"
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
