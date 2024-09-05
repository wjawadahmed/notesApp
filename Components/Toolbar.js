"use client"
import React, { useState } from 'react';

const Toolbar = ({ handleCommand }) => {
  const [showFontSizeMenu, setShowFontSizeMenu] = useState(false);
  const [showColorMenu, setShowColorMenu] = useState(false);

  const toggleFontSizeMenu = () => setShowFontSizeMenu(!showFontSizeMenu);
  const toggleColorMenu = () => setShowColorMenu(!showColorMenu);

  const handleFontSizeChange = (size) => {
    handleCommand('fontSize', size);
    setShowFontSizeMenu(false);
  };

  const handleColorChange = (color) => {
    handleCommand('foreColor', color);
    setShowColorMenu(false);
  };

  return (
    <div className="flex mb-4 p-2">
      <button
        type="button"
        className="px-3 py-2 bg-white border border-gray-300 rounded-l-lg shadow hover:bg-gray-200 focus:outline-none transition-all duration-300"
        onClick={() => handleCommand('bold')}
        title="Bold"
      >
        <span className="font-bold">B</span>
      </button>
      <button
        type="button"
        className="px-3 py-2 bg-white border-t border-b border-gray-300 shadow hover:bg-gray-200 focus:outline-none transition-all duration-300"
        onClick={() => handleCommand('italic')}
        title="Italic"
      >
        <span className="italic">I</span>
      </button>
      <button
        type="button"
        className="px-3 py-2 bg-white border-t border-b border-gray-300 shadow hover:bg-gray-200 focus:outline-none transition-all duration-300"
        onClick={() => handleCommand('underline')}
        title="Underline"
      >
        <span className="underline">U</span>
      </button>
      <button
        type="button"
        className="px-3 py-2 bg-white border-t border-b border-gray-300 shadow hover:bg-gray-200 focus:outline-none transition-all duration-300 relative"
        onClick={toggleFontSizeMenu}
        title="Font Size"
      >
        <span className="text-lg">A<sup>+</sup></span>
        {showFontSizeMenu && (
          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {[1, 2, 3, 4, 5, 6, 7].map(size => (
              <button
                key={size}
                className="block px-4 py-2 hover:bg-gray-200 focus:outline-none"
                onClick={() => handleFontSizeChange(size.toString())}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </button>
      <button
        type="button"
        className="px-3 py-2 bg-white border-t border-b border-gray-300 shadow hover:bg-gray-200 focus:outline-none transition-all duration-300 relative ml-2"
        onClick={toggleColorMenu}
        title="Font Color"
      >
        <span className="text-sm">Color</span>
        {showColorMenu && (
          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {['black', 'red', 'blue', 'green', 'yellow'].map(color => (
              <button
                key={color}
                className="block px-4 py-2 hover:bg-gray-200 focus:outline-none"
                style={{ backgroundColor: color, color: color === 'black' ? 'white' : 'black' }}
                onClick={() => handleColorChange(color)}
              >
                <span className="block w-6 h-6" style={{ backgroundColor: color }}></span>
              </button>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default Toolbar;
