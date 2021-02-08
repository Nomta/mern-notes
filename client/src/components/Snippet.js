const Snippet = ({ children, length }) => {
    return (
        <span className="snippet">
            {children.length > length ? children.slice(0, length) + "..." : children}
        </span>
    );
};

export default Snippet;
