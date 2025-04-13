import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from '../asyncActions/asyncThunk';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        loading: 'idle',
        error: null
    },
    reducers: {
        
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = 'succeeded';
                state.error = null;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = 'failed';
            });
    }
});

export default tasksSlice.reducer;