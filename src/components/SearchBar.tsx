import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { key: "all", label: "Todas" },
  { key: "LUCIMAR", label: "Lucimar" },
  { key: "GERVANIA", label: "Gervania" },
];

const SearchBar = ({ searchTerm, onSearchChange, currentFilter, onFilterChange }: SearchBarProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-4 sm:p-6 shadow-sm mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por regional, gerente, filial ou código..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-11"
          />
        </div>
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => onFilterChange(f.key)}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all whitespace-nowrap ${
                currentFilter === f.key
                  ? "bg-indiana-blue border-indiana-blue text-white"
                  : "bg-card border-border text-foreground hover:border-indiana-blue hover:text-indiana-blue"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
