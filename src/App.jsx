import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ProtectedRoute from "./provider/protectedRoute";
import HomePage from "./pages/homePage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={
            <ProtectedRoute><HomePage /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
