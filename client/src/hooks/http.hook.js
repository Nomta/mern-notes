import { useCallback, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import HttpError from "../error/HttpError";

export const useHttp = () => {
    const auchContext = useContext(AuthContext);
    const request = useCallback(
        async (url, method = "GET", body = null, headers = {}) => {
            try {
                if (body) {
                    body = JSON.stringify(body);
                    headers["Content-Type"] = "application/json";
                }

                const response = await fetch(url, { method, body, headers });

                if (!response.ok) {
                    if (response.status == 401) {
                        auchContext.logout();
                    }
                    throw new HttpError(response.status, response.statusText || "Unknown error");
                }

                const data = await response.json();

                data.message = data.message || "ok";
                return data;
            } catch (err) {
                throw err;
            }
        },
        [auchContext]
    );

    return request;
};
