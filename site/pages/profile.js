import Navbar from "@/components/Navbar";
import Profileform from "@/components/Profileform";
import { GlobalContext } from "@/contexts/GlobalContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const profile = (props) => {
  const { token, email, updateToken, updateEmail } = useContext(GlobalContext);
  const [isLoggedin, setLog] = useState(props.cookie);
  // console.log(isLoggedin);

  // useEffect(() => {
  //   const test = async () => {
  //     const instance = axios.create({
  //       withCredentials: true,
  //     });

  //     const url = "http://localhost:8000/api/islog";
  //     const resp = await instance.post(url, {}, { Cookie: `at=${isLoggedin}` });
  //     console.log(resp);
  //   };
  //   test();
  // });

  return (
    <div>
      <Navbar />
      <h1 className="text-6xl text-center font-sans mt-3">Welcome {email}</h1>
      <p className="text-4xl text-center">Let's Test Profiling</p>
      <div>
        <Profileform />
      </div>
    </div>
  );
};

export default profile;
export async function getServerSideProps(context) {
  const get_access = async () => {
    const url = "http://localhost:8000/api/user";
    const resp1 = await axios.get(url, {});
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${resp1.data.access_token}`;
  };

  try {
    const instance = axios.create({
      withCredentials: true,
    });
    const cookie = context.req.cookies.at;
    const url = "http://localhost:8000/api/islog";
    const resp = await instance.post(
      url,
      {},
      { headers: { Cookie: `at=${cookie}` } }
    );
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
}

/* 
TODO:
1) redirect profile page to home and design home 
2)get userprofile 
3)make keys to easily access user data
*/
