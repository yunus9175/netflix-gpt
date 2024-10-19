import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Browse from "../components/Browse";
import Login from "../components/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../slices/userSlice";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Login />} />
      <Route path="browse" element={<Browse />} />
      <Route
        path="*"
        element={
          <div className="h-96 w-full flex justify-center items-center text-2xl md:text-3xl font-bold">
            Page Not Found 404!
          </div>
        }
      />
    </>
  )
);
const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(setUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default Body;
