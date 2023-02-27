import { HomeContext } from "@/contexts/HomeContext"
import axios from "axios"
import React, { useContext, useState } from "react"

const Createform = () => {
  //todo: learn to use state array
  const { username } = useContext(HomeContext)
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [error, setError] = useState()
  const url = "http://localhost:8000/api/create-post"
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = axios.post(url, {
        title: title,
        description: desc,
        username: username,
      })
      if ((await resp).status == 201) {
        location.href = "/home"
      }
    } catch (error) {
      console.log(error.message)
      // console.log(error.errors)
      setError("please enter both title and description")
    }
  }
  return (
    <div>
      <div className="z-20 min-h-fit bg-white my-32 translate-x-24 scale-125 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Create Post</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p className="text-red-400">{error}</p>
                  <form onSubmit={handleSubmit}>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="text"
                        className="peer placeholder-transparent mb-9 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Title
                      </label>
                    </div>
                    <div className="relative">
                      <textarea
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="text"
                        className="peer placeholder-transparent whitespace-nowrap  h-30 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="description"
                        onChange={(e) => setDesc(e.target.value)}
                      />
                      <label
                        htmlFor="password"
                        className="absolute mb-3 left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Description
                      </label>
                    </div>
                    <div className="relative">
                      <button className="bg-black text-white rounded-md px-2 py-1 mt-10 ">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createform
