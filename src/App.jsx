import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-purple-600 text-white py-4 shadow-md text-center text-2xl font-bold">
        React Quiz App
      </header>
      {/* Main Section */}
      <main className="flex-grow flex items-center justify-center">
        {/* start section */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Welcome to the React Quiz
          </h2>
          <p className="text-gray-600 mb-6">
            15 questions to test your React mastery
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            Let’s do it 🚀
          </button>
        </div>
        {/* quiz section */}
        <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
          {/* Progress */}
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full w-2/5"></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Question 6 of 15</p>
          </div>

          {/* Question */}
          <div className="questionContainer">
            <h4 className="text-xl font-semibold text-purple-700 mb-4">
              What is JSX in React?
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="border rounded-lg p-3 cursor-pointer hover:bg-purple-50 hover:border-purple-400 transition">
                A syntax extension for JavaScript
              </li>
              <li className="border rounded-lg p-3 cursor-pointer hover:bg-purple-50 hover:border-purple-400 transition">
                A CSS preprocessor
              </li>
              <li className="border rounded-lg p-3 cursor-pointer hover:bg-purple-50 hover:border-purple-400 transition">
                A database query language
              </li>
              <li className="border rounded-lg p-3 cursor-pointer hover:bg-purple-50 hover:border-purple-400 transition">
                None of the above
              </li>
            </ul>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-between items-center">
            {/* Timer */}
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow-sm font-medium flex items-center gap-2">
              ⏱ 00:45
            </button>

            {/* Next Button */}
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-6 py-2 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              Next →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
