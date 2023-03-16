import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchposts', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    return res.data;
});

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        post: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
            state.post = [];
            state.error = null;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.post = action.payload;
            state.error = null;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.post = [];
            state.error = action.error.message;
        });
    }
});

export default postSlice.reducer;
