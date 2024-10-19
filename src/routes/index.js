import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Browse from "../components/Browse";
import Login from "../components/Login";
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
