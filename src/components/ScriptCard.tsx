import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Script {
  id: string;
  name: string;
  description: string;
  code: string;
  category: string;
  tags: string[];
  downloads: number;
  author: string;
}

interface ScriptCardProps {
  script: Script;
  delay?: number;
  onViewDetails: (script: Script) => void;
}

export const ScriptCard = ({ script, delay = 0, onViewDetails }: ScriptCardProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script.code);
      setCopied(true);
      toast({
        title: "Script copied!",
        description: `${script.name} has been copied to your clipboard.`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy script to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="gradient-card shadow-card border-border hover:shadow-glow transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-foreground">{script.name}</h3>
            <p className="text-muted-foreground text-sm mb-3">{script.description}</p>
          </div>
          <Badge variant="secondary" className="ml-3 text-xs">Lua</Badge>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {script.tags.map((tag, index) => (
            <Badge
              key={tag}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "text-xs bg-primary/10 text-primary border-primary/20" : "text-foreground text-xs"}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="relative">
          <pre className="bg-code-bg border border-code-border rounded-lg p-4 overflow-x-auto text-sm mb-4 max-h-48">
            <code>
              loadstring(game:HttpGet(<span style={{color: 'hsl(var(--syntax-string))'}}>"{script.code.split('"')[1]}"</span>,true))()
            </code>
          </pre>
          <div className="flex gap-2">
            <Button
              onClick={handleCopy}
              variant="secondary"
              className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Copy className="h-4 w-4" />
              Copy
            </Button>
            <Button
              onClick={() => onViewDetails(script)}
              variant="outline"
              className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ExternalLink className="h-4 w-4" />
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};