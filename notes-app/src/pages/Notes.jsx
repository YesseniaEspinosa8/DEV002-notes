import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Title from "./Title";

export default function Notes({
    note,
    toggleComplete,
    handleDelete,
    handleEdit

}) {
    const [newTitle, setNewTitle] = React.useState(note, Title);
    const handleChange = (e) => {
        e.preventDefault();
        if (note.complete === true) {
            setNewTitle(note.title);

        } else {
            note.title = "";
            setNewTitle(e.target.value);

        }
    };


    return (
        <div className="note">
            <input style={{ textDecoration: note.completed && "line-through" }}
                type="text"
                value={note.title === "" ? newTitle : note.title}
                className="list"
                onChange={handleChange}
            />

            <div>
                <button className="button-complete"
                    onClick={() => toggleComplete(note)}
                >
                    <CheckCircleIcon id="i" />
                </button>
                <button className="button-edit"
                    onClick={() => handleEdit(note, newTitle)}
                >
                    <EditIcon id="i" />
                </button>

                <button
                    className="button-delete"
                    onClick={() => handleDelete(note.id)}>
                    <DeleteIcon id="i" />

                </button>
            </div>

        </div>

    );
}
  