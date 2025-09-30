import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="w-9 h-9 p-0">
        <span className="sr-only">Toggle theme</span>
        🌙
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 p-0 border-border/50 hover:border-primary transition-auction"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "dark" ? "☀️" : "🌙"}
    </Button>
  );
};

export default ThemeToggle;