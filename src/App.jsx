import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ProtectedRoute from "./provider/protectedRoute";
import HomePage from "./pages/homePage";
import ProductDetailsPage from "./pages/productDetailsPage";
import ProfilePage from "./pages/profilePage";
import AdFormPage from "./pages/adFormPage";
import EditProfilePage from "./pages/editProfilePage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/product_details" element={<ProtectedRoute><ProductDetailsPage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/ad_form" element={<ProtectedRoute><AdFormPage /></ProtectedRoute>} />
        <Route path="/edit_profile" element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
