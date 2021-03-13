import { useState, useContext, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import NoteEditor from "../components/NoteEditor";
import Loader from "../components/Loader";

const EditPage = () => {
    const [note, setNote] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const request = useHttp();
    const { token } = useContext(AuthContext);
    const headers = { Authorization: `Bearer ${token}` };

    const getNote = useCallback(async () => {
        try {
            setLoading(true);
            const note = await request(`/notes/${id}`, "GET", null, headers);
            setNote(note);
            setLoading(false);
        } catch (err) {}
    }, [token, request, id]);

    useEffect(() => getNote(), [getNote]);

    if (loading) {
        return <Loader />;
    }
    
    return (
        <>
            <h1>Edit Note</h1>
            <NoteEditor note={note} api={'edit/' + id} method="PUT"/>
        </>
    );
};

export default EditPage;
