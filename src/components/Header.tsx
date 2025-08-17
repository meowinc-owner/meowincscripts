import { CodeXml, Zap } from "lucide-react";

interface HeaderProps {
  scriptCount: number;
}

export const Header = ({ scriptCount }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="gradient-primary p-2 rounded-lg shadow-glow">
              <CodeXml className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Meowinc Scripts</h1>
              <p className="text-muted-foreground text-sm">Quick copy-paste scripts collection</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">{scriptCount} scripts ready</span>
          </div>
        </div>
      </div>
    </header>
  );
};