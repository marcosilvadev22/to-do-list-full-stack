import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/initialPage/Home";
import Login from "./components/initialPage/Login";
import Dashboard from "../src/components/dashbord/Dashbord"; // ajuste o caminho conforme seu projeto // ajuste o caminho conforme seu projeto
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={() => { }} />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>

        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}