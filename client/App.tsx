import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import UserHome from "./pages/UserHome";
import AdminDashboard from "./pages/AdminDashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/home" element={<UserHome />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />

            {/* User dashboard routes */}
            <Route path="/map" element={<Placeholder />} />
            <Route path="/contacts" element={<Placeholder />} />
            <Route path="/report" element={<Placeholder />} />
            <Route path="/safety-score" element={<Placeholder />} />
            <Route path="/fake-call" element={<Placeholder />} />
            <Route path="/volunteers" element={<Placeholder />} />
            <Route path="/community" element={<Placeholder />} />
            <Route path="/profile" element={<Placeholder />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
