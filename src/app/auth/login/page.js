"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  const saveUser = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { username: formData.email, password: formData.password },
    ]);
  };

  return (
    <div className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center">
      {/* Login Card */}
      <div className="w-[400px] backdrop-blur-sm bg-gray-800/60 text-white rounded-xl overflow-hidden shadow-2xl z-10">
        <div className="flex flex-col items-center py-8">
          <div className="mb-4">
            <Image
              src="/Vision3D_Logo.svg"
              alt="company Logo"
              height={100}
              width={80}
            />
          </div>
          <h1 className="text-2xl font-semibold">Login</h1>
        </div>

        <div className="px-8 pb-8">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              className={`w-full px-3 py-2 border ${
                touched.email && !formData.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && !formData.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={formData.password}
                className="w-full px-3 py-2 border rounded"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <button
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                onClick={togglePasswordVisibility}
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 2L22 22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12C1.89 14.2 3.37 16.03 5.26 17.26L12 10.5L17.73 16.23C19.63 14.99 21.1 13.16 22 11C20.27 6.61 16 4.5 12 4.5Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </button>
            </div>
            {touched.password && !formData.password && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
          </div>

          {/* Sign In Button */}
          <Link href="/design_base">
            <button
              onClick={saveUser}
              disabled={!formData.email || !formData.password}
              className={`w-full py-2 mt-6 rounded ${
                !formData.email || !formData.password
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0A1930] hover:bg-blue-700 text-white"
              }`}
            >
              Login
            </button>
          </Link>

          {/* Social Login Divider */}
          <div className="flex items-center justify-center my-4">
            <span className="text-sm text-gray-300">or continue with</span>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="bg-white p-2 rounded-md w-12 h-12 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.74 18.19 13.48 18.58 12 18.58C9.16 18.58 6.8 16.68 5.96 14.12H2.27V16.96C4.08 20.57 7.77 23 12 23Z"
                  fill="#34A853"
                />
                <path
                  d="M5.96 14.12C5.74 13.44 5.62 12.73 5.62 12C5.62 11.27 5.74 10.56 5.96 9.88V7.04H2.27C1.46 8.55 1 10.22 1 12C1 13.78 1.46 15.45 2.27 16.96L5.96 14.12Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.42C13.62 5.42 15.06 5.96 16.19 7.03L19.36 3.86C17.45 2.09 14.97 1 12 1C7.77 1 4.08 3.43 2.27 7.04L5.96 9.88C6.8 7.32 9.16 5.42 12 5.42Z"
                  fill="#EA4335"
                />
              </svg>
            </button>
            <button className="bg-white p-2 rounded-md w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
            </button>
            <button className="bg-white p-2 rounded-md w-12 h-12 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6.75c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  fill="#000000"
                />
              </svg>
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center mt-6 text-sm">
            <span className="text-gray-300">Don't have an account yet? </span>
            <Link
              href="/auth/signup"
              className="text-blue-300 hover:text-blue-200"
            >
              Register for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
