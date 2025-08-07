import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../shared/ErrorPage";
import HomePage from "../pages/home/HomePage";
import MyNetworks from "../pages/my networks/MyNetworks";
import JobPage from "../pages/jobs/JobPage";
import MessagePage from "../pages/message/MessagePage";
import NotificationPage from "../pages/notifications/NotificationPage";
import LoginPage from "../pages/auth/login/LoginPage";
import Register from "../pages/auth/register/Register";
import ProfilePage from "../pages/profile/ProfilePage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/networks",
                element: <MyNetworks />
            },
            {
                path: "/jobs",
                element: <JobPage />
            },
            {
                path: "/message",
                element: <MessagePage />
            },
            {
                path: "/Notifications",
                element: <NotificationPage />
            },
            {
                path: "/profile",
                element: <ProfilePage />
            },


        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    }, 
    {
        path: "/register",
        element: <Register />
    }

]);