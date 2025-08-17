import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  const filters = [
    { id: "all", label: "All" },
    { id: "roblox", label: "Roblox" }
  ];

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Filter by category:</span>
      </div>
      {filters.map((filter) => (
        <Button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          variant={activeFilter === filter.id ? "default" : "outline"}
          className="transition-all duration-200"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};