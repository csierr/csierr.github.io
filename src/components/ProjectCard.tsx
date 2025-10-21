import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export const ProjectCard = ({ title, description, tech, link, github }: ProjectCardProps) => {
  return (
    <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300 group">
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-secondary text-foreground rounded border border-border"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};
