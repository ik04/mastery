import React, { useContext } from "react"
import HomeNavbar from "@/components/HomeNavbar"

import Profilepage from "@/components/Profilepage"

const profilePage = () => {
  return (
    <div>
      <HomeNavbar />
      <Profilepage />
    </div>
  )
}

export default profilePage
/*
TODO:
1)make pfp image cleaner
*/
