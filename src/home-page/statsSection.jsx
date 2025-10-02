"use client";

import { Briefcase, Building, Users, MapPin } from "lucide-react";

const stats = [
  { id: 1, label: "Active Jobs", value: "10,000+", icon: Briefcase },
  { id: 2, label: "Companies", value: "5,000+", icon: Building },
  { id: 3, label: "Job Seekers", value: "50,000+", icon: Users },
  { id: 4, label: "Countries", value: "100+", icon: MapPin },
];

export default function StatsSection() {
  return (
    <section className="bg-[#FAE9D7]">
      <div className="max-w-7xl mx-auto px-5 py-25 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-[#30232d]">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 mb-4">
              <stat.icon className="w-20 h-20 text-[#D55053]" />
            </div>

            <h3 className="text-3xl font-bold">{stat.value}</h3>

            <p className="mt-2 sm:text-lg text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
