import React from 'react';
import Link from 'next/link';

const NotesIndex = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));
  return (
    <div>
      <h1>Node Index</h1>
      {notes.map((note) => (
        <div key={note.id}>
          <Link href={`/notes/${note.id}`}>
            <strong>{note.title}</strong>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NotesIndex;
