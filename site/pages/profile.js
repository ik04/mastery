import Navbar from "@/components/Navbar";
import Profileform from "@/components/Profileform";
import { GlobalContext } from "@/contexts/GlobalContext";
import axios from "axios";
import React, { useContext, useState } from "react";

const profile = (props) => {
  const { token, email, updateToken, updateEmail } = useContext(GlobalContext);
  const [isLoggedin, setLog] = useState();
  // console.log(isLoggedin);

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
  const instance = axios.create({
    withCredentials: true,
  });

  const cookie = context.req.cookies.at;
  const url = "http://localhost:8000/api/user";
  const resp = await instance.get(url, {});

  return {
    props: { cookie },
  };
}

{
  /*
  TODO:
  1)Make form for the backend  done
  2)Deal with the ';' ignore?
  3)better frontend
  4)deal with api bugs
  5)figure out A BETTER schema structure to store pfps done
  6)deny access to page once made
  7)try to implement getstaticprops/serversideprops
  */
}
