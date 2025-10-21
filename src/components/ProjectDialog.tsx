import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  detailedDescription?: string;
  image: string | null;
  tags: string[];
  videoUrl?: string;
  githubLink: string;
  highlight?: boolean;
}

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-card/95 border-2 border-primary/30 shadow-glow">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground pt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Video Section */}
          {project.videoUrl && (
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border border-primary/20 shadow-lg">
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Image if no video */}
          {!project.videoUrl && project.image && (
            <div className="relative aspect-video rounded-lg overflow-hidden border border-primary/20 shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Detailed Description */}
          {project.detailedDescription && (
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/20">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-sm backdrop-blur-sm bg-secondary/80 hover:bg-secondary transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* GitHub Button */}
          <div className="flex justify-center pt-4">
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-primary hover:shadow-primary transition-all hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                Voir sur GitHub
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
