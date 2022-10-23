import React, { ChangeEvent, FormEvent, useState } from "react";
import "./notes.css";
import { downloadFile } from "../../utils/DownloadFile";
import NotesList from "../../components/NotesList/NotesList";
import TimeInput from "../../components/TimeInput/TimeInput";
import UploadButton from "../../components/UploadButton/UploadButton";

export type TNote = {
  from: string;
  to: string;
  note: string;
};

const Notes = () => {
  const [{ from, to, note }, setNote] = useState<TNote>({
    from: "",
    to: "",
    note: "",
  });
  const [notes, setNotes] = useState<TNote[]>([]);

  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote((prevNote) => ({ ...prevNote, [e.target.name]: e.target.value }));
  };

  const handleAddNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );
    setNotes((prevNotes) => [...prevNotes, formData as TNote]);
    setNote({ from: "", to: "", note: "" });
  };

  const handleImportNotes = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = await e.target.files?.[0].text();
    if (!file) return;
    setNotes(JSON.parse(file));
  };

  const handleExportNotes = () => {
    const file = new Blob([JSON.stringify(notes)], {
      type: "application/json",
    });
    downloadFile(file);
  };

  return (
    <div>
      <form onSubmit={handleAddNote}>
        <TimeInput
          onChange={handleNoteChange}
          value={from}
          name="from"
          label="From:"
        />
        <TimeInput
          onChange={handleNoteChange}
          value={to}
          name="to"
          label="To:"
          min={from}
        />
        <input
          value={note}
          onChange={handleNoteChange}
          className="note-input"
          name="note"
          type="text"
          required
        />
        <div className="notes-controls">
          <button type="submit">Add Note</button>
          <UploadButton
            onChange={handleImportNotes}
            id="notes"
            label="Import"
            types="application/json"
          />
          <button onClick={handleExportNotes} type="button">
            Export
          </button>
        </div>
      </form>
      <NotesList notes={notes} />
    </div>
  );
};

export default Notes;
