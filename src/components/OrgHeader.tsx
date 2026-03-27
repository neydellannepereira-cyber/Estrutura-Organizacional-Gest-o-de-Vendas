import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import indianaLogo from "@/assets/indiana-logo.png";
import { DADOS } from "@/data/organizationalData";
import * as XLSX from "xlsx";

const exportToExcel = () => {
  const rows: Record<string, string | number>[] = [];

  for (const [divNome, regionais] of Object.entries(DADOS)) {
    for (const r of regionais) {
      for (const d of r.distritais) {
        for (const f of d.filiais) {
          rows.push({
            Divisional: divNome,
            "Regional (Código)": r.codigo,
            "Gerente Regional": r.gerente,
            "Telefone Regional": r.telefone,
            "Email Regional": r.email,
            "Gerente Distrital": d.nome,
            "Telefone Distrital": d.telefone,
            "Email Distrital": d.email,
            "Código Filial": f.codigo,
            "Nome Filial": f.nome,
            Tipo: "Distrital",
          });
        }
      }
      for (const f of r.filiais_diretas) {
        rows.push({
          Divisional: divNome,
          "Regional (Código)": r.codigo,
          "Gerente Regional": r.gerente,
          "Telefone Regional": r.telefone,
          "Email Regional": r.email,
          "Gerente Distrital": "",
          "Telefone Distrital": "",
          "Email Distrital": "",
          "Código Filial": f.codigo,
          "Nome Filial": f.nome,
          Tipo: "Direta",
        });
      }
    }
  }

  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Estrutura Organizacional");

  ws["!cols"] = [
    { wch: 14 }, { wch: 10 }, { wch: 30 }, { wch: 16 }, { wch: 35 },
    { wch: 28 }, { wch: 16 }, { wch: 35 }, { wch: 10 }, { wch: 25 }, { wch: 10 },
  ];

  XLSX.writeFile(wb, "Indiana_Farma_Estrutura_Organizacional.xlsx");
};

const OrgHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b-2 border-indiana-blue shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={indianaLogo}
            alt="Indiana Farma"
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-lg sm:text-2xl font-bold text-foreground tracking-tight">
              Estrutura Organizacional
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              Gestão de Vendas
            </p>
          </div>
        </div>
        <Button
          onClick={exportToExcel}
          className="bg-indiana-blue hover:bg-indiana-blue/90 text-white font-semibold gap-2"
        >
          <Download className="w-4 h-4" />
          Exportar Excel
        </Button>
      </div>
    </header>
  );
};

export default OrgHeader;
