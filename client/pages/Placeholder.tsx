import { useParams, useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Placeholder() {
  const { "*": route } = useParams();
  const location = useLocation();
  
  // Generate a readable title from the pathname
  const getTitle = () => {
    const path = location.pathname;
    return path
      .split("/")
      .filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card-bg border-b border-stroke p-4">
        <Link to="/home" className="flex items-center gap-2 text-lavender hover:text-lavender/80">
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-3xl font-bold text-foreground mb-4">{getTitle()}</h1>
          <p className="text-muted-foreground mb-8">
            This screen is coming soon! Continue prompting to have this page built out with the full design and functionality.
          </p>
          <Button
            asChild
            className="bg-emergency-red hover:bg-red-700 text-white rounded-lg"
          >
            <Link to="/home">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
