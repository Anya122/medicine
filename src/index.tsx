import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./components/Login/Login";
import PrivateRoute from "./utils/router/PrivateRoute";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<App/>}/>
                </Route>

                <Route path="login" element={<Login/>}/>
            </Routes>


        </BrowserRouter>

    </React.StrictMode>
);

reportWebVitals();
