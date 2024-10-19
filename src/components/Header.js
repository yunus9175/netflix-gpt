import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout, setUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { LogoutIcon, netflixLogo, UserLogo } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userInfo = useSelector((state) => state.user.userInfo);
  const onSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(setUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(logout());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between items-center z-10">
      <img src={netflixLogo} alt="netflix logo" width={150} />
      {isLoggedIn && (
        <div className=" gap-4 hidden sm:flex">
          <img
            className="rounded-full h-10 w-12"
            src={` ${userInfo?.photoURL ? userInfo.photoURL : UserLogo}`}
            alt="userIcon"
          />
          <button
            onClick={onSignOut}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-lg"
          >
            Sign Out
          </button>
        </div>
      )}
      {isLoggedIn && (
        <div className="flex sm:hidden ">
          <img
            className="rounded-full h-10 w-12"
            src={` ${userInfo?.photoURL ? userInfo.photoURL : UserLogo}`}
            alt="userIcon"
          />

          <div className="flex-col items-center flex">
            <span className="bg-red-500 p-2 rounded-full">
              <img
                src={LogoutIcon}
                alt="logout"
                title="Sign Out"
                className="cursor-pointer "
                width={20}
                onClick={onSignOut}
              />
            </span>
            <span className="text-xs font-bold">Sign Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
