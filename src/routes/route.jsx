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
import ProtectedRoute from "./ProtectedRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <ProtectedRoute><HomePage /></ProtectedRoute>
            },
            {
                path: "/networks",
                element: <ProtectedRoute><MyNetworks /></ProtectedRoute>
            },
            {
                path: "/jobs",
                element: <ProtectedRoute><JobPage /></ProtectedRoute>
            },
            {
                path: "/message",
                element: <ProtectedRoute><MessagePage /></ProtectedRoute>
            },
            {
                path: "/Notifications",
                element: <ProtectedRoute><NotificationPage /></ProtectedRoute>
            },
            {
                path: "/profile",
                element: <ProtectedRoute><ProfilePage /></ProtectedRoute>
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