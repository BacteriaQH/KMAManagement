import axios from 'axios';

import { loginStart, loginFailed, loginSuccess } from './authSlice';
import url from '../jsconfig';
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${url.SERVER_URL}/api/login`, user);
        dispatch(loginSuccess(res.data));
        navigate('/home');
    } catch (err) {
        dispatch(loginFailed());
    }
};
