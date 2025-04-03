import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../public/Assets/Netflix_Logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/redux/slices/userSlice";
import { avatar } from "../utils/constants";
import { toggleGptSearchView } from "../utils/redux/slices/gptSlice";

const Header = () => {
  const loginStatus = useSelector((store) => store.userData);
  const status = useSelector((store)=>store.gpt.showGptSearch);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearch =()=>{
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="w-screen absolute  bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row">
        <img className="w-50 mx-auto md:mx-0" src={logo} alt="logo" />

        <div className="flex justify-center md:flex md:p-5 md:px-1">
          {loginStatus?.uid && (
            <>
              
              <button
                className="cursor-pointer bg-red-700 text-white w-25 h-10 rounded-lg ml-5"
                onClick={handleGptSearch}
              >
                {status?"Homepage":"GPT Search"}
                
              </button>
              <button
                className="cursor-pointer bg-red-700 text-white w-20 h-10 rounded-lg ml-5"
                onClick={handleSignOut}
              >
                Sign out
              </button>
              <img className="w-12 h-12 mx-5 " src={avatar} alt="profile" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
