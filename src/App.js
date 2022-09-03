import './App.css'
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';


function App() {

    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/detail/:id' element={<Detail />} />
                </Route>
            </Routes>
        </div>
    );
}


export default App;