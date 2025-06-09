import { createBrowserRouter } from "react-router-dom";
import Mypage from "../components/Mypage";
import ErrorPage from "../Error/ErrorPage";
import RootLayout from "../Error/RootLayout";
import { Loader } from "../Error/Loader";
import Details from "../components/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />, // 필수 항목
        children: [
            {
                index: true,
                element: <Mypage />,
            },
            {
                path: "mypage",
                element: <Mypage />,
                loader: Loader,
                errorElement: <ErrorPage />, //  loader 에러에도 반응
            },
            {
                path: "*",               // 
                element: <ErrorPage />,  // 잘못된 모든 경로 처리
            },
            {   path: 'details',
                element: <Details /> 
            }
        ],
    },
]);

export default router;
