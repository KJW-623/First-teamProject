import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./login-register/login/Login";
import Register from "./login-register/register/Register";
import FoundID from "./search-ID&PW/searchID/srhID";
import FoundPW from "./search-ID&PW/searchPW/srhPW";
import PageLoading from "./pageLoading/PL";
import InfoBanner from "./informationBanner/infoBanner";
import HelpCenterPage from "./customerservice/HelpCenterPage";
import PaymentPage from "./payment/PaymentPage";
import CommunityLayout from './skill/community/CommunityLayout';
import ProjectForm from "./create/ProjectForm";
import Header from "./header/Header";
import ReviewPage from "./review/ReviewPage";
import Mypage from './components/Mypage';
import HeartPage from './skill/heart/HeartPage';
import NotificationPage from './skill/alarm/NotificationPage';
import Details from './components/Details';
//import Navbar from './components/Navbar';
import ProductAll from './components/ProductAll';
import Prelaunching from './prelaunchingPage/Prelaunching';
import RecommandProjects from './recommandProject/Recopro'
import router from "./Error/router";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <PageLoading />;

    return (
        <Router>
            <RouterProvider router={router} />
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
                <Route path="/Like" element={<HeartPage />} />
                <Route path="/Notification" element={<NotificationPage />} />
                <Route path="/MyPage" element={<Mypage />} />
                <Route path="/products" element={<ProductAll />} />
                <Route path="/details" element={<Details />} />
                <Route path="/open-soon" element={<Prelaunching />} />
                <Route path="/RecommandProjects" element={<RecommandProjects />} />
            </Routes>

            <InfoBanner />
        </Router>
    )
}

export default App;

// function App() {
//   return <RouterProvider router={router} />;


// //<ProductAll/>
// //<Navbar/>
// //<Details/>
// //<Mypage/>
// }

// export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
