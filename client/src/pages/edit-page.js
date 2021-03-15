import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetNote } from "../hooks/getNote.hook";
import NoteEditor from "../components/NoteEditor";
import Loader from "../components/Loader";

const EditPage = () => {
    const [note, setNote] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const getNote = useGetNote(id, setLoading);

    useEffect(() => getNote().then(setNote), []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <h1>Edit Note</h1>
            <NoteEditor note={note} api={"edit/" + id} method="PUT" />
        </>
    );
};

export default EditPage;
