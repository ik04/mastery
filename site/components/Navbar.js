import React, { useContext } from "react";
import axios from "axios";
import Link from "next/link";
import { GlobalContext } from "@/contexts/GlobalContext";

const Navbar = () => {
  const { Token, updateToken } = useContext(GlobalContext);
  const handleLogout = async () => {
    try {
      console.log(Token);
      const url = "http://localhost:8000/api/logout";
      const resp = await axios.post(url);
      console.log(resp);
      console.log("it runs");
      setTimeout(() => {
        location.href = "/";
      }, 2000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="flex bg-black    justify-between">
      <div className="logo mx-3">
        <h2 className="font-extralight  text-white h-14 p-1 w-14  text-4xl">
          Mastery
        </h2>
      </div>

      <button
        className="cursor-pointer log text-white w-20  p-1  bg-zinc-800  transition duration-300 hover:text-black hover:bg-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
