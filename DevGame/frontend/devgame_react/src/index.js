import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout"
import App from "./pages/App/App";
import Login from "./pages/Login/Login"
import NoPage from "./pages/NoPage";

export default function WebRoutes() {
    const cat_data = {name: "Cindy", fluffiness: 200};
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App cat_data={cat_data} />} />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="*" element={<NoPage />} />
            </Routes>  
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WebRoutes />);