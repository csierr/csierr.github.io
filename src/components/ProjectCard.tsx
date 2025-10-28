import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  /** optional project image shown on flip/back */
  image?: string;
}

export const ProjectCard = ({ title, description, tech, link, github, image }: ProjectCardProps) => {
  const [flipped, setFlipped] = useState(false);

  // container styles: preserve-3d and transition handled inline for reliability
  const innerStyle: React.CSSProperties = {
    transition: 'transform 0.7s',
    transformStyle: 'preserve-3d',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
  };

  const faceStyle: React.CSSProperties = {
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden'
  };

  return (
    <div className="relative terminal-border bg-card rounded overflow-hidden" style={{ perspective: 1000 }}>
      {/* flip inner */}
      <div style={innerStyle} className="w-full">
        {/* front face */}
        <div className="p-6 bg-card" style={{ ...faceStyle, position: 'relative' }}>
          <button
            aria-label="Show project image"
            onClick={() => setFlipped(true)}
            className="absolute top-3 right-3 bg-secondary/70 hover:bg-secondary text-xs px-2 py-1 rounded text-foreground border border-border z-10"
          >
            View
          </button>

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

        {/* back face (rotated) */}
        <div
          className="absolute inset-0 bg-card rounded"
          style={{ ...faceStyle, transform: 'rotateY(180deg)' }}
        >
          <div className="w-full h-full flex items-center justify-center p-0">
            {image ? (
              <div className="w-full h-full">
                <button
                  aria-label="Back to details"
                  onClick={() => setFlipped(false)}
                  className="absolute top-3 right-3 bg-secondary/70 hover:bg-secondary text-xs px-2 py-1 rounded text-foreground border border-border z-10"
                >
                  Back
                </button>
                <img src={image} alt={title} className="w-full h-full object-cover rounded" />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">No preview available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
