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
import ChoosePlatform from "./app/screens/pages/ChoosePlatform";
import GraphNav from "./app/components/graphCharts/OverallMarket";
import ConnectAmazon from "./app/screens/pages/ConnectAmazon";
import MarketPerformance from "./app/components/MarketList/MarketPerformance";
import AccountId from "./app/screens/startup/AccountId";
import SalesVolume from "./app/screens/pages/SalesVolume";
import Pricing from "./app/screens/pages/Pricing";

const testimonialData = [
  {
    text: "Keen Slider is fantastic! It's easy to use and looks great.",
    author: "John Doe",
  },
  {
    text: "I love how flexible Keen Slider is. It's perfect for my projects.",
    author: "Jane Smith",
  },
  // Add more testimonials as needed
];

// Layout component with Navbar
const Layout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);

const Router = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Auth pages without Navbar */}
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<IdentifyYourself />} />
        <Route path="/accountid" element={<AccountId />} />
        <Route path="/salesvolume" element={<SalesVolume />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path={"/"} element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forget" element={<ForgetPassword />} />
        <Route path="/choosePlatform" element={<ChoosePlatform />} />
        <Route path="/connectAmazon" element={<ConnectAmazon />} />

        {/* Layout with Navbar */}
        {/* <Route element={<Layout />}> */}
        {/* Screens with Navbar */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/markettracker" element={<MarketTracker />} />
        <Route path="/profits" element={<Profit />} />
        <Route path="/follow-up" element={<FollowUp />} />
        <Route path="/adtomic" element={<Adtomic />} />
        <Route path="/connections" element={<Connections />} />
        {/* </Route> */}

        {/* Graph component */}
        {/* <Route path="/revenue" element={<Revenue />} />
        <Route path="/units" element={<Units />} />
        <Route path="/products" element={<Products />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/price" element={<Price />} /> */}

        {/* Not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
