import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'songs',
    initialState: {
        songList: [],
    },
    reducers: {
        addSong: (state, action) => {
            state.songList = [...state.songList, action.payload]
        },
    },
});

export const { addSong } = counterSlice.actions;

export default counterSlice.reducer;

