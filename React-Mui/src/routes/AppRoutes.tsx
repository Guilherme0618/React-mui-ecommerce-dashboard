import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/LoginPage/Login";
import Home from "../pages/Home/Home";
import RegisterPage from "../pages/Register/RegisterPage";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import ForgetPassword from "../pages/ForgotPassword/ForgotPassword";
import StatisticsPage from "../pages/StatisticsPage/StatiscsPage";
import CustomerData from "../pages/CustomerData/CustomerData";
import SalesPage from "../pages/SalesPage/SalesPage";

type AppRoutesProps = {
  isAuthenticated: boolean;
};

function AppRoutes({ isAuthenticated }: AppRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route
        path="/login"
        element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ForgetPassword />
          </ProtectedRoute>
        }
      />

      <Route
        path="/home"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/statistics"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <StatisticsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <CustomerData />
          </ProtectedRoute>
        }
      />

      <Route
        path="/sales"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <SalesPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRoutes;
