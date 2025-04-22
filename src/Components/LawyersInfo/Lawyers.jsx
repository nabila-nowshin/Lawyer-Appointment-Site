import React, { useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({ lawyers }) => {
  const [showAll, setShowAll] = useState(false);

  // when showAll === false -- only first 6
  const visibleLawyers = showAll ? lawyers : lawyers.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-center font-bold text-4xl mb-5">Our Best Lawyers</h1>
      <p className="text-center text-xl px-20">
        Our platform connects you with verified, experienced lawyers across various specialties — all at
        your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes
        and receive quality care you can trust.
      </p>

      
      <div className="mt-10 lg:grid lg:grid-cols-2 gap-10">
        {visibleLawyers.map((lawyer) => (
          <Lawyer key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>

      {/* show‑more / show‑less button */}
      {lawyers.length > 6 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 border-2 bg-green-600 text-white rounded-full
                       "
          >
            {showAll ? 'Show less' : 'Show more'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Lawyers;
