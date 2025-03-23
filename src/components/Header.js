import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../public/Assets/Netflix_Logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { addUser,removeUser } from "../utils/redux/slices/UserSlice";



const Header = () => {
  const loginStatus = useSelector((store) => store.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    
signOut(auth).then(() => {
  // Sign-out successful.

}).catch((error) => {
  // An error happened.

});
   
 
  };


  useEffect(() => {
    onAuthStateChanged (auth, (user) => {
  

        if (user) {
            const { uid, email, displayName } = user;
           
            dispatch(addUser({ uid, email, displayName }));
            navigate("/browse");
        } else {
      
            dispatch(removeUser());
            navigate("/");
        }
    });
}, []);


  
 
  return (
    <>
      
      <div className="w-screen absolute  bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-50" src={logo} alt="logo" />
        
     

      <div className="flex p-5 px-1">
        {loginStatus?.uid && (
          <>
            
            <img className="w-12 h-12 "
              src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdEyUfiGKB_IE32uWZW3KcuE4Vk5kEFKQM1HrVqjN4jNv-Robrvl9ctyTBXJkMcZBfIjTnqQDRqsf7TQTr_RwCEwgwqxhME.png?r=d47"
              alt="profile"
            />
            <button className="cursor-pointer bg-red-700 text-white w-20 h-10 rounded-lg m-2" onClick={handleSignOut}>
              Sign out
            </button>
          </>
        )}
      </div>
      </div>
    </>
  );
};

export default Header;
