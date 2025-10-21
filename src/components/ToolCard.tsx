import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  icon: LucideIcon;
  name: string;
  level?: string;
}

export const ToolCard = ({ icon: Icon, name, level }: ToolCardProps) => {
  return (
    <div className="terminal-border bg-card p-4 rounded hover:glow-primary transition-all duration-300 group flex items-center gap-4">
      <div className="p-3 bg-secondary rounded group-hover:bg-primary/20 transition-colors">
        <Icon size={24} className="text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{name}</h3>
        {level && (
          <p className="text-xs text-muted-foreground mt-1">{level}</p>
        )}
      </div>
    </div>
  );
};
