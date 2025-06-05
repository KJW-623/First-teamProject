import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import CustomerService from './customerservice/CustomerService';
import Create from './create/Create';
import Payment from './payment/Payment';
import Community from './community/Community';
import InfoBanner from './informationBanner/infoBanner';

function AppContent() {
    const location = useLocation();
    // Navbar를 숨길 경로 배열
    const hideNavbarPaths = ["/login", "/register", "/FoundID", "/FoundPW"];
    const hideNavbar = hideNavbarPaths.includes(location.pathname);

    return (
        <>
            {!hideNavbar && <Navbar />}
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
        </>
    );
}

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <PageLoading />;

    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;