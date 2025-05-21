import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { BlueprintApi } from "./service/fetchApi";


export const store = configureStore({
    reducer:{
        [BlueprintApi.reducerPath]: BlueprintApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(BlueprintApi.middleware),
    devTools: process.env.NODE_ENV !== "production",

})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;