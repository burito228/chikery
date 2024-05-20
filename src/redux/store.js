import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from "./slices/productSlice";
import filterSlice from "./slices/filterSlice";
import dataSlice from "./slices/dataSlice";

const rootReducer = combineReducers({
    products: productSlice,
    filter: filterSlice,
    data: dataSlice,
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persister = persistStore(store)

export default store