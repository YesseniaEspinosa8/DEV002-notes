import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import "../pages/Home.css"
import Title from './Title'
import AddNote from './AddNote'
import Notes from './Notes'
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase'

export default function Home() {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "notes"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let notesArray = [];
      querySnapshot.forEach((doc) => {
        notesArray.push({...doc.data(), id: doc.id});
      });
      setNotes(notesArray);
    });

    return() => unsub();
}, []);

const handleEdit = async (note,title) => {
  await updateDoc(doc(db, "notes", note.id), {title:title});
};

const toggleComplete = async (note) => {
  await updateDoc(doc(db, "notes", note.id), {
    completed: !note.completed
  }); 
};
 const handleDelete = async (id) => {
  await deleteDoc(doc(db, "notes", id));
 };
  const {cerrarSesion} = useContext(AuthContext)

  const handelcerrarSesion = async () => {
    await cerrarSesion()
  }
  return (
    <div>
      <div>
        <Title/>
      </div>
      <div>
        <AddNote/>
      </div>

      <div className='note_container'>
        {notes.map((note) => (
          <Notes
          key={note.id}
          note={note}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          />
        ))}

      </div>
      
      <button className='logOut' onClick={handelcerrarSesion}>Cerrar Sesion</button>
    </div>
  )
}
