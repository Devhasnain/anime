import { configureStore } from "@reduxjs/toolkit";
import { SheduledMoviesReducer } from './SheduledMovReducer';

export const store = configureStore({
    reducer: {
        SheduledMovReducer: SheduledMoviesReducer.reducer,
    }
});

export type Rootstate = ReturnType<typeof store.getState>;