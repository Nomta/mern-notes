const Note = ({ note }) => {
    return (
        <>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
            <p>
                <small className="grey-text text-darken-2">
                    {/* {new Date(note.date).toLocaleDateString()} */}
                </small>
            </p>
        </>
    );
};

export default Note;
