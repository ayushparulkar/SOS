import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [step, setStep] = useState<"role" | "credentials">("role");
  const [selectedRole, setSelectedRole] = useState<"user" | "volunteer" | "admin" | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const roles = [
    {
      id: "user" as const,
      title: "User",
      icon: "👩",
      description: "Woman seeking safety",
      color: "bg-emergency-red/20",
      borderColor: "border-emergency-red",
    },
    {
      id: "volunteer" as const,
      title: "Volunteer",
      icon: "🤝",
      description: "Community responder",
      color: "bg-safe-green/20",
      borderColor: "border-safe-green",
    },
    {
      id: "admin" as const,
      title: "Admin",
      icon: "⚙️",
      description: "System manager",
      color: "bg-yellow-500/20",
      borderColor: "border-yellow-500",
    },
  ];

  if (step === "role") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-emergency-red/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-emergency-red" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Women Safety SOS</h1>
            <p className="text-muted-foreground">Select your role to continue</p>
          </div>

          {/* Role selection cards */}
          <div className="space-y-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => {
                  setSelectedRole(role.id);
                  setStep("credentials");
                }}
                className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                  selectedRole === role.id
                    ? `${role.color} ${role.borderColor}`
                    : "bg-card-bg border-stroke hover:border-stroke"
                }`}
              >
                <div className="text-4xl mb-3">{role.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-1">{role.title}</h3>
                <p className="text-sm text-muted-foreground">{role.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Back button */}
        <button
          onClick={() => setStep("role")}
          className="text-muted-foreground hover:text-foreground mb-8 flex items-center gap-2"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Login as {selectedRole?.charAt(0).toUpperCase()}{selectedRole?.slice(1)}
          </h2>
          <p className="text-muted-foreground">Enter your credentials</p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-8">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-card-bg border-stroke rounded-lg"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-card-bg border-stroke rounded-lg"
          />
        </div>

        {/* Login button */}
        {selectedRole === "user" && (
          <Link to="/onboarding">
            <Button className="w-full bg-emergency-red hover:bg-red-700 text-white rounded-lg py-3">
              Login
            </Button>
          </Link>
        )}
        {selectedRole === "volunteer" && (
          <Link to="/volunteer-dashboard">
            <Button className="w-full bg-safe-green hover:bg-green-700 text-white rounded-lg py-3">
              Login
            </Button>
          </Link>
        )}
        {selectedRole === "admin" && (
          <Link to="/admin-dashboard">
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-3">
              Login
            </Button>
          </Link>
        )}

        {/* Signup link */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          Don't have an account?{" "}
          <button className="text-lavender hover:text-lavender/80">Sign up</button>
        </p>
      </div>
    </div>
  );
}
