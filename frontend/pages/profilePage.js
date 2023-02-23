import React, { useContext } from "react"
import HomeNavbar from "@/components/HomeNavbar"
import { HomeContext } from "@/contexts/HomeContext"
import Profilepage from "@/components/Profilepage"

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
      <Profilepage realName={userRealname} age={userAge} username={username} />
    </div>
  )
}

export default profilePage
/*
TODO:
1)make pfp image cleaner
*/
