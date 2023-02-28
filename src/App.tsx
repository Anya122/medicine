import React from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";


function App() {

    return (
        <div className={s.appWrapper}>
            <Header/>
            <div className={s.contentWrapper}>
                <Sidebar/>
                <Main/>
            </div>
        </div>
    );
}

export default App;
