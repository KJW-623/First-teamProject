import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login-register/login/Login";
import Register from "./login-register/register/Register";
import FoundID from "./search-ID&PW/searchID/srhID";
import FoundPW from "./search-ID&PW/searchPW/srhPW";
import React, { useState, useEffect } from "react";
import PageLoading from "./pageLoading/PL";
import logo from './logo.svg';
import './App.css';
import ProductAll from './components/ProductAll';
import Navbar from './components/Navbar';
import Details from './components/Details';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <PageLoading />;

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/FoundID" element={<FoundID />} />
                <Route path="/FoundPW" element={<FoundPW />} />
                <Route path="/customer-service" element={<CustomerService />} />
                <Route path="/project-create" element={<Create />} />
                <Route path="/project-payment" element={<Payment />} />
                <Route path="/creator-community" element={<Community />} />
            </Routes>
            <InfoBanner />
        </Router>
    );
}

export default App;