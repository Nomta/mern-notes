import { useState, useContext, useCallback } from "react";
import { usePostData } from "../hooks/postData.hook";
import { AuthContext } from "../context/AuthContext";

const AuthPage = () => {
    const auchContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const setLoadingStatus = (status) => setLoading(status);
    const postData = usePostData(formData, setLoadingStatus);

    const login = useCallback(
        ({ token, userId }) => {
            auchContext.login(token, userId);
        },
        [auchContext]
    );

    const changeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const authHandler = postData("/auth");
    const loginHandler = postData("/auth/login", login);

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Auth Page</h1>
            </div>

            <div className="card blue-grey darken-3">
                <div className="card-content white-text">
                    <h2 className="card-title">Card Title</h2>
                    <div className="input-field">
                        <input name="email" type="text" onChange={changeHandler} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input name="password" type="password" onChange={changeHandler} />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="card-action right-align">
                    <button className="btn" disabled={loading} onClick={loginHandler}>
                        Login
                    </button>
                    &nbsp;
                    <button className="btn" disabled={loading} onClick={authHandler}>
                        Auth
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
