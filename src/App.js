import './App.css';
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
import CommunityLayout from './skill/community/CommunityLayout';
import ProjectForm from "./create/ProjectForm";
import Header from "./header/Header";
import ReviewPage from "./review/ReviewPage";
import Heart from "./skill/heart/Heart";
import Alarm from "./skill/alarm/Alarm";
import Navbar from "./components/Navbar";
import Mypage from './components/Mypage';
import ProductAll from './components/ProductAll';
import RecommandProjects from './recommandProject/Recopro'
//import ProductAll from './components/ProductAll'; // 가져온 ProductAll
import Details from './components/Details'; // 가져온 Details

function App() {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <PageLoading />;

    return (
        <Router>
            <Header />
            {/* <Navbar /> */}

            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/FoundID" element={<FoundID />} />
                <Route path="/FoundPW" element={<FoundPW />} />
                <Route path="/HelpCenter" element={<HelpCenterPage />} />
                <Route path="/ProjectCreate" element={<ProjectForm />} />
                <Route path="/Payment" element={<PaymentPage />} />
                <Route path="/Community" element={<CommunityLayout />} />
                <Route path="/Review" element={<ReviewPage />} />
                <Route path="/WishList" element={<Heart />} />
                <Route path="/Alarm" element={<Alarm />} />
                <Route path="/MyPage" element={<Mypage />} />
                <Route path="/RecommandProjects" element={<RecommandProjects />} />
                {/* <Route path="/AllProduct" element={<ProductAll />} /> */}
                {/* 추가된 라우트를 여기에 추가 */}
                <Route path="/popular" element={<ProductAll />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>

            <InfoBanner />
        </Router>
    );
}

export default App;