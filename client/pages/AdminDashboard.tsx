import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, Users, AlertTriangle, Building2, Map, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const menuItems = [
    { icon: BarChart3, label: "Overview", path: "#" },
    { icon: Users, label: "User Management", path: "#" },
    { icon: Users, label: "Volunteer Management", path: "#" },
    { icon: Building2, label: "NGO Management", path: "#" },
    { icon: Map, label: "Danger Zone Control", path: "#" },
    { icon: AlertTriangle, label: "SOS Alert Management", path: "#" },
    { icon: Settings, label: "Broadcast & Notifications", path: "#" },
    { icon: BarChart3, label: "Analytics & Reports", path: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card-bg border-b border-stroke p-4 md:p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Admin Control Center</h1>
          <p className="text-sm text-muted-foreground">Women Safety Emergency SOS System</p>
        </div>
        <Link to="/" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      {/* Main content */}
      <div className="px-4 md:px-6 py-8">
        {/* Stats bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card-bg border border-stroke rounded-lg p-6">
            <div className="text-2xl font-bold text-emergency-red mb-1">0</div>
            <p className="text-sm text-muted-foreground">🆘 Active SOS Alerts</p>
          </div>
          <div className="bg-card-bg border border-stroke rounded-lg p-6">
            <div className="text-2xl font-bold text-lavender mb-1">0</div>
            <p className="text-sm text-muted-foreground">👥 Registered Users</p>
          </div>
          <div className="bg-card-bg border border-stroke rounded-lg p-6">
            <div className="text-2xl font-bold text-safe-green mb-1">0</div>
            <p className="text-sm text-muted-foreground">🤝 Active Volunteers</p>
          </div>
          <div className="bg-card-bg border border-stroke rounded-lg p-6">
            <div className="text-2xl font-bold text-warning-orange mb-1">0</div>
            <p className="text-sm text-muted-foreground">🏢 Registered NGOs</p>
          </div>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item) => (
            <Link key={item.label} to={item.path}>
              <div className="bg-card-bg border border-stroke rounded-lg p-6 hover:border-lavender transition-all cursor-pointer text-center">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-lavender" />
                <p className="font-semibold text-foreground">{item.label}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="mt-8 bg-card-bg border border-stroke rounded-lg p-8 text-center">
          <p className="text-muted-foreground text-lg">
            🚀 Admin dashboard features coming soon!<br />
            <span className="text-sm">Continue prompting to build out full admin functionality.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
