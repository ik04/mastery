import React from "react"

const Sidebar = () => {
  return (
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
  )
}

export default Sidebar
