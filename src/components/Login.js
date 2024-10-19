import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validation";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    console.log({ email, password, name });

    if (!isSignIn) {
      try {
        // Call your server-side validation function here
        validate(email, password);
        // If validation passes, handle the login logic
        // For example, you can use the email and password to authenticate the user
      } catch (error) {
        setError(error.message);
      }
    } else if (name.length > 0) {
      try {
        // Call your server-side validation function here
        validate(email, password);
        // If validation passes, handle the login logic
        // For example, you can use the email and password to authenticate the user
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Name is required");
    }
  };
  const cleanState = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    nameRef.current.value = "";
    setError("");
  };
  useEffect(() => {
    if (isSignIn) {
      cleanState();
    } else {
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  }, [isSignIn]);

  return (
    <>
      <Header />
      <div className="bg-cover block h-screen min-h-screen overflow-hidden absolute w-full -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
          alt="bg-img"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 bg-black bg-opacity-75 p-8 rounded w-full max-w-md"
        >
          <h1 className="text-white text-3xl font-bold mb-2">
            {!isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {isSignIn && (
            <>
              <input
                ref={nameRef}
                type="text"
                placeholder="Full Name"
                className="p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </>
          )}
          <input
            type="text"
            ref={emailRef}
            placeholder="Email"
            className="p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            className="p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition duration-300">
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <p
            className="text-white font-bold cursor-pointer"
            onClick={() => {
              setIsSignIn((prev) => !prev);
            }}
          >
            {isSignIn
              ? "Already registered? Sign In Now"
              : " New to Netflix? Sign Up Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
