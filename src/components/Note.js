import React, { useContext } from "react";
import NoteContext from "../context/notes-contex";
import useMousePosition from "../hooks/useMousePosition";


const Note = ({ note }) => {
  //   useEffect(() => {
  //     console.log("Setting up effect");

  //     return () => {
  //       console.log("Cleaning up effect!");
  //     };
  //   }, []);

  const { dispatch } = useContext(NoteContext);
  const position = useMousePosition();

  return (
    <div>
      <h3>{note.title}</h3>
      <p>
        {position.x}, {position.y}
      </p>
      <p>{note.body}</p>
      <button
        onClick={() => dispatch({ type: "REMOVE_NOTE", title: note.title })}
      >
        x
      </button>
    </div>
  );
};

export { Note as default };
