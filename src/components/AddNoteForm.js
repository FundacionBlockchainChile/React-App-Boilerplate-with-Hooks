import React, { useState, useContext } from "react";
import NoteContext from "../context/notes-contex";

const AddNoteForm = () => {
  const { dispatch } = useContext(NoteContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <p>ADD NOTE:</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>add note</button>
      </form>
    </div>
  );
};

export { AddNoteForm as default };
