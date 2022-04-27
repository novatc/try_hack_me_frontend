import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter , Routes, Route,} from "react-router-dom";
import ResultScreen from "./pages/ResultScreen";
import StartScreen from "./pages/StartScreen";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="ResultScreen" element={<ResultScreen />} />
            <Route path="StartScreen" element={<StartScreen />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
