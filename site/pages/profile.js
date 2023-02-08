import Navbar from "@/components/Navbar";
import Profileform from "@/components/Profileform";
import { GlobalContext } from "@/contexts/GlobalContext";
import React, { useContext } from "react";

const profile = () => {
  const { token, email, updateToken, updateEmail } = useContext(GlobalContext);

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
{
  /*
TODO:
1)Make form for the backend 
2)Deal with the ';'
3)better frontend
4)deal with api bugs
5)figure out A BETTER schema structure to store pfps
6)deny access to page once made
7)try to implement getstaticprops/serversideprops
*/
}
