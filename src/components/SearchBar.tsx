import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search scripts by name, description, or tags..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10 bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 transition-colors"
        />
      {searchQuery && (
        <Button
          onClick={clearSearch}
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-destructive/20"
        >
          <X size={16} />
        </Button>
      )}
    </div>
  );
};