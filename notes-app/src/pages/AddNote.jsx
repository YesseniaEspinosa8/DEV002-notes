import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddNote() {
    const [title, setTitle] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title !== "") {
            await addDoc(collection(db, "notes"), {
                title,
                completed: false,

            });
            setTitle("");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Escribe tu nota"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <div className="btn_container">
                <button>Agregar</button>
            </div>
        </form>
    )

}