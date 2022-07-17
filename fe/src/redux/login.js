import axios from 'axios';

import { loginStart, loginFailed, loginSuccess } from './authSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:3000/api/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/home');
    } catch (err) {
        dispatch(loginFailed());
    }
};
