import { useCallback } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "./message.hook";

export const usePostData = (formData, setLoadingStatus) => {
    const request = useHttp();
    const showMessage = useMessage();

    return useCallback(
        (url, cb, method = "POST", headers) => async () => {
            setLoadingStatus(true);

            try {
                const data = await request(url, method, formData, headers);
                setLoadingStatus(false);
                (cb || showMessage)(data);
                return data;
            } catch (err) {
                setLoadingStatus(false);
                showMessage(err);
                throw err;
            }
        },
        [formData]
    );
};
