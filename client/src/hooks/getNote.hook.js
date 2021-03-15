import { useContext, useCallback } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const useGetNote = (noteId, setLoadingStatus) => {
    const request = useHttp();
    const { token } = useContext(AuthContext);
    const headers = { Authorization: `Bearer ${token}` };

    return useCallback(async () => {
        try {
            setLoadingStatus(true);
            const note = await request(`/notes/${noteId}`, "GET", null, headers);
            setLoadingStatus(false);
            return note;
        } catch (err) {
            throw err;
        }
    }, [token, request, noteId]);
};
