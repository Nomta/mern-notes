import { Link } from "react-router-dom";
import {useSnippet} from "../hooks/snippet.hook";

const Notes = ({ notes }) => {
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
                                <span className="grey-text text-darken-4">
                                    {useSnippet(note.title, 50)}
                                </span>
                            </Link>
                        </h3>
                        <p>{note.text}</p>
                        <p>
                            <small className="grey-text text-darken-2">
                                {new Date(note.date).toLocaleDateString()}
                            </small>
                        </p>
                        <p>
                            <Link to={`/detail/${note._id}`}>
                                <span className="grey-text text-darken-2">Read more...</span>
                            </Link>
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};

export default Notes;
