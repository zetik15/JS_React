import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'toggleTheme',
    initialState: {
        theme: 'light'
    },

    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})

const store = configureStore({
    reducer: themeSlice.reducer
})

export const { toggleTheme } = themeSlice.actions;

export default store;