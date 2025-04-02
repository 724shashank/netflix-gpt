import { useState, useRef } from "react";
import Header from "/src/components/Header";
import { checkValidation } from "../utils/validation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/slices/userSlice";
import { bgLogo } from "../utils/constants";
import LoadingSpinner from "./LoadingSpinner";
const Login = () => {
 
  const [showPassword, setShowPassword] = useState(false);

  const visibility = (e) => {
    e.preventDefault();
    setShowPassword((prevData) => !prevData);
  };
  const [showSignUpForm, setshowSignUpForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const email = useRef("");
  const password = useRef("");
  const name = useRef("");
  const dispatch = useDispatch();
  

  // const [email, setEmail]=useState("");  1st way
  // const [password, setPassword]=useState("");

  // const handleEmail = (e)=>{
  //   setEmail(e)
  // }

  // const handlePassword = (p)=>{
  //   setPassword(p)
  // }

  // const [formData, setFormdata] = useState({  2nd way
  //   full_name: "",
  //   Email_or_mobile_number: "",
  //   password: "",
  // });

  // const handleForm = (e) => {
  //   const { name, value } = e.target;

  //   setFormdata((preData) => ({
  //     ...preData,
  //     [name]: value,
  //   }));

  //   if (name === "Email_or_mobile_number" || name === "password") {
  //     checkValidation(formData.Email_or_mobile_number, formData.password);
  //   }
  // };
  const [errorMessage, setErrorMessage] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    const res = checkValidation(email.current.value, password.current.value);
    setErrorMessage(res.message);

    setLoading(true);

    if (showSignUpForm) {
    
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value

      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,

          }).then(() => {
                const { uid, email, displayName } = auth;
                           
            dispatch(addUser({ uid, email, displayName }));
           
            
          }).catch((error) => {
            // An error occurred
            
          });
         
    
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode,"-",errorMessage);
        });
    } else {
    
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          setLoading(false);
      
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode,"-",errorMessage);
        });
    }
  };

  const toggleSignUp = () => {
    setshowSignUpForm(!showSignUpForm);
  };

  return (
    <>
      <Header />
      <div className="fixed inset-0">
        <img
          src={bgLogo}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-[rgba(0,0,0,0.75)] absolute p-15 w-full md:w-4/12 my-35 mx-auto right-0 left-0 text-white">
          <div className="mr-7">
            <h1 className="text-4xl font-bold p-4 ">
              {showSignUpForm ? "Sign Up" : "Sign In"}
            </h1>
            {showSignUpForm && (
              <input
                required
                type="text"
                name="full_name"
                ref={name}
                placeholder="Full Name"
                className=" p-4 m-4 w-full rounded-lg bg-[rgba(81,78,78,0.75)]"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please enter your Full Name")
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
            )}
            <input
              required
              type="text"
              placeholder="Email or mobile number"
              name="Email_or_mobile_number"
              ref={email}
              className=" p-4 m-4 w-full rounded-lg bg-[rgba(81,78,78,0.75)]"
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter valid Email-ID")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                ref={password}
                className="p-4 m-4 w-full rounded-lg bg-[rgba(81,78,78,0.75)]"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please enter valid Password")
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
              <p className="text-[#E50914] font-bold mx-5">{errorMessage}</p>
              <button
                className="absolute top-6 right-8 my-2 text-gray-500 cursor-pointer"
                onClick={visibility}
              >
                {showPassword ? (
                  <EyeIcon className="h-6 w-6 text-gray-500" />
                ) : (
                  <EyeSlashIcon className="h-6 w-6 text-gray-500" />
                )}
              </button>
            </div>

            <button
              className=" bg-[#E50914] p-4 m-4 w-full rounded-lg cursor-pointer"
              onClick={handleClick}
            >
             {loading ? <LoadingSpinner /> : showSignUpForm ? "Sign Up" : "Sign In"}
            </button>
            <p className="ml-4 cursor-pointer" onClick={toggleSignUp}>
              {showSignUpForm ? (
                <>
                  <label className="text-gray-500">Already Registered ? </label>
                  <label className="  text-white cursor-pointer">
                    Sign In Now
                  </label>
                </>
              ) : (
                <>
                  <label className="text-gray-500">New to Netflix ? </label>
                  <label className=" text-white cursor-pointer">
                    Sign Up Now
                  </label>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
