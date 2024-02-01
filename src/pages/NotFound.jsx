import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[80vh] text-center text-2xl">
      <div>
        <p>404</p>
        <p>Page not found, you hit a wrong url</p>
        <button onClick={() => navigate("/")} className="bg-blue-500 text-white px-4 py-1 rounded-md my-4">Home</button>
      </div>
    </div>
  );
};

export default NotFound;
