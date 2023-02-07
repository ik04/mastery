import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
const GlobalState = (props) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const getdata = async () => {
      try {
        const url = "http://localhost:8000/api/user";
        const resp = await axios.get(url, {});
        console.log(resp);
        setEmail(resp.data.email);
        setToken(resp.data.access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${resp.data.access_token}`;
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        token,
        updateToken: (value) => {
          setToken(value);
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
