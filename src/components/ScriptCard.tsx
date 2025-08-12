import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, Eye, Download } from "lucide-react";
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
}

export const ScriptCard = ({ script, delay = 0 }: ScriptCardProps) => {
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
    <Card 
      className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
              {script.name}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {script.description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="ml-2 shrink-0">
            {script.category}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>by {script.author}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Download size={12} />
            {script.downloads.toLocaleString()}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="code-block relative group/code">
          <pre className="text-xs overflow-x-auto max-h-32 text-foreground/80">
            <code>{script.code}</code>
          </pre>
          <div className="absolute top-2 right-2 opacity-0 group-hover/code:opacity-100 transition-opacity">
            <Button
              size="sm"
              variant="secondary"
              className="h-7 w-7 p-0"
            >
              <Eye size={14} />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {script.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs px-2 py-0.5 border-primary/30 text-primary/80 hover:bg-primary/10"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Button
          onClick={handleCopy}
          className="w-full group/btn bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
          disabled={copied}
        >
          {copied ? (
            <>
              <Check size={16} className="mr-2 text-green-400" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
              Copy Script
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};