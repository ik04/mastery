import Navbar from "@/components/Navbar";
import { GlobalContext } from "@/contexts/GlobalContext";
import React, { useContext } from "react";

const profile = () => {
  const { token, email, updateToken, updateEmail } = useContext(GlobalContext);
  return (
    <div>
      <Navbar />
      <h1 className="text-6xl text-center font-sans mt-3">Welcome {email}</h1>
      <p className="text-4xl">Let's Test Profiling</p>
    </div>
  );
};

export default profile;
