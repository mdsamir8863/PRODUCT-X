import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./app/screens/startup/Register";
import Login from "./app/screens/startup/Login";
import IdentifyYourself from "./app/screens/startup/IdentifyYourself";
import ForgetPassword from "./app/screens/startup/ForgetPassword";
import Navbar from "./app/components/Navbar";
import NotFoundPage from "./app/screens/pages/404/NotFoundPage";
import Profit from "./app/screens/pages/Profit";
import Dashboard from "./app/screens/pages/Dashboard";
import MarketTracker from "./app/screens/pages/MarketTracker";
import FollowUp from "./app/screens/pages/FollowUp";
import Adtomic from "./app/screens/pages/Adtomic";
import Connections from "./app/screens/pages/Connections";

// Layout component with Navbar
const Layout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
    <IdentifyYourself/>
  </>
);

const Router = () => {
  return (
    <>
      <Routes>
        {/* Auth pages without Navbar */}
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<IdentifyYourself />} />
        <Route path={"/"} element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forget" element={<ForgetPassword />} />

        {/* Layout with Navbar */}
        <Route element={<Layout />}>
          {/* Screens with Navbar */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/markettracker" element={<MarketTracker />} />
          <Route path="/profits" element={<Profit />} />
          <Route path="/follow-up" element={<FollowUp />} />
          <Route path="/adtomic" element={<Adtomic />} />
          <Route path="/connections" element={<Connections />} />
        </Route>

        {/* Not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
