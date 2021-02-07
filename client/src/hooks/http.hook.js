import { useCallback } from "react";
import HttpError from "../error/HttpError";

export const useHttp = () => {
    const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        try {
            if (body) {
                body = JSON.stringify(body);
                headers["Content-Type"] = "application/json";
            }

            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new HttpError(response.status, data.message || "Unknown error");
            }

            const data = await response.json();

            data.message = data.message || "ok";
            return data;
        } catch (err) {
            throw err;
        }
    }, []);

    return request;
};
