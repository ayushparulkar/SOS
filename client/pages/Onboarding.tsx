import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [contacts, setContacts] = useState<Array<{ name: string; phone: string; relationship: string }>>([]);
  const [newContact, setNewContact] = useState({ name: "", phone: "", relationship: "" });

  // Initial splash screen
  if (currentStep === 0 && !showOnboarding) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        {/* Animated Shield Logo */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          <svg
            className="w-full h-full animate-float"
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shield outline */}
            <path
              d="M50 10 L80 25 L80 55 C80 80 50 110 50 110 C50 110 20 80 20 55 L20 25 Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-emergency-red"
            />
            {/* Glow effect */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
              className="text-emergency-red animate-pulse"
            />
            {/* Female symbol inside shield */}
            <g transform="translate(50, 45) scale(0.8)">
              {/* Circle head */}
              <circle cx="0" cy="-8" r="6" fill="currentColor" className="text-lavender" />
              {/* Body triangle */}
              <path
                d="M -8 0 L 8 0 L 0 12 Z"
                fill="currentColor"
                className="text-lavender"
              />
            </g>
          </svg>
          {/* Glow pulse background */}
          <div className="absolute inset-0 animate-glow-pulse rounded-full" style={{
            boxShadow: "0 0 30px rgba(230, 57, 80, 0.6)"
          }} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Women Safety Emergency SOS System
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-md">
          Your Safety. Our Priority.
        </p>

        <Button
          onClick={() => setShowOnboarding(true)}
          className="bg-emergency-red hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
        >
          Get Started
        </Button>
      </div>
    );
  }

  // Onboarding steps
  const steps = [
    {
      icon: "🎙️",
      title: "Instant SOS Alerts",
      description: "Press the SOS button or scream to instantly alert your trusted contacts and nearby volunteers.",
      color: "bg-emergency-red/20",
    },
    {
      icon: "🗺️",
      title: "Smart Danger Zone Map",
      description: "Real-time map showing safe zones and high-risk areas reported by the community.",
      color: "bg-lavender/20",
    },
    {
      icon: "🤝",
      title: "Community Protection",
      description: "Connect with volunteers and NGOs who are ready to help in your area.",
      color: "bg-safe-green/20",
    },
  ];

  const currentStepData = steps[currentStep - 1];

  // Onboarding flow
  if (showOnboarding && currentStep >= 1 && currentStep <= 3) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Progress dots */}
          <div className="flex gap-2 justify-center mb-12">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  idx + 1 <= currentStep ? "bg-emergency-red w-8" : "bg-stroke"
                )}
              />
            ))}
          </div>

          {/* Step content */}
          <div className={cn("p-8 rounded-3xl border border-stroke", currentStepData.color)}>
            <div className="text-6xl text-center mb-6">{currentStepData.icon}</div>
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
              {currentStepData.title}
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              {currentStepData.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-12">
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex-1 rounded-full"
              >
                Previous
              </Button>
            )}
            {currentStep < 3 && (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex-1 bg-emergency-red hover:bg-red-700 text-white rounded-full"
              >
                Next
              </Button>
            )}
            {currentStep === 3 && (
              <Button
                onClick={() => setCurrentStep(4)}
                className="flex-1 bg-emergency-red hover:bg-red-700 text-white rounded-full"
              >
                Continue to Contacts
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Trusted contacts setup
  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Setup Trusted Contacts</h2>
          <p className="text-muted-foreground mb-8">
            Add at least one emergency contact to get started.
          </p>

          {/* Contact form */}
          <div className="space-y-4 mb-8">
            <Input
              placeholder="Name"
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              className="bg-card-bg border-stroke rounded-lg"
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              value={newContact.phone}
              onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
              className="bg-card-bg border-stroke rounded-lg"
            />
            <select
              value={newContact.relationship}
              onChange={(e) => setNewContact({ ...newContact, relationship: e.target.value })}
              className="w-full bg-card-bg border border-stroke text-foreground rounded-lg px-4 py-2"
            >
              <option value="">Select relationship</option>
              <option value="Parent">Parent</option>
              <option value="Sibling">Sibling</option>
              <option value="Friend">Friend</option>
              <option value="Partner">Partner</option>
              <option value="Other">Other</option>
            </select>
            <Button
              onClick={() => {
                if (newContact.name && newContact.phone && newContact.relationship) {
                  setContacts([...contacts, newContact]);
                  setNewContact({ name: "", phone: "", relationship: "" });
                }
              }}
              className="w-full bg-emergency-red hover:bg-red-700 text-white rounded-lg"
            >
              Add Contact
            </Button>
          </div>

          {/* Contacts list */}
          {contacts.length > 0 && (
            <div className="space-y-3 mb-8">
              {contacts.map((contact, idx) => (
                <div
                  key={idx}
                  className="bg-card-bg border border-stroke rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-foreground">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.relationship}</p>
                  </div>
                  <button
                    onClick={() => setContacts(contacts.filter((_, i) => i !== idx))}
                    className="text-emergency-red hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Next button */}
          <Link
            to={`/home?role=user`}
            onClick={() => {
              if (contacts.length === 0) {
                alert("Please add at least one contact");
              }
            }}
          >
            <Button
              disabled={contacts.length === 0}
              className="w-full bg-emergency-red hover:bg-red-700 text-white rounded-lg disabled:opacity-50"
            >
              Start Using App
            </Button>
          </Link>

          {/* Skip option */}
          <Link to={`/home?role=user`}>
            <button className="w-full mt-3 text-muted-foreground hover:text-foreground">
              Skip for now
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return null;
}
