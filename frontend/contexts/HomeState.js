import React, { useEffect, useState } from "react"
import { HomeContext } from "./HomeContext"

import axios from "axios"

const HomeState = (props) => {
  const h = "sucheuqh"
  const [userid, setUserid] = useState(0)
  const [useremail, setUseremail] = useState("")
  const [userimg, setUserimg] = useState("")
  const [username, setUsername] = useState("")
  const [userRealname, setUserRealname] = useState("")
  const [userAge, setUserAge] = useState(0)
  const [userBio, setUserBio] = useState("")
  useEffect(() => {
    const getProfileData = async () => {
      try {
        const url = "http://localhost:8000/api/profile"
        const resp = await axios.get(url, {})
        setUserid(resp.data.id)
        setUseremail(resp.data.email)
        setUserimg(resp.data.image)
        setUsername(resp.data.username)
        setUserRealname(resp.data.name)
        setUserAge(resp.data.age)
        setUserBio(resp.data.Bio)
      } catch (error) {
        console.log(error)
      }
    }
    getProfileData()
  }, [])
  // console.log(userdata)

  return (
    <HomeContext.Provider
      value={{
        userid,
        userimg,
        useremail,
        userBio,
        userAge,
        userRealname,
        username,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeState
