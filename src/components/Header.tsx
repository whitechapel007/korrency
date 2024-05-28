import logo from "../assets/Logo_Email_Signature.svg";
import { CiMenuFries } from "react-icons/ci";

function Header() {
  return (
    <div className="flex items-center justify-between p-6">
      <img src={logo} alt="" />

      <CiMenuFries size={30} />
    </div>
  );
}

export default Header;
