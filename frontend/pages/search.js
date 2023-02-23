import HomeNavbar from "@/components/HomeNavbar"
import Sidebar from "@/components/Sidebar"
import Table from "@/components/Table"
import React from "react"

const search = () => {
  return (
    <div>
      <HomeNavbar />
      <Sidebar />
      <div className="absolute left-96 my-14 w-3/4">
        <Table />
      </div>
    </div>
  )
}

export default search
