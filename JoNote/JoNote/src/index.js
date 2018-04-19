import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Mainland from "./main-land/Mainland";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Mainland />
    </BrowserRouter>
 , document.getElementById('root'));
registerServiceWorker();
