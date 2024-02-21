import { Routes, Route } from "react-router-dom";
import Navbar from "./app/components/Navbar";
import Register from "./app/screens/startup/Register";
import PrivacyPolicy from "./app/components/PrivacyPolicy";
import Login from "./app/screens/startup/Login";
import IdentifyYourself from "./app/screens/startup/IdentifyYourself";
const Router = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        {/* Auth pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/register/onboarding" element={<IdentifyYourself />} />
        <Route path="/login" element={<Login />} />

        {/* Footer */}
        {/* <Route path="/" element={<PrivacyPolicy />} /> */}
      </Routes>
    </>
  );
};

export default Router;
