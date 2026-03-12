import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shield, Map, Users, AlertTriangle, Heart, Phone, HelpCircle, Settings, Home, MessageCircle } from "lucide-react";

export default function UserHome() {
  const [sosActive, setSosActive] = useState(false);
  const [sosCountdown, setSosCountdown] = useState(5);
  const [isHolding, setIsHolding] = useState(false);
  const [holdTime, setHoldTime] = useState(0);

  // SOS activation
  const handleSOSHold = (e: any) => {
    e.preventDefault();
    setIsHolding(true);
    let time = 0;
    const interval = setInterval(() => {
      time += 10;
      setHoldTime(time);
      if (time >= 2000) {
        clearInterval(interval);
        triggerSOS();
      }
    }, 10);

    const handleMouseUp = () => {
      clearInterval(interval);
      setIsHolding(false);
      setHoldTime(0);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
  };

  const triggerSOS = () => {
    setSosActive(true);
    setSosCountdown(5);
    setIsHolding(false);
    setHoldTime(0);

    // Countdown timer
    const interval = setInterval(() => {
      setSosCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // SOS would be sent here
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const quickCards = [
    {
      icon: "🗺️",
      title: "Danger Zone Map",
      description: "View safe & dangerous areas",
      path: "/map",
      color: "bg-blue-500/20",
    },
    {
      icon: "👥",
      title: "Trusted Contacts",
      description: "Manage emergency contacts",
      path: "/contacts",
      color: "bg-purple-500/20",
    },
    {
      icon: "📋",
      title: "Report Incident",
      description: "Report suspicious activity",
      path: "/report",
      color: "bg-orange-500/20",
    },
    {
      icon: "🏆",
      title: "Safety Score",
      description: "Your safety insights",
      path: "/safety-score",
      color: "bg-green-500/20",
    },
    {
      icon: "📞",
      title: "Fake Call",
      description: "Schedule a fake call",
      path: "/fake-call",
      color: "bg-pink-500/20",
    },
    {
      icon: "🤝",
      title: "Volunteers & NGOs",
      description: "Connect with helpers",
      path: "/volunteers",
      color: "bg-lavender/20",
    },
  ];

  if (sosActive) {
    return (
      <div className="min-h-screen bg-emergency-red flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
        {/* Siren animation */}
        <div className="absolute inset-0 animate-siren opacity-20" />

        <div className="relative z-10 text-center max-w-md">
          <div className="mb-8 animate-bounce">
            <Shield className="w-20 h-20 mx-auto text-white mb-4" />
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">🚨 SOS ACTIVATED</h1>

          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-8 mb-8">
            <p className="text-white/80 text-sm mb-4">Emergency alert sent in</p>
            <div className="text-6xl font-bold text-white mb-4">{sosCountdown}s</div>
            <Button
              onClick={() => setSosActive(false)}
              className="w-full bg-white text-emergency-red hover:bg-white/90 rounded-full py-3 text-lg font-bold"
            >
              CANCEL
            </Button>
          </div>

          <div className="space-y-4 text-white text-lg">
            <div className="flex items-center gap-3">
              <span className="animate-pulse">✓</span>
              <span>📍 Live Location Sent to Contacts</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="animate-pulse">✓</span>
              <span>🎙️ Audio Recording Started</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="animate-pulse">✓</span>
              <span>📲 Nearby NGOs Notified</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="animate-pulse">✓</span>
              <span>👥 Volunteers Alerted</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-card-bg border-b border-stroke p-4 md:p-6 flex items-center gap-3">
        <div className="relative w-10 h-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 5 L75 20 L75 45 C75 70 50 95 50 95 C50 95 25 70 25 45 L25 20 Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-emergency-red"
            />
            <g transform="translate(50, 40) scale(0.6)">
              <circle cx="0" cy="-6" r="4" fill="currentColor" className="text-lavender" />
              <path d="M -6 0 L 6 0 L 0 8 Z" fill="currentColor" className="text-lavender" />
            </g>
          </svg>
        </div>
        <div>
          <h1 className="font-bold text-foreground">Women Safety SOS</h1>
          <p className="text-xs text-muted-foreground">Your Safety. Our Priority.</p>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 md:px-6 py-8 space-y-8">
        {/* Status indicators */}
        <div className="space-y-3">
          <div className="bg-card-bg border border-stroke rounded-lg p-4 flex items-center justify-between">
            <span className="text-foreground">🎙️ Scream Detection</span>
            <span className="text-safe-green font-semibold">ON</span>
          </div>
          <div className="bg-card-bg border border-stroke rounded-lg p-4 flex items-center justify-between">
            <span className="text-foreground">📍 Location Tracking</span>
            <span className="text-safe-green font-semibold">ACTIVE</span>
          </div>
        </div>

        {/* SOS Button */}
        <div className="flex flex-col items-center gap-4">
          <button
            onMouseDown={handleSOSHold}
            onTouchStart={handleSOSHold}
            className={cn(
              "relative w-40 h-40 md:w-48 md:h-48 rounded-full font-bold text-white text-3xl md:text-4xl transition-all",
              "bg-gradient-to-br from-emergency-red to-red-700 hover:scale-105",
              isHolding ? "animate-siren" : "animate-glow-pulse",
              sosCountdown === 0 && "opacity-50"
            )}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              🆘
            </div>
            {isHolding && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-white rounded-full opacity-50" style={{
                  animation: `spin ${2000 - holdTime}ms linear infinite`
                }} />
              </div>
            )}
          </button>
          <p className="text-center text-muted-foreground text-sm">
            Hold for 2 seconds to activate
          </p>
          <p className="text-center text-lavender text-xs">
            💡 Press Volume Down 3× to activate silently
          </p>
        </div>

        {/* Quick access grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickCards.map((card) => (
            <Link key={card.path} to={card.path}>
              <div className={cn(
                "p-6 rounded-2xl border border-stroke cursor-pointer hover:border-lavender transition-all",
                card.color
              )}>
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-foreground mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card-bg border-t border-stroke flex justify-around items-center h-20 md:h-24">
        <Link to="/home" className="flex flex-col items-center gap-1 text-emergency-red">
          <Home className="w-6 h-6" />
          <span className="text-xs font-semibold">Home</span>
        </Link>
        <Link to="/map" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
          <Map className="w-6 h-6" />
          <span className="text-xs font-semibold">Map</span>
        </Link>
        <Link to="/community" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
          <Users className="w-6 h-6" />
          <span className="text-xs font-semibold">Community</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
          <Settings className="w-6 h-6" />
          <span className="text-xs font-semibold">Profile</span>
        </Link>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
