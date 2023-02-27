import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "@/contexts/GlobalContext"
import axios from "axios"

const Profileform = () => {
  const { email, isprofile, updateProfile, isLoggedin, updateLog } =
    useContext(GlobalContext)
  const [image, setImage] = useState("")
  const [age, setAge] = useState()
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")

  const create_profile = async (e) => {
    e.preventDefault()
    const url = "http://localhost:8000/api/profile"
    try {
      const formdata = new FormData()
      formdata.append("email", email)
      formdata.append("name", name)
      formdata.append("age", age)
      formdata.append("username", username)
      formdata.append("Bio", bio)
      formdata.append("image", image)

      const resp = await axios.post(url, formdata)
      console.log(resp)
      setTimeout(() => {
        location.href = "/home"
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="relative  mt-20 mx-28 translate-x-64">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={create_profile}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company_website"
                        onChange={(e) => setName(e.target.value)}
                        id="company_website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>

                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium mt-10 text-gray-700"
                    >
                      Age
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        onChange={(e) => setAge(e.target.value)}
                        name="company_website"
                        id="company_website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium mt-10 text-gray-700"
                    >
                      Username
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        name="company_website"
                        id="company_website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bio
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      onChange={(e) => setBio(e.target.value)}
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Picture
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <input
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profileform
/*
TODO:
1) bio null issue done
2) better validation  
3) cleanup code 

*/
