import { Building2, MapPin, Users, Store } from "lucide-react";

const stats = [
  { icon: Building2, value: 2, label: "Gerentes Divisionais", color: "bg-indiana-orange/10 text-indiana-orange" },
  { icon: MapPin, value: 15, label: "Gerentes Regionais", color: "bg-indiana-blue/10 text-indiana-blue" },
  { icon: Users, value: 10, label: "Gerentes Distritais", color: "bg-indiana-purple/10 text-indiana-purple" },
  { icon: Store, value: 296, label: "Filiais Ativas", color: "bg-emerald-100 text-emerald-600" },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card rounded-xl border border-border p-4 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ${stat.color}`}>
            <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="text-2xl sm:text-4xl font-extrabold text-foreground leading-none">
            {stat.value}
          </div>
          <div className="text-[11px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wide mt-1 sm:mt-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
