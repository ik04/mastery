import React, { useContext } from "react"
import axios from "axios"
import Link from "next/link"
import { GlobalContext } from "@/contexts/GlobalContext"
import { HomeContext } from "@/contexts/HomeContext"

const HomeNavbar = () => {
  const { Token, updateToken } = useContext(GlobalContext)
  const { userimg, username } = useContext(HomeContext)
  const handleLogout = async () => {
    try {
      console.log(Token)
      const url = "http://localhost:8000/api/logout"
      const resp = await axios.post(url)
      setTimeout(() => {
        location.href = "/"
      }, 2000)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className="flex bg-black justify-between sticky">
      <div className="block">
        <Link href={"/profilePage"}>
          <div className="logo mx-3 flex space-x-2 justify-center align-middle">
            <img
              className="mx-5 my-5 w-14 h-14 rounded-full  border-gray-500 border-3 shadow-sm"
              src={"http://localhost:8000" + userimg}
            />
            <h2 className="font-extralight  text-white h-14 p-1 w-14 mt-6  text-3xl cursor-pointer">
              {username}
            </h2>
          </div>
        </Link>
      </div>

      <button
        className="cursor-pointer text-white w-36  p-1  bg-zinc-800  transition duration-300 hover:text-black hover:bg-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default HomeNavbar
