import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetNote } from "../hooks/getNote.hook";
import Note from "../components/Note";
import Loader from "../components/Loader";

const DetailPage = () => {
    const [note, setNote] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const getNote = useGetNote(id, setLoading);

    useEffect(() => getNote().then(setNote), []);

    if (loading) {
        return <Loader />;
    }

    return <Note note={note} />;
};

export default DetailPage;
