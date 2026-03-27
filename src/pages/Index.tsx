import { useState, useMemo } from "react";
import OrgHeader from "@/components/OrgHeader";
import StatsCards from "@/components/StatsCards";
import SearchBar from "@/components/SearchBar";
import DivisionalSection from "@/components/DivisionalSection";
import { DADOS } from "@/data/organizationalData";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");

  const filteredData = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();
    const result: typeof DADOS = {};

    for (const [divNome, regionais] of Object.entries(DADOS)) {
      if (currentFilter !== "all" && divNome !== currentFilter) continue;

      if (search) {
        const filtered = regionais.filter((r) => {
          const matchRegional =
            r.codigo.toLowerCase().includes(search) ||
            r.gerente.toLowerCase().includes(search) ||
            r.telefone?.includes(search) ||
            r.email?.toLowerCase().includes(search);

          const matchDistrital = r.distritais.some(
            (d) =>
              d.nome.toLowerCase().includes(search) ||
              d.telefone?.includes(search) ||
              d.email?.toLowerCase().includes(search) ||
              d.filiais.some(
                (f) =>
                  f.nome.toLowerCase().includes(search) ||
                  f.codigo.toString().includes(search)
              )
          );

          const matchFilial = r.filiais_diretas.some(
            (f) =>
              f.nome.toLowerCase().includes(search) ||
              f.codigo.toString().includes(search)
          );

          return matchRegional || matchDistrital || matchFilial;
        });

        if (filtered.length > 0) result[divNome] = filtered;
      } else {
        result[divNome] = regionais;
      }
    }

    return result;
  }, [searchTerm, currentFilter]);

  const hasResults = Object.keys(filteredData).length > 0;

  return (
    <div className="min-h-screen bg-background">
      <OrgHeader />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
        <StatsCards />
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
        />

        {hasResults ? (
          Object.entries(filteredData).map(([divNome, regionais]) => (
            <DivisionalSection key={divNome} nome={divNome} regionais={regionais} />
          ))
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg">Nenhum resultado encontrado</p>
          </div>
        )}
      </main>

      <footer className="text-center py-8 text-muted-foreground text-sm">
        <p>
          <strong>Indiana Farma</strong> © 2026 • Dashboard Organizacional
        </p>
        <p className="mt-2 text-xs">
          Atualizado em {new Date().toLocaleDateString("pt-BR")}
        </p>
      </footer>
    </div>
  );
};

export default Index;
