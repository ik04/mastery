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
      <p>{userRealname}</p>
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
