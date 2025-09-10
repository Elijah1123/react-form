import { useState } from "react";
import GetQuote from "./components/GetQuote";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Get Quote
      </button>

      {/* Pass the required props */}
      <GetQuote isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
