import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
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

interface ScriptDetailModalProps {
  script: Script | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ScriptDetailModal = ({ script, isOpen, onClose }: ScriptDetailModalProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  if (!script) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{script.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{script.category}</Badge>
            <span className="text-sm text-muted-foreground">by {script.author}</span>
          </div>
          
          <p className="text-muted-foreground">{script.description}</p>
          
          <div className="flex flex-wrap gap-1">
            {script.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Script Code</h3>
            <pre className="bg-code-bg border border-code-border rounded-lg p-4 overflow-x-auto text-sm text-white">
              <code>{script.code}</code>
            </pre>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Download className="h-4 w-4" />
            <span>{script.downloads.toLocaleString()} downloads</span>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleCopy} className="flex-1">
              <Copy className="h-4 w-4 mr-2" />
              {copied ? "Copied!" : "Copy Script"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};