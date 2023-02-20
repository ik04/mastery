import React, { useContext } from "react"
import HomeNavbar from "@/components/HomeNavbar"
import { HomeContext } from "@/contexts/HomeContext"

const profilePage = () => {
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
    </div>
  )
}

export default profilePage
