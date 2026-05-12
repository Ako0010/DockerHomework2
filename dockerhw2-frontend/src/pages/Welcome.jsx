import React from "react";

const Welcome = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br bg-gray-300">
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center w-87.5">
        <h1 className="text-3xl font-bold mb-4">
          Welcome
        </h1>

        <p className="text-lg mb-6">
          Hello,{" "}
          <span className="text-indigo-600 font-semibold">
            {user?.username|| "User"}
          </span>
        </p>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
          className="w-full bg-red-500 text-white py-3 rounded-xl cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Welcome;