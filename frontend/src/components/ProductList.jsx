import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bg from "./../assets/bg1.jpg";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products_list/");
        setProducts(response.data);
      } catch (error) {
        setError("Failed to load products");
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <header className="absolute w-full top-0 left-0 z-50">
        <div className="max-w-[120rem] px-6 md:px-8 lg:px-10 py-4 text-gray-50">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-gray-50">
              <svg
                className="h-8 w-8"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="94" y="81" width="40" height="350" fill="currentColor" />
                <rect x="264" y="81" width="40" height="350" fill="currentColor" />
                <circle cx="199" cy="131" r="50" fill="currentColor"></circle>
                <circle cx="199" cy="246" r="50" fill="currentColor"></circle>
                <circle cx="369" cy="131" r="50" fill="currentColor"></circle>
                <circle cx="369" cy="246" r="50" fill="currentColor"></circle>
              </svg>
            </Link>
            <div className="hidden md:flex space-x-6 text-sm font-light">
              <Link className="font-bold" to="/">Products</Link>
            </div>
            <div className="flex space-x-5">
              <Link to="/login" className="text-lg text-true-gray-800 hover:text-cool-gray-700">Login</Link>
              <Link to="/register" className="text-lg text-true-gray-800 hover:text-cool-gray-700">Register</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="relative min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 p-6 bg-opacity-20 bg-gray-100 min-h-screen">
          <div className="max-w-[120rem] mt-16 px-16 mx-auto">
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={product.thumbnailImage}
                      alt={product.name}
                      className="h-full w-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="bg-white p-4">
                    <h3 className="text-sm font-medium mb-2">{product.name}</h3>
                    <p className="text-xs text-gray-400">{product.description}</p>
                    <p className="text-xs text-gray-400">${product.basePrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
