import { useState, useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ScriptCard } from "@/components/ScriptCard";
import { mockScripts } from "@/data/scripts";
import { Terminal, Star } from "lucide-react";
const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredScripts = useMemo(() => {
    return mockScripts.filter(script => {
      const matchesSearch = searchQuery === "" || script.name.toLowerCase().includes(searchQuery.toLowerCase()) || script.description.toLowerCase().includes(searchQuery.toLowerCase()) || script.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });
  }, [searchQuery]);
  const totalDownloads = mockScripts.reduce((sum, script) => sum + script.downloads, 0);
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8 animate-float">
            <Terminal size={48} className="text-primary mr-4 animate-glow-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              Meowinc Scripts
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{
          animationDelay: '200ms'
        }}>
            The ultimate collection of powerful scripts for automation, gaming, and productivity
          </p>
          
          <div className="flex items-center justify-center gap-8 mb-12 animate-fade-in" style={{
          animationDelay: '400ms'
        }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{mockScripts.length}</div>
              <div className="text-sm text-muted-foreground">Scripts Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{totalDownloads.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Star size={12} className="fill-current" />
                Average Rating
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </section>

      {/* Scripts Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {filteredScripts.length === 0 ? <div className="text-center py-20 animate-fade-in">
              <Terminal size={64} className="mx-auto text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-2xl font-semibold mb-2">No scripts found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScripts.map((script, index) => <ScriptCard key={script.id} script={script} delay={index * 100} />)}
            </div>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Terminal size={24} className="text-primary mr-2" />
            <span className="text-lg font-semibold">Meowinc Scripts</span>
          </div>
          <p className="text-muted-foreground text-sm">2025 © Meowinc Scripts</p>
        </div>
      </footer>
    </div>;
};
export default Index;