import React from "react";
import Button from "../Shared/Button";
import logo from "../../assets/logo/Brilliant_Logo.png";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2 items-center">
            <img className="w-8" src={logo} alt="" />
          <h1 className="uppercase text-xl sm:text-2xl">Brilliant</h1>
          </div>
          <div className="text-sm font-semibold">
            <Button textColor="text-black" bgColor="bg-gray-100" text="Log In" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
