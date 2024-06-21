import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Register from "./app/screens/startup/Register";
import Login from "./app/screens/startup/Login";
import IdentifyYourself from "./app/screens/startup/IdentifyYourself";
import ForgetPassword from "./app/screens/startup/ForgetPassword";
import Navbar from "./app/components/Navbar";
import AddressPhoneNumber from "./app/components/AddressPhoneNumber";
import NotFoundPage from "./app/screens/pages/404/NotFoundPage";
import Profit from "./app/screens/pages/Profit";
import Dashboard from "./app/screens/pages/Dashboard";
import MarketTracker from "./app/screens/pages/MarketTracker";
import FollowUp from "./app/screens/pages/FollowUp";
import Adtomic from "./app/screens/pages/Adtomic";
import Connections from "./app/screens/pages/Connections";
import Profile from "./app/screens/pages/Profile";
import ChoosePlatform from "./app/screens/pages/ChoosePlatform";
import ConnectAmazon from "./app/screens/pages/ConnectAmazon";
import AccountId from "./app/screens/startup/AccountId";
import SalesVolume from "./app/screens/pages/SalesVolume";
import Pricing from "./app/screens/pages/Pricing";
import ResetPass from "./app/screens/startup/ResetPass";
import ChangeEmail from "./app/components/auth/ChangeEmail";
import ChangePass from "./app/components/auth/ChangePass";
import AccessManagement from "./app/screens/pages/AccessManagement";
import Affiliate from './app/screens/pages/Affiliate'

const Router = () => {
  const location = useLocation();

  const isAuthPage = () => {
    const authPages = [
      "/register",
      "/onboarding",
      "/accountid",
      "/salesvolume",
      "/pricing",
      "/login",
      "/login/forget",
      "/choosePlatform",
      "/connectAmazon",
      "/change-email",
      "/change-password",
      "/affiliate",
      // "/access-management",
    ];
    return authPages.includes(location.pathname);
  };

  return (
    <>
      {!isAuthPage() && <Navbar />}

      <Routes>
        {/* Auth pages without Navbar */}
        <Route path="/register" element={<Register />} />
        <Route path={"/"} element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<IdentifyYourself />} />
        <Route path="/accountid" element={<AccountId />} />
        <Route path="/salesvolume" element={<SalesVolume />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login/forget" element={<ForgetPassword />} />
        <Route path="/choosePlatform" element={<ChoosePlatform />} />
        <Route path="/connectAmazon" element={<ConnectAmazon />} />
        <Route path="/change-email" element={<ChangeEmail />} />
        <Route path="/change-password" element={<ChangePass />} />
        <Route path="/affiliate" element={<Affiliate />} />

        {/* Screens with Navbar */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/markettracker" element={<MarketTracker />} />
        <Route path="/profits" element={<Profit />} />
        <Route path="/follow-up" element={<FollowUp />} />
        <Route path="/adtomic" element={<Adtomic />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<AddressPhoneNumber />} />
        <Route path="/reset" element={<ResetPass />} />
        <Route path="/access-management" element={<AccessManagement />} />

        {/* Not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
