import React from 'react';

const Card = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-2xl p-6 border-t-4 border-blue-600 hover:shadow-lg transition duration-300">
      <h2 className="text-blue-700 text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-700 mb-5">{description}</p>
      {buttonText && (
        <button
          onClick={onClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
