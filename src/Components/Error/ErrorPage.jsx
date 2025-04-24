import { FaHome } from 'react-icons/fa';
import error from '../../assets/error.webp'
import Navbar from '../Header/Navbar';

const ErrorPage = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className=" w-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4 py-5">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md text-center">
       
        <img 
          src={error} 
          alt="Not Found Illustration"
          className="w-60 mx-auto mb-6"
        />

        <h1 className="text-7xl font-extrabold text-green-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2 text-green-700">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          Uh-oh! The page you're looking for has either moved... or never existed. 😅
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition"
        >
          <FaHome />
          Back to Home
        </a>
      </div>
    </div>
    </>
    
  );
};

export default ErrorPage;
