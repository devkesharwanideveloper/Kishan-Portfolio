import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoIosCode } from "react-icons/io";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-slate-900  text-white p-1 text-2xl">
      <div className="bg-gradient-to-r from-purple-900 to-blue-600 p-2 rounded-lg mr-3">
        <NavLink className="flex  items-center gap-2 ">
    
          <IoPersonOutline />
          <span className="">kishan</span>
        </NavLink>
      </div>

      <div className="space-x-10  md:space-x-10  flex ">
        <NavLink to={"/about"} className="flex items-center gap-2">
          {" "}
          <IoPersonOutline />
          <span>About</span>
        </NavLink>
        <NavLink to={"/projects"} className="flex items-center gap-2">
          {" "}
          <IoIosCode /> <span>Projects</span>
        </NavLink>
        <NavLink to={"/services"} className="flex items-center gap-2">
          {" "}
          <MdOutlineMedicalServices />
          Services
        </NavLink>
        <NavLink to={"/resume"} className="flex items-center gap-2">
          {" "}
          <FaRegFileAlt /> Resume
        </NavLink>
        <NavLink to={"/contace"} className="flex items-center gap-2">
          {" "}
          <FiPhoneCall /> <span> contact</span>{" "}
        </NavLink>
        <br />
        <br />
      </div>
    </div>
  );
}
