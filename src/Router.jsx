import { Routes, Route } from "react-router-dom";
import Register from "./app/screens/startup/Register";
// import PrivacyPolicy from "./app/components/PrivacyPolicy";
import Login from "./app/screens/startup/Login";
import IdentifyYourself from "./app/screens/startup/IdentifyYourself";
import ForgetPassword from "./app/screens/startup/ForgetPassword";
import NotFoundPage from "./app/screens/404/NotFoundPage";
import Navbar from "./app/components/Navbar";
import Tools from "./app/components/Tools";
const Router = () => {
  return (
    <>
      <Routes>
        {/* Test Routes */}
        <Route path="/test" element={<Tools />} />

        <Route path="/" element={<Navbar />} />
        {/* Auth pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<IdentifyYourself />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forget" element={<ForgetPassword />} />

        {/* Footer */}
        {/* <Route path="/" element={<PrivacyPolicy />} /> */}

        {/* If no routes match, show the NotFoundPage component */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
