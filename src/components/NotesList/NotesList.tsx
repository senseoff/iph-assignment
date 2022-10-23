import React, { FC } from "react";
import { TNote } from "../../containers/Notes/Notes";

type TNotesList = {
  notes: TNote[];
};

const NotesList: FC<TNotesList> = ({ notes }) => {
  return (
    <ul className="notes-wrapper">
      {notes.map(({ from, to, note }, index) => (
        <li key={index}>
          <div>
            {from} - {to}
          </div>
          <p>{note}</p>
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
