import React, { useContext, useEffect, useState } from "react"
import HomeNavbar from "@/components/HomeNavbar"
import Sidebar from "@/components/Sidebar"
import Card from "@/components/Card"
import axios from "axios"
import { GlobalContext } from "@/contexts/GlobalContext"

const home = () => {
  const url = "http://localhost:8000/api/get-all-posts"
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const resp = await axios.get(url, {})
        console.log(resp.data)
        let post = []
        resp.data.forEach((element, i) => {
          post.push(element)
        })
        setPosts(post)
      } catch (error) {
        console.log(error.message)
      }
    }
    getAllPosts()
  }, [])
  return (
    <div className="overflow-hidden">
      <div className="fixed w-screen z-50">
        <HomeNavbar />
        <Sidebar title="Mastery" />
      </div>
      <div className="absolute top-11 flex flex-col space-y-11 translate-x-52 mx-40 my-14 ">
        {posts.map((element) => {
          return (
            <div className="flex-row">
              <Card
                title={element.title}
                desc={element.description}
                author={element.username}
                date={element.date}
                img={element.profile_pic}
              />
            </div>
          )
        })}
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
