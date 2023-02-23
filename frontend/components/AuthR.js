import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
const AuthR = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [email, setemail] = useState("");
  const url = "http://127.0.0.1:8000/api/register";
  useEffect(() => {
    console.clear();
  });
  const login = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        email: email,
        password: password,
        password_confirmation: cpassword,
      });
      console.log(resp);
      router.push("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div className="text-center mt-24">
        <div className="flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-black"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 className="text-4xl tracking-tight">Register your account</h2>
        <span className="text-sm">
          or{" "}
          <Link href="/" className="text-slate-600">
            log into your account
          </Link>
        </span>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
          onSubmit={login}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                email address
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="CPassword"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                name="CPassword"
                value={cpassword}
                onChange={(e) => setcPassword(e.target.value)}
                required
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <button className="appearance-none block w-full bg-slate-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight transition hover:bg-black focus:outline-none focus:bg-white focus:border-gray-500">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthR;
