import { Building2 } from "lucide-react";

const OrgHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b-2 border-indiana-blue shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indiana-blue flex items-center justify-center">
            <Building2 className="w-7 h-7 text-white" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Estrutura Organizacional
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              Gestão de Vendas • Indiana Farma
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OrgHeader;
