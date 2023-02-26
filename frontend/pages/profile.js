import Navbar from "@/components/Navbar"
import Profileform from "@/components/Profileform"
import { GlobalContext } from "@/contexts/GlobalContext"
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"

const profile = (props) => {
  const { token, email, updateToken, updateEmail } = useContext(GlobalContext)
  return (
    <div>
      <Navbar />
      <h1 className="text-6xl text-center font-sans mt-3">Welcome {email}</h1>
      <p className="text-4xl text-center">Let's Test Profiling</p>
      <div>
        <Profileform />
      </div>
    </div>
  )
}

export default profile
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

  try {
    const url = "http://localhost:8000/api/profileData"
    const resp = await axios.post(url, { email: email })
    if (resp || resp.data.profile.profile_created == 1) {
      return {
        redirect: {
          permanent: false,
          destination: "/home",
        },
      }
    }
  } catch (error) {}

  return { props: {} }
}

/* 
TODO:
-validate username to remove spaces and possible sql injections
*/
