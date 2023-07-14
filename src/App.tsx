import { useState } from 'react';
import './App.css';
import Scene from './Scene';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(true);

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-75">
         
          <article className="relative bg-black p-4 rounded-md">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closePopup}>
              Close
            </button>
            <p>Popup Content</p>
          </article>
          
        </div>
      )}

      <Scene />
    </div>
  );
}

export default App;
