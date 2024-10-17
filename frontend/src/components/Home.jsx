import { Link } from "react-router-dom";
import bg from "./../assets/bg1.jpg";

const Home = () => {
  return (
    <>
      <header className="w-dvw absolute top-0 left-1/2 -translate-x-1/2 z-[1000] py-4">
        <div className="max-w-[120rem] text-gray-50 px-6 md:px-8 lg:px-10">
          <nav className="w-full flex flex-row items-center font-sans">
            {/* Link to Home */}
            <Link to="/" className="text-gray-50">
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
            </Link>

            {/* Products Navigation */}
            <div className="flex-1 relative hidden md:flex items-center justify-center">
              <ul className="mx-auto inline-flex gap-6 text-sm font-light">
                <li>
                  {/* Link to Product Page */}
                  <Link
                    to="/products"
                    className="font-bold relative after:h-px after:content-[''] after:w-full after:absolute after:top-full after:bg-accent-500 after:left-0 after:translate-y-1"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Login and Register Links */}
            <ul className="absolute right-0">
              <li className="relative">
                <div className="hidden md:flex items-center justify-center">
                  <Link
                    to="/login"
                    className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out"
                  >
                    Register
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="h-dvh w-dvw max-h-[80rem] relative">
        <div className="absolute inset-0 z-[1]">
          <img
            className="h-full w-full object-cover object-center"
            src={bg}
            alt="Background"
          />
        </div>
        <div className="max-w-[120rem] mx-auto h-full relative z-[2] px-6 md:px-8 lg:px-10">
          <div className="h-full w-full flex flex-col relative space-y-6">
            <div className="mt-auto mb-0 text-gray-50 md:pb-36 space-y-6">
              <span className="font-light text-sm text-accent-500">
                Bienvenu a fitihealth
              </span>
              <h1 className="text-3xl md:text-5xl max-w-[30rem] font-medium">
                Une bonne santé passe par le sport
              </h1>
              <p className="max-w-[30rem] font-light ml-4 before:content-[''] relative before:absolute before:w-px before:h-full before:left-0 before:top-0 before:-translate-x-4 before:bg-accent-500 md:text-base text-sm">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
              </p>
              <div className="md:flex-row flex-col flex gap-4">
                <button className="inline-block text-base font-medium px-12 py-2 bg-accent-400 rounded-lg cursor-pointer">
                  En savoir plus
                </button>
                <button className="inline-block text-base font-medium px-12 py-2 border border-accent-400 rounded-lg text-accent-400 cursor-pointer bg-gray-50/10 backdrop-blur-3xl">
                  Nos Horaires
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
