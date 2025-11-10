import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-smooth">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-primary">
          معرض أعمالي
        </h1>
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("projects")}
            className="text-sm md:text-base"
          >
            المشاريع
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("about")}
            className="text-sm md:text-base"
          >
            عني
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="text-sm md:text-base"
          >
            تواصل معي
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="relative overflow-hidden transition-smooth hover:scale-105"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
