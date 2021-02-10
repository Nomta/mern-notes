import { useState, useContext, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { usePostData } from "../hooks/postData.hook";
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

    useEffect(() => getNotes(), [getNotes]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <h1>Notes Page</h1>
            <NoteList notes={notes} />
        </div>
    );
};

export default LinksPage;
