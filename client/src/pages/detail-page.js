import { useState, useContext, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Note from "../components/Note";
// import { Loader } from "../components/Loader";

const DetailPage = () => {
    const [note, setNote] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const request = useHttp();
    const { token } = useContext(AuthContext);
    const headers = { Authorization: `Bearer ${token}` };

    const getNote = useCallback(async () => {
        try {
            const note = await request(`/notes/${id}`, "GET", null, headers);
            setNote(note);
        } catch (err) {}
    }, [token, request, id]);

    useEffect(() => getNote(), [getNote]);

    return (
        <div>
            <h1>Detail Page</h1>
            {/* {loading ? <Loader/> : note && <Note note={note}/>} */}
            <Note note={note} />
        </div>
    );
};

export default DetailPage;
