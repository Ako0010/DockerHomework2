import React, { useState } from "react";
import {authService} from "../services/api.js";

const Register = () => {
  const [form, setForm] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    console.log(form);
  try {
    const response = await authService.register(form);

    console.log("Register success:", response);

    window.location.href = "/";
  } catch (error) {
    console.log("Register error:", error);
    alert("Register failed");
  }
};

  return (
    <div className="bg-white min-h-screen">
      <div className="min-h-screen flex items-start justify-center">
        <div className="w-full max-w-3xl px-16 pt-24">
          <h1 className="text-center text-4xl sen-bold text-gray-800">
            Register
          </h1>

          <div className="mt-24 space-y-6">
            <input
              type="text"
              name="UserName"
              value={form.UserName}
              onChange={handleChange}
              placeholder="Enter your user name"
              className="w-full h-18 inter border border-gray-300 px-6 bg-white text-[#232536] placeholder:text-[#232536] outline-none focus:border-gray-400"
            />

            <input
              type="email"
              name="Email"
              value={form.Email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full h-18 inter border border-gray-300 px-6 bg-white text-[#232536] placeholder:text-[#232536] outline-none focus:border-gray-400"
            />

            <input
              type="password"
              name="Password"
              value={form.Password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full h-18 inter border border-gray-300 px-6 bg-white text-[#232536] placeholder:text-[#232536] outline-none focus:border-gray-400"
            />

            <input
              type="password"
              name="ConfirmPassword"
              value={form.ConfirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full h-18 inter border border-gray-300 px-6 bg-white text-[#232536] placeholder:text-[#232536] outline-none focus:border-gray-400"
            />

            <a
              className="text-[#4B6BFB] cursor-pointer"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Already have an account?
            </a>

            <button
              type="button"
              onClick={handleRegister}
              className="w-full h-18 bg-[#FFD050] text-gray-900 text-2xl sen-bold border border-gray-300 cursor-pointer mt-6"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;