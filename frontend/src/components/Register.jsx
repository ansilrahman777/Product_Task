import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bg from "./../assets/bg1.jpg";


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/register/", {
        username,
        password,
        password2,
        email,
        first_name: firstName,
        last_name: lastName,
      });
      window.location.href = "/login";
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage:
          `url(${bg})`,
      }}
    >
      <header className="w-dvw absolute top-0 left-1/2 -translate-x-1/2 z-[1000] py-4">
        <div className="max-w-[120rem] text-gray-50 px-6 md:px-8 lg:px-10">
          <nav className="w-full flex flex-row items-center font-sans">
            <a className="text-gray-50" href="/">
              <svg
                className="h-8 w-8"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="94"
                  y="81"
                  width="40"
                  height="350"
                  fill="currentColor"
                ></rect>
                <rect
                  x="264"
                  y="81"
                  width="40"
                  height="350"
                  fill="currentColor"
                ></rect>
                <circle cx="199" cy="131" r="50" fill="currentColor"></circle>
                <circle cx="199" cy="246" r="50" fill="currentColor"></circle>
                <circle cx="369" cy="131" r="50" fill="currentColor"></circle>
                <circle cx="369" cy="246" r="50" fill="currentColor"></circle>
              </svg>
            </a>
            <div className="flex-1 relative hidden md:flex items-center justify-center">
            </div>
          </nav>
        </div>
      </header>
      <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
          <div className="self-start hidden lg:flex flex-col text-white">
            <h1 className="mb-3 font-bold text-5xl">Create an Account</h1>
            <p className="pr-3">
              Join us today! Fill out the form to register and get started.
            </p>
          </div>
        </div>
        <div className="flex-col flex self-center p-8 sm:max-w-md w-full z-10">
          <div className="bg-white p-10 mx-auto rounded-2xl shadow-lg w-full">
            <div className="mb-4 text-center">
              <h3 className="font-semibold text-2xl text-gray-800">Register</h3>
              <p className="text-gray-500">Create your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && <p className="text-red-500">{error}</p>}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span className="text-black">
                <p>Already have an account?</p>
                <Link to="/login" className="text-sm">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
