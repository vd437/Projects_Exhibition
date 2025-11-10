import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

const ProjectsGrid = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { value: "all", label: "جميع المشاريع" },
    { value: "app", label: "تطبيقات" },
    { value: "course", label: "دورات" },
    { value: "ecommerce", label: "متاجر" },
    { value: "saas", label: "SaaS" },
    { value: "corporate", label: "شركات" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(filter));

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">المشاريع</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            استكشف مجموعة متنوعة من صفحات الهبوط الاحترافية
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={filter === cat.value ? "default" : "outline"}
              onClick={() => setFilter(cat.value)}
              className="transition-smooth"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
