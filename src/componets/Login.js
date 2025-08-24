import { useState } from "react";
import Header from "./Header";

const Login = () => {
  // const [isSignInForm, setIsSignInForm] = useState(true);
  const [isSignInForm , setIsSignInForm] = useState(true);

  const handleButtonClick= () =>{
    //VAlidate the form
  }

  const toggleSignInForm = () =>{
     setIsSignInForm(!isSignInForm );
  }
  // const toggleSignInForm = () => {
  //   isSignInForm(!isSignInForm);
  // };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
          {/* {isSignInForm ? "Sign in" : "Sign Up"} */}
        </h1>
        {!isSignInForm && <input
          type="text" 
          placeholder="Full Name"
          className="py-2 m-2 w-full bg-gray-700"
        />}
        <input
          type="text" 
          placeholder="Email Address"
          className="py-2 m-2 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="py-2 m-2 w-full bg-gray-700"
        />
        <button className="py-4 m-4 bg-red-700 w-full rounded-lg " onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
           {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
