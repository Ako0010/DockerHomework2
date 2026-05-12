import React, { useState } from "react";
import authService from "../services/api";

const Login = () => {
  const [form, setForm] = useState({
    UserNameOrEmail: "",
    Password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleLogin = async () => {
  try {

    const data = await authService.login(form);

    if (data.error || data.message === "Invalid credentials") {
      alert("Email or password is incorrect");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data.data));

    window.location.href = "/welcome";
  } catch (error) {
    console.log("Login error:", error);
    alert("Login failed");
  }
};

  return (
    <div className="bg-white min-h-screen">
      <div className="min-h-screen flex items-start justify-center bg-white">
        <div className="w-full max-w-3xl px-16 pt-24">
          <h1 className="text-center text-4xl sen-bold text-gray-800">
            Login
          </h1>

          <div className="mt-24 space-y-6">
            <input
              type="text"
              name="UserNameOrEmail"
              placeholder="Enter username or email"
              value={form.UserNameOrEmail}
              onChange={handleChange}
              className="w-full h-18 inter border border-gray-300 px-6 outline-none text-[#232536] placeholder:text-[#232536] focus:border-gray-400"
            />

            <input
              type="password"
              name="Password"
              placeholder="Enter your password"
              value={form.Password}
              onChange={handleChange}
              className="w-full h-18 inter border border-gray-300 px-6 outline-none text-[#232536] placeholder:text-[#232536] focus:border-gray-400"
            />

            <a
              className="text-[#4B6BFB] cursor-pointer"
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              Don’t have an account?
            </a>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full h-18 bg-[#FFD050] text-2xl text-gray-900 sen-bold border border-gray-300 cursor-pointer mt-6"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;