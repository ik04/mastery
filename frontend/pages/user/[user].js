import React, { useContext } from "react"
import HomeNavbar from "@/components/HomeNavbar"
import Profilepage from "@/components/Profilepage"
import { useRouter } from "next/router"

const userPage = () => {
  const router = useRouter()
  const { user } = router.query
  console.log(user)
  return (
    <div>
      <HomeNavbar />
      <Profilepage />
    </div>
  )
}

export default userPage
/*
TODO:
1)make pfp image cleaner
*/
