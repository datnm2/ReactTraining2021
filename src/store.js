import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './songSlice';

export default configureStore({
    reducer: {
        songs: songsReducer,
    },
});