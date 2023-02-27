import React, { useContext, useEffect } from "react"
import HomeNavbar from "@/components/HomeNavbar"
import Sidebar from "@/components/Sidebar"
import Card from "@/components/Card"
import axios from "axios"

const home = () => {
  return (
    <div>
      <HomeNavbar />
      <Sidebar title="Mastery" />
      <div className="absolute right-56 my-14 ">
        <Card />
      </div>
    </div>
  )
}

export default home
export async function getServerSideProps(context) {
  const url = "http://localhost:8000/api/user"
  const cookie = context.req.cookies.at
  const resp1 = await axios.get(url, { headers: { Cookie: `at=${cookie}` } })
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${resp1.data.access_token}`
  const email = resp1.data.email

  try {
    const instance = axios.create({
      withCredentials: true,
    })
    const url = "http://localhost:8000/api/isLog"
    const resp = await instance.post(url, {})
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    }
  }
  return { props: {} }
}

/*
TODO:

1)design front end   working
2)run the profile data route from this page by getting email from context done
3)render elements dynamically done
4)start working on big boy features
5)work on update profile features (put request)
6)improve frontend
*/
