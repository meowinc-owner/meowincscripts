import { useState, useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ScriptCard } from "@/components/ScriptCard";
import { Header } from "@/components/Header";
import { FilterBar } from "@/components/FilterBar";
import { ScriptDetailModal } from "@/components/ScriptDetailModal";
import { Badge } from "@/components/ui/badge";
import { mockScripts } from "@/data/scripts";
const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedScript, setSelectedScript] = useState<typeof mockScripts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredScripts = useMemo(() => {
    return mockScripts.filter(script => {
      const matchesSearch = searchQuery === "" || 
        script.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        script.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
        script.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesFilter = activeFilter === "all" || 
        script.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()));
      
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const handleViewDetails = (script: typeof mockScripts[0]) => {
    setSelectedScript(script);
    setIsModalOpen(true);
  };
  return (
    <div className="min-h-screen bg-background">
      <Header scriptCount={mockScripts.length} />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 space-y-4">
          <SearchBar onSearch={setSearchQuery} />
          <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-transparent hover:bg-secondary/80 bg-primary/10 text-primary">
              {filteredScripts.length} scripts found
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredScripts.map((script, index) => (
            <ScriptCard 
              key={script.id} 
              script={script} 
              delay={index * 100}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </main>

      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-6 py-6 text-center">
          <p className="text-muted-foreground text-sm">
            Built for developers who love efficiency • Copy, paste, and code faster
          </p>
        </div>
      </footer>

      <ScriptDetailModal 
        script={selectedScript}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
export default Index;