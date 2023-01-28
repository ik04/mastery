import React, { useContext } from "react";
import axios from "axios";
import Link from "next/link";

const Navbar = () => {
  //   const router = useRouter();
  //   const { Token, updateToken } = useContext(GlobalContext);
  //   // console.log(`Bearer ${Token}`);
  //   const handleLogout = async () => {
  //     try {
  //       console.log(Token);
  //       const url = "http://localhost:8000/api/logout";
  //       // console.log("god help me");
  //       // console.log(Token);
  //       // post(url, {}, { headers: { Authorization: `Bearer ${Token}` } });
  //       const resp = await axios.post(url);
  //       console.log(resp);
  //       console.log("it runs");
  //       setTimeout(() => {
  //         location.href = "/";
  //       }, 2000);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   };

  return (
    <div className="flex bg-black    justify-between">
      {/* <Image src={Logo} className="h-14 p-1 w-14 mx-3" alt="CyberCell" /> */}
      <div className="logo bg-zinc-800 w-40">
        <h2 className="font-extralight  text-white h-14 p-1 w-14 mx-5 text-2xl">
          Mastery
        </h2>
      </div>
      <ul className="flex  text-white  space-x-40 my-4 px-10">
        <Link href={"/home"}>
          <li className="cursor-pointer  transition duration-300 hover:text-emerald-300 ">
            Home
          </li>
        </Link>
        <Link href={"/home"}>
          <li className="cursor-pointer  transition duration-300 hover:text-emerald-300 ">
            About
          </li>
        </Link>
        <Link href={"/home"}>
          <li className="cursor-pointer  transition duration-300 hover:text-emerald-300 ">
            Service
          </li>
        </Link>
        <Link href={"/home"}>
          <li className="cursor-pointer  transition duration-300 hover:text-emerald-300 ">
            Contact
          </li>
        </Link>
      </ul>

      <button className="cursor-pointer log text-white w-20  p-1  bg-zinc-800  transition duration-300 hover:text-black hover:bg-white">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
