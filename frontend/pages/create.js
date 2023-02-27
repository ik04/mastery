import Createform from "@/components/Createform"
import HomeNavbar from "@/components/HomeNavbar"
import Sidebar from "@/components/Sidebar"
import React from "react"

const create = () => {
  return (
    <div className="overflow-x-hidden">
      <HomeNavbar />
      <Sidebar title="Create" />
      <div className="relative ">
        <Createform />
      </div>
    </div>
  )
}

export default create
