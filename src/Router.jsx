import { Routes, Route } from "react-router-dom";
import Register from "./app/screens/startup/Register";
// import PrivacyPolicy from "./app/components/PrivacyPolicy";
import Login from "./app/screens/startup/Login";
import IdentifyYourself from "./app/screens/startup/IdentifyYourself";
import ForgetPassword from "./app/screens/startup/ForgetPassword";
import Navbar from "./app/components/Navbar";
import Tools from "./app/components/Tools";
import NotFoundPage from "./app/screens/pages/404/NotFoundPage";
import Profit from "./app/screens/pages/Profit";
import SideNav from "./app/components/SideNav";

import Dashboard from "./app/screens/pages/Dashboard";
import MarketTracker from "./app/screens/pages/MarketTracker";
import FollowUp from "./app/screens/pages/FollowUp";
import Adtomic from "./app/screens/pages/Adtomic";
const Router = () => {
  const testimonials = [
    {
      text: "This is a fantastic testimonial.",
      author: "John Doe",
    },
    {
      text: "Another great testimonial.",
      author: "Jane Smith",
    },
  ];

  const items = [
    {
      title: "Accordion Item 1",
      content: "Content for Accordion Item 1",
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
    },
  ];
  return (
    <>
      <Navbar />
      {/* <Testimonials /> */}
      <Routes>
        {/* <TestimonialSlider /> */}
        {/* Test Routes */}

        {/* <Route path="/" element={<Navbar />} /> */}
        {/* Auth pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<IdentifyYourself />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forget" element={<ForgetPassword />} />

        {/* screens */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/markettracker" element={<MarketTracker />} />

        <Route path="profits" element={<Profit />} />
        <Route path="follow-up" element={<FollowUp />} />
        <Route path="adtomic" element={<Adtomic />} />

        {/* Footer */}
        {/* <Route path="/" element={<PrivacyPolicy />} /> */}

        {/* If no routes match, show the NotFoundPage component */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="sidenav" element={<SideNav />} />
      </Routes>
      {/* <TestimonialSlider testimonials={testimonials} /> */}
      {/* <Accordion items={items} /> */}
    </>
  );
};

export default Router;
