import { useState } from "react";
import Header from "/src/components/Header";
const Login = () => {

    const [showSignUpForm, setshowSignUpForm]=useState(false);

    const toggleSignUp =()=>{
        setshowSignUpForm(!showSignUpForm)
    }

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_small.jpg"
          alt="logo"
        />
      </div>
      <form className="bg-[rgba(0,0,0,0.75)] absolute p-15 w-4/12 my-35 mx-auto right-0 left-0 text-white">
      <div className="mr-7">
        <h1 className="text-4xl font-bold p-4 ">{showSignUpForm?"Sign Up":"Sign In"}</h1>
        { showSignUpForm && <input
          type="text"
          placeholder="Full Name"
          className=" p-4 m-4 w-full rounded-lg bg-[rgba(81,78,78,0.75)]"
        />}
        <input
          type="text"
          placeholder="Email or mobile number"
          className=" p-4 m-4 w-full rounded-lg bg-[rgba(81,78,78,0.75)]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full rounded-lg bg-[rgba(81,78,78,0.75)]"
        />
        <button
          style={{ backgroundColor: "#E50914" }}
          className=" p-4 m-4 w-full rounded-lg cursor-pointer"
          
        >
          Sign In
        </button>
        <p className="ml-4 cursor-pointer" onClick={toggleSignUp} >{showSignUpForm?"Already Registered ? Sign In Now":"New to Netflix ? Sign Up Now"}</p>
        </div>
      </form>
    </>
  );
};

export default Login;
