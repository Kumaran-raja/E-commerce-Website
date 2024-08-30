import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/slice';

const store = configureStore({
    reducer: {
        userinfo: userReducer,
    },
});

export default store;