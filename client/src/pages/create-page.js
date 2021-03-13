import NoteEditor from "../components/NoteEditor";

const CreatePage = () => {
    const note = { title: "", text: "" };

    return (
        <>
            <h1>Create Note</h1>
            <NoteEditor note={note} api="create" />
        </>
    );
};

export default CreatePage;
