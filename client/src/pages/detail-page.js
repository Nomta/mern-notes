import { useState, useContext, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Note from "../components/Note";
import Loader from "../components/Loader";

const DetailPage = () => {
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
        } catch (err) {
        } finally {
            setLoading(false);
        }
    }, [token, request, id]);

    useEffect(() => getNote(), [getNote]);

    if (loading) {
        return <Loader />;
    }

    return <Note note={note} />;
};

export default DetailPage;
