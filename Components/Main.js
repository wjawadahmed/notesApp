"use client";
import React, { useState } from 'react';
import Card from './Card';
import { RiStickyNoteAddLine } from '@remixicon/react';
import Toolbar from './Toolbar';

const Main = () => {
  const [notes, setNotes] = useState([]);

  const deleteCard = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const addCard = () => {
    setNotes([...notes, { id: notes.length + 1 }]);
  };

  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <>
      <div className="bg-zinc-400 text-black p-3 min-h-screen">
        <div
          onClick={addCard}
          className="btn bg-white text-black w-40 px-4 py-3 rounded italic cursor-pointer flex justify-center items-center transition-colors duration-600 hover:bg-[rgb(207,207,139)] hover:text-black"
        >
          <RiStickyNoteAddLine style={{ marginRight: '10px' }} />
          Add Notes
        </div>

        {notes.length > 0 && (
          <div className="absolute top-20 right-3">
          <Toolbar handleCommand={handleCommand} />
        </div>
        )}

        <div className="main overflow-x-hidden no-scrollbar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 bg-zinc-400 text-black mt-5">
          {notes.map((note) => (
            <Card key={note.id} onDelete={() => deleteCard(note.id)} />
          ))}
        </div>

        {notes.length === 0 && (
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold opacity-15 text-black">
            Notes.
          </h1>
        )}
      </div>
    </>
  );
};

export default Main;
