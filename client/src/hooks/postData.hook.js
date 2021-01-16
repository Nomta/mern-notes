import { useCallback } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "./message.hook";

export const usePostData = (formData, setLoadingStatus) => {
    const request = useHttp();
    const showMessage = useMessage();

    return useCallback(
        (url, cb, headers) => async () => {
            setLoadingStatus(true);

            try {
                const data = await request(url, "POST", formData, headers);
                setLoadingStatus(false);
                (cb || showMessage)(data);
            } catch (err) {
                setLoadingStatus(false);
                showMessage(err);
            }
        },
        [formData]
    );
};
