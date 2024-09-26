import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Main from './components/Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    </BrowserRouter>


);

