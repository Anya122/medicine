import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import authReducer from './reducers/AuthSlice'
import visitsReducer from './reducers/VisitSlice'
import timeReducer from './reducers/TimeSlice'
import setReducer from './reducers/ProfileSlice'

const rootReducer = combineReducers({
    userReducer,
    authReducer,
    visitsReducer,
    timeReducer,
    setReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']