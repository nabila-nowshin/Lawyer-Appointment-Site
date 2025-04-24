import React from 'react';
import { FaHome } from 'react-icons/fa';

const NoLawyer = () => {
    return (
        <div>
            <div className="w-screen flex items-center justify-center px-4 my-10">
                <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md text-center border-4 border-green-200 bg-gradient-to-br from-white via-green-50 to-green-100">
                    

                    <h1 className="text-4xl font-extrabold text-green-600 mb-4">No Lawyer Found</h1>
                    <h2 className="text-xl font-semibold mb-2 text-green-700">Oops, we couldn't find that lawyer.</h2>
                    <p className="text-gray-500 mb-6">
                    Either this lawyer took a vacation 🏖️ or doesn’t exist in our records. 
                    </p>

                    <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition"
                    >
                    <FaHome />
                    View All Lawyers
                    </a>
                </div>
            </div>

        </div>
    );
};

export default NoLawyer;