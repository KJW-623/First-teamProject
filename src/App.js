import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login-register/login/Login";
import Register from "./login-register/register/Register";
import FoundID from "./search-ID&PW/searchID/srhID";
import FoundPW from "./search-ID&PW/searchPW/srhPW";
import { useState, useEffect } from "react";
import PageLoading from "./pageLoading/PL";
import InfoBanner from "./informationBanner/infoBanner";
import HelpCenterPage from "./customerservice/HelpCenterPage";
import PaymentPage from "./payment/PaymentPage";
import Community from "./community/Community";
import ProjectForm from "./create/ProjectForm";

function App() {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <PageLoading />;

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/FoundID" element={<FoundID />} />
                <Route path="/FoundPW" element={<FoundPW />} />
                <Route path="/HelpCenter" element={<HelpCenterPage />} />
                <Route path="/ProjectCreate" element={<ProjectForm />} />
                <Route path="/Payment" element={<PaymentPage />} />
                <Route path="/creator-community" element={<Community />} />
            </Routes>
            <InfoBanner />
        </Router>
    );
}

export default App;