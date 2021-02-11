import { useState, useContext, useCallback, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import NoteList from "../components/NoteList";
import Loader from "../components/Loader";

const LinksPage = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const { token } = useContext(AuthContext);
    const request = useHttp();
    const headers = { Authorization: `Bearer ${token}` };

    const getNotes = useCallback(async () => {
        try {
            setLoading(true);
            const notes = await request("/notes", "GET", null, headers);
            setNotes(notes);
            setLoading(false);
        } catch (err) {}
    }, [token, request]);

    const deleteNote = useCallback(
        async (_id) => {
            try {
                const { id } = await request(`/notes/${_id}`, "DELETE", null, headers);
                setNotes(notes.filter((note) => note._id !== id));
            } catch (err) {}
        },
        [token, request, notes]
    );

    useEffect(() => getNotes(), [getNotes]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <h1>Notes Page</h1>
            <NoteList notes={notes} deleteNote={deleteNote} />
        </div>
    );
};

export default LinksPage;
