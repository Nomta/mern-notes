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
        <div className="auth-card grey lighten-2">
            <div className="container">
                <div className="card white">
                    <div className="card-content">
                        <h2 className="card-title">Login</h2>
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
        </div>
    );
};

export default AuthPage;
