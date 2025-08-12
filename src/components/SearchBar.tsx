import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (category: string | null) => void;
  selectedCategory: string | null;
  categories: string[];
}

export const SearchBar = ({ onSearch, onFilterChange, selectedCategory, categories }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const clearFilters = () => {
    setSearchQuery("");
    onSearch("");
    onFilterChange(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 animate-fade-in">
      <div className="relative">
        <Search 
          size={20} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" 
        />
        <Input
          placeholder="Search scripts by name, description, or tags..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-12 pr-4 h-14 text-lg bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300"
        />
        {(searchQuery || selectedCategory) && (
          <Button
            onClick={clearFilters}
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-destructive/20"
          >
            <X size={16} />
          </Button>
        )}
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter size={16} />
          <span>Categories:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-background shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
                  : "border-primary/30 text-primary/80 hover:bg-primary/10"
              }`}
              onClick={() => onFilterChange(selectedCategory === category ? null : category)}
            >
              {category}
              {selectedCategory === category && (
                <X size={12} className="ml-1" />
              )}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};