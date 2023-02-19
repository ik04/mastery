import React, { useContext, useEffect } from "react"
import { HomeContext } from "@/contexts/HomeContext"
import HomeNavbar from "@/components/HomeNavbar"

const home = () => {
  const {
    userid,
    userimg,
    useremail,
    userBio,
    userAge,
    userRealname,
    username,
  } = useContext(HomeContext)
  return (
    <div>
      <HomeNavbar />
      <div className="sidebar flex flex-col bg-gray-200 w-72 h-screen space-y-28 fixed">
        <h1 className="font-mono mx-20  text-black h-14 p-1 w-14 mt-4  text-3xl cursor-pointer">
          Mastery
        </h1>
        <button className="bg-black hover:bg-white hover:text-black transition text-white font-bold mt-20 py-5 px-4 mx-5 rounded-full">
          Home
        </button>
        <button className="bg-black hover:bg-white hover:text-black transition text-white font-bold py-5 px-4 mx-5 rounded-full">
          Search
        </button>
        <button className="bg-black hover:bg-white hover:text-black transition text-white font-bold py-5 px-4 mx-5 rounded-full">
          Create
        </button>
        <button className="bg-black hover:bg-white hover:text-black transition text-white font-bold py-5 px-4 mx-5 rounded-full">
          Settings
        </button>
      </div>
    </div>
  )
}

export default home

/*
TODO:

1)design front end   working
2)run the profile data route from this page by getting email from context done
3)render elements dynamically done
4)start working on big boy features
5)work on update profile features (put request)
6)improve frontend
*/
