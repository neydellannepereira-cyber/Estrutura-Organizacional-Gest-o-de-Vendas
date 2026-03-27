import { Phone, Mail, MapPin, Users } from "lucide-react";
import type { Regional } from "@/data/organizationalData";

interface RegionalCardProps {
  regional: Regional;
}

const RegionalCard = ({ regional }: RegionalCardProps) => {
  const hasDistrital = regional.distritais.length > 0;

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 hover:border-indiana-blue transition-all duration-300">
      {/* Header */}
      <div
        className={`px-4 sm:px-5 py-4 text-white ${
          hasDistrital
            ? "bg-gradient-to-br from-indiana-purple to-[#7B4FA3]"
            : "bg-gradient-to-br from-indiana-blue to-[#0066FF]"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-white/25 backdrop-blur-sm px-3 py-1 rounded-lg font-extrabold text-sm">
            {regional.codigo}
          </span>
          <MapPin className="w-4 h-4 opacity-80" />
        </div>
        <p className="text-sm font-medium opacity-95 mb-1">
          <Users className="w-3.5 h-3.5 inline mr-1.5 opacity-80" />
          {regional.gerente}
        </p>
        <div className="flex flex-col gap-0.5 text-[11px] opacity-90">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3" /> {regional.telefone}
          </span>
          <span className="flex items-center gap-1.5 truncate">
            <Mail className="w-3 h-3" /> {regional.email}
          </span>
        </div>
        <span className="inline-block mt-2 bg-white/25 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
          🏪 {regional.total_filiais} filiais
        </span>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 max-h-[400px] overflow-y-auto scrollbar-thin">
        {/* Distritais */}
        {regional.distritais.map((distrital, idx) => (
          <div key={idx} className="mb-4 pb-4 border-b border-border last:border-b-0 last:pb-0">
            <div className="flex items-center gap-2.5 mb-3 p-2.5 bg-muted rounded-lg border-l-[3px] border-l-indiana-purple">
              <div className="w-8 h-8 bg-indiana-purple rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0">
                👤
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-indiana-purple text-[13px]">{distrital.nome}</p>
                <div className="text-[10px] text-muted-foreground flex flex-col gap-0.5">
                  {distrital.telefone && <span>📞 {distrital.telefone}</span>}
                  {distrital.email && <span className="truncate">✉ {distrital.email}</span>}
                </div>
              </div>
              <span className="bg-purple-100 text-indiana-purple px-2.5 py-0.5 rounded-full text-[11px] font-bold flex-shrink-0">
                {distrital.filiais.length}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-1.5">
              {distrital.filiais.map((f) => (
                <div
                  key={f.codigo}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-purple-50 rounded-md text-xs border border-transparent hover:bg-purple-100 hover:border-indiana-purple/30 transition-colors"
                >
                  <span className="font-bold text-indiana-purple text-[11px]">#{f.codigo}</span>
                  <span className="text-foreground font-medium truncate">{f.nome}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Filiais Diretas */}
        {regional.filiais_diretas.length > 0 && (
          <>
            {hasDistrital && <div className="h-px bg-border my-3" />}
            <div className="text-[11px] text-muted-foreground font-bold uppercase tracking-wide mb-2.5 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-indiana-blue rounded" />
              Filiais Diretas ({regional.filiais_diretas.length})
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-1.5">
              {regional.filiais_diretas.map((f) => (
                <div
                  key={f.codigo}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-muted rounded-md text-xs border border-transparent hover:bg-indiana-blue/5 hover:border-indiana-blue/30 transition-colors"
                >
                  <span className="font-bold text-indiana-blue text-[11px]">#{f.codigo}</span>
                  <span className="text-foreground font-medium truncate">{f.nome}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegionalCard;
