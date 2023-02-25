import React, { useContext, useEffect, useState } from "react"
import HomeNavbar from "@/components/HomeNavbar"
import Profilepage from "@/components/Profilepage"
import { useRouter } from "next/router"
import axios from "axios"

const userPage = () => {
  // console.log(user)
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [age, setAge] = useState("")
  const [username, setUsername] = useState("")
  const [image, setImage] = useState("")
  const router = useRouter()
  const url = "http://localhost:8000/api/result"
  const { user } = router.query

  const getResults = async () => {
    try {
      console.log(user)
      const resp = await axios.post(url, { username: user })
      console.log(resp.data)
      const destructure = []
      resp.data.forEach((element) => {
        destructure.push(element)
      })
      destructure.map((info, i) => {
        setName(info.name)
        setBio(info.Bio)
        setAge(info.age)
        setImage(info.image)
        setUsername(info.username)
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    if (!router.isReady) return
    getResults()
  }, [router.isReady])
  return (
    <div>
      <HomeNavbar />
      <Profilepage realName={name} age={age} username={username} bio={bio} />
    </div>
  )
}

export default userPage
/*
TODO:
1)make pfp image cleaner
*/
