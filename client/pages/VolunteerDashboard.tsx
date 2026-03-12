import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, MapPin, Clock, Star, History } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VolunteerDashboard() {
  const menuItems = [
    { icon: AlertTriangle, label: "Active Alerts", description: "Incoming SOS requests" },
    { icon: MapPin, label: "Response Map", description: "View coverage area" },
    { icon: History, label: "Incident History", description: "Past responses" },
    { icon: MapPin, label: "Danger Zone Map", description: "Community reports" },
    { icon: Star, label: "Profile & Availability", description: "Your settings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card-bg border-b border-stroke p-4 md:p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Volunteer Panel</h1>
          <p className="text-sm text-muted-foreground">Women Safety Emergency SOS System</p>
        </div>
        <Link to="/" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      {/* Main content */}
      <div className="px-4 md:px-6 py-8">
        {/* Status card */}
        <div className="bg-card-bg border border-stroke rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-foreground">Your Status</h2>
              <p className="text-sm text-muted-foreground">Set your availability</p>
            </div>
            <div className="flex gap-2">
              <Button className="bg-safe-green hover:bg-green-700 text-white rounded-full px-6">
                🟢 Available
              </Button>
              <Button className="bg-stroke hover:bg-stroke/80 text-foreground rounded-full px-6">
                🔴 Unavailable
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card-bg border border-stroke rounded-lg p-6">
            <div className="text-2xl font-bold text-emergency-red mb-1">0</div>
            <p className="text-sm text-muted-foreground">Alerts Received</p>
          </div>
          <div className="bg-card-bg border border-stroke rounded-lg p-6">
            <div className="text-2xl font-bold text-lavender mb-1">0</div>
            <p className="text-sm text-muted-foreground">Responded</p>
          </div>
          <div className="bg-card-bg border border-stroke rounded-lg p-6">
            <div className="text-2xl font-bold text-safe-green mb-1">0</div>
            <p className="text-sm text-muted-foreground">Resolved</p>
          </div>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <Link key={item.label} to="#">
              <div className="bg-card-bg border border-stroke rounded-lg p-6 hover:border-safe-green transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <item.icon className="w-8 h-8 text-safe-green flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="mt-8 bg-card-bg border border-stroke rounded-lg p-8 text-center">
          <p className="text-muted-foreground text-lg">
            🚀 Volunteer features coming soon!<br />
            <span className="text-sm">Continue prompting to build out full volunteer functionality.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
