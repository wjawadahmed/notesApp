import { RiCloseLine } from '@remixicon/react';
import React, { useState, useEffect, useRef } from 'react';

const Card = ({ onDelete }) => {
  const charLimit = 206; // Set your character limit here
  const [bgColor, setBgColor] = useState('');
  const [charCount, setCharCount] = useState(0);
  const contentRef = useRef(null); // Reference to the contentEditable div

  const colors = [
    'bg-orange-400/90',  // Classic sticky note yellow
    'bg-pink-400/90',    // Light pink
    'bg-sky-400/90',    // Light blue
    'bg-green-400/90',   // Light green
    'bg-purple-400/90'   // Light purple
  ];
  

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  // Function to place caret at the end of the content
  const placeCaretAtEnd = (el) => {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const handleInput = (e) => {
    const text = e.target.innerText;
    const currentCharCount = text.length;

    if (currentCharCount <= charLimit) {
      setCharCount(currentCharCount);
    } else {
      // Trim the text if it exceeds the character limit
      e.target.innerText = text.slice(0, charLimit);
      setCharCount(charLimit);

      // Move caret back to the end of the text after trimming
      placeCaretAtEnd(contentRef.current);
    }
  };

  return (
    <div className={`relative card h-72 w-60 ${bgColor} m-5 p-4 shadow-lg overflow-hidden rounded-sm`}>
      <RiCloseLine
        onClick={onDelete}
        className='hover:text-red-700 text-orange-400'
        style={{ position: 'absolute', top: '0.4px', right: '-1.3px', cursor: 'pointer', padding: "6px" }}
      />
      <div
        ref={contentRef}
        contentEditable="true"
        className="w-full h-full px-3 py-2 text-black bg-transparent border-transparent rounded focus:outline-none focus:ring-2 focus:ring-red-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 overflow-y-auto overflow-x-hidden break-words"
        placeholder="Write your notes here..."
        onInput={handleInput} // Monitor input to count characters
      ></div>
      <div className="text-center text-xs  text-gray-100">
        {charCount}/{charLimit}
      </div>
    </div>
  );
};

export default Card;
