import { createAsyncThunk } from '@reduxjs/toolkit';
import { tasks } from '../data/tasks';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        return tasks;
    }
)