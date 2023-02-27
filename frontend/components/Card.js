import axios from "axios"
import React, { useEffect, useState } from "react"

const Card = (props) => {
  //! remove this and shift pfp to backend
  const [image, setImage] = useState()
  // useEffect(() => {
  //   const url = "http://localhost:8000/api/result"
  //   const getAvatar = async () => {
  //     const resp = await axios.post(url, { username: props.author })
  //     const destructure = []
  //     resp.data.forEach((element) => {
  //       destructure.push(element)
  //     })
  //     destructure.map((info, i) => {
  //       setImage(info.image)
  //     })
  //   }
  //   getAvatar()
  // }, [])
  return (
    <div className=" max-w-sm w-full lg:max-w-full lg:flex static ">
      {/* <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ "background-image": "url('/img/card-left.jpg')" }}
        title="Woman holding a mug"
      ></div> */}
      <div className="border-r border-b border-l border-gray-400 lg:border-l-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {props.title}
          </div>
          <p className="text-gray-700 text-base">{props.desc.substr(0, 50)}</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={"http://localhost:8000" + props.img}
            alt="Avatar "
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{props.author}</p>
            <p className="text-gray-600">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
