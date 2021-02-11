import { Link } from "react-router-dom";
import Snippet from "../components/Snippet";

const Notes = ({ notes, deleteNote }) => {
    if (!notes.length) {
        return <p>No notes</p>;
    }
    return (
        <ul>
            {notes.map((note) => {
                return (
                    <li key={note._id}>
                        <h3>
                            <Link to={`/detail/${note._id}`}>
                                <span className="grey-text text-darken-4">{note.title}</span>
                            </Link>
                        </h3>
                        <p>
                            <Snippet length="100">{note.text}</Snippet>
                        </p>
                        <p>
                            <small className="grey-text text-darken-2">
                                {new Date(note.date).toLocaleDateString()}
                            </small>
                        </p>
                        <p>
                            <Link to={`/detail/${note._id}`}>
                                <span className="grey-text text-darken-2">Read more...</span>
                            </Link>
                            <a
                                className="teal-text text-darken-2 right"
                                onClick={() => deleteNote(note._id)}>
                                Delete
                            </a>
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};

export default Notes;
