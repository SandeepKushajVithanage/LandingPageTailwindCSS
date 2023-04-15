import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="flex justify-between items-center h-24 max-w-screen-lg text-white mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <NavItem active>Home</NavItem>
        <NavItem>Company</NavItem>
        <NavItem>Resources</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </ul>
      <div className="cursor-pointer block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          "block md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 " +
          (nav ? "left-0" : "left-[-100%]")
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

interface NavItemProps {
  children: React.ReactNode;
  active?: boolean;
}
const NavItem = ({ children, active }: NavItemProps) => (
  <li className={"group relative cursor-pointer p-4"}>
    {children}
    <div
      className={
        (active ? "w-full" : "group-hover:w-full") +
        " absolute bottom-0 left-0 h-1 bg-[#00df9a] content-none rounded-full transition-all duration-300"
      }
    ></div>
  </li>
);
