// import logo from "../assets/Logo_Email_Signature.svg";
import menu from "../assets/menu-04.svg";
import secondLogo from "../assets/Korrency-white-version_Test_Landing 1.svg";
function Header() {
  return (
    <div className="shadow-md top-0 left-0 relative bg-primary h-screen">
      <div className="flex items-center justify-between p-6 ">
        <img src={secondLogo} alt="" />

        <div className="block md:hidden">
          <img src={menu} alt="" />
        </div>
      </div>
      <div className="bg-white p-3 absolute w-[90%] left-[35px] rounded-tl-[20px] rounded-tr-none  rounded-b-[20px] flex flex-col gap-11 px-6 py-12">
        <ul>Company</ul>
        <ul>Resources</ul>
        <ul>Support</ul>
      </div>
    </div>
  );
}

export default Header;
