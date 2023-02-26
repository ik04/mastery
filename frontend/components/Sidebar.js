import Link from "next/link"
import React from "react"

const Sidebar = (props) => {
  return (
    <div className="sidebar z-40 flex flex-col bg-gray-200 w-72 h-screen space-y-28 fixed ">
      <h1 className="font-mono mx-20  text-black h-14 p-1 w-14 mt-4  text-3xl cursor-pointer">
        {props.title}
      </h1>
      <Link
        className="bg-black hover:bg-white hover:text-black transition text-white font-bold mt-10 py-5 px-4 mx-5 rounded-full text-center"
        href={"/home"}
      >
        Home
      </Link>
      <Link
        className="bg-black hover:bg-white hover:text-black transition text-white font-bold py-5 px-4 mx-5 rounded-full text-center"
        href={"/search"}
      >
        Search
      </Link>
      <Link
        className="bg-black hover:bg-white hover:text-black transition text-white font-bold py-5 px-4 mx-5 rounded-full text-center"
        href={"/create"}
      >
        Create
      </Link>

      <Link
        className="bg-black hover:bg-white hover:text-black transition text-white font-bold py-5 px-4 mx-5 rounded-full text-center"
        href={"/home"}
      >
        Messaging
      </Link>
    </div>
  )
}

export default Sidebar
