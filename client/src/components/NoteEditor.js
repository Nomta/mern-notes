import { useState, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { usePostData } from "../hooks/postData.hook";
import { AuthContext } from "../context/AuthContext";

const NoteEditor = ({ note, method, api }) => {
    const [formData, setFormData] = useState(note);
    const [loading, setLoading] = useState(false);
    const auchContext = useContext(AuthContext);
    const history = useHistory();

    const setLoadingStatus = (status) => setLoading(status);
    const postData = usePostData(formData, setLoadingStatus);
    const headers = { Authorization: `Bearer ${auchContext.token}` };

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const note = await postData(`/notes/${api}`, null, method, headers)(true);
            history.push(`/detail/${note._id}`);
        } catch (err) {}
    };

    const changeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form action="" onSubmit={submitHandler} className="card-content">
            <div className="input-field">
                <input type="text" name="title" value={formData.title} onChange={changeHandler} />
                <label htmlFor="title">Title</label>
            </div>
            <div className="input-field">
                <input type="text" name="text" value={formData.text} onChange={changeHandler} />
                <label htmlFor="text">Text</label>
            </div>
            <div className="right-align">
                <button className="btn" disabled={loading} onClick={submitHandler}>
                    Publish
                </button>
            </div>
        </form>
    );
};

export default NoteEditor;
