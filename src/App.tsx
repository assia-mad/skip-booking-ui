import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-2xl p-10 max-w-lg w-full transition-all duration-300 hover:shadow-yellow-400/40">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-6 text-center tracking-wide">
          React + Tailwind Test
        </h1>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 mb-6 rounded-xl shadow-sm">
          <p className="text-lg font-medium">
            Tailwind CSS is fully active and styled!
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow hover:scale-105 transition-transform"
          >
            Count is {count}
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-8">
          Click to increment and test interactivity
        </p>
      </div>
    </div>
  );
}

export default App;
