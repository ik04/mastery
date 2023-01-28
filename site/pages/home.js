import Navbar from "@/components/Navbar";
import { GlobalContext } from "@/contexts/GlobalContext";
import React, { useContext } from "react";

const home = () => {
  const { token, email, updateToken, updateEmail } = useContext(GlobalContext);
  return (
    <div>
      <Navbar />
      <h1 className="text-6xl text-center font-sans mt-3">
        Lets goooo {email}
      </h1>
    </div>
  );
};

export default home;
