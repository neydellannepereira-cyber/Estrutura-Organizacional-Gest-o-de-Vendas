import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import RegionalCard from "./RegionalCard";
import type { Regional } from "@/data/organizationalData";
import { useState } from "react";

interface DivisionalSectionProps {
  nome: string;
  regionais: Regional[];
}

const DivisionalSection = ({ nome, regionais }: DivisionalSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const totalFiliais = regionais.reduce((acc, r) => acc + r.total_filiais, 0);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="bg-card rounded-2xl border-2 border-border overflow-hidden shadow-lg mb-6 sm:mb-8">
        <CollapsibleTrigger className="w-full">
          <div className="bg-gradient-to-br from-indiana-orange to-[#FF6B3D] px-5 sm:px-7 py-5 sm:py-6 text-white text-left cursor-pointer hover:from-[#FF7B4D] hover:to-[#FF5B2D] transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight mb-2">
                  {nome}
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="bg-white/25 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                    📍 {regionais.length} Regionais
                  </span>
                  <span className="bg-white/25 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                    🏪 {totalFiliais} Filiais
                  </span>
                </div>
              </div>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="p-4 sm:p-6 lg:p-7">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {regionais.map((regional) => (
                <RegionalCard key={regional.codigo} regional={regional} />
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default DivisionalSection;
