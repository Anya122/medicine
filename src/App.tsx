import React from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';


//http://192.168.1.205:8080/


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
