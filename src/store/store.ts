import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import authReducer from './reducers/AuthSlice'
import visitsReducer from './reducers/VisitSlice'

const rootReducer = combineReducers({
    userReducer,
    authReducer,
    visitsReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']