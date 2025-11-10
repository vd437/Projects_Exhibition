import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold gradient-hero bg-clip-text text-transparent">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
