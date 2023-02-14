import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
const GlobalState = (props) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [isprofile, setProfile] = useState(false);
  const [isLoggedin, setLog] = useState(false);
  const log = (value) => {
    console.log(value);
  };
  useEffect(() => {
    const getUser = async () => {
      try {
        const url = "http://localhost:8000/api/user";
        const resp = await axios.get(url, {});
        setEmail(resp.data.email);
        setToken(resp.data.access_token);
        // console.log(token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${resp.data.access_token}`;
      } catch (error) {
        console.log("an error occured");
        console.log(error);
      }
    };
    getUser();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        token,
        updateToken: (value) => {
          setToken(value);
        },
        isprofile,
        updateProfile: (value) => {
          setProfile(value);
        },
        email,
        updateEmail: (value) => {
          setEmail;
        },
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
