import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const Browse = () => {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <div>
      <Header />
      <div className="px-4 pt-24">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Welcome, {user?.displayName ? user.displayName : "Unknown User"}
        </h1>
      </div>
    </div>
  );
};

export default Browse;
