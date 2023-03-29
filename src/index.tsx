import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import Login from "./components/Login/Login";
import PrivateRoute from "./utils/router/PrivateRoute";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>

                    <Route element={<PrivateRoute />}>
                        <Route path="/logined/*" element={<App/>}/>
                    </Route>


                </Routes>
            </BrowserRouter>
        </Provider>
);

