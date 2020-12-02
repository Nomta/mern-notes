import {useCallback} from 'react';
import {useHttp} from '../hooks/http.hook';
import {useMessage} from '../hooks/message.hook';

export const useAuthApi = (formData, setLoadingStatus) => {
    const request = useHttp();
    const showMessage = useMessage();

    return useCallback((url, cb) => async() => {
        setLoadingStatus(true);
        
        try {
            const data = await request(url, 'POST', formData);
            setLoadingStatus(false);
            (cb || showMessage)(data);
        }
        catch(err) {
            setLoadingStatus(false);
            showMessage(err);
        }
        
    }, [formData]);
}