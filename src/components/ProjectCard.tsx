import { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-soft hover:shadow-hover transition-smooth cursor-pointer animate-scale-in">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.nameAr}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col items-center justify-center p-6 text-white">
          <h3 className="text-2xl font-bold mb-2 text-center">{project.nameAr}</h3>
          <p className="text-sm text-center mb-4 line-clamp-2">{project.descriptionAr}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-smooth"
          >
            زيارة الموقع
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{project.nameAr}</h3>
          <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
            {project.categoryAr}
          </span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.fullDescriptionAr}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
