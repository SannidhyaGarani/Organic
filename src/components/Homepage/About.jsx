import React from 'react';
import { ShieldCheck, Leaf, FlaskConical, BadgeCheck } from 'lucide-react';

const TrustItem = ({ Icon, title, description, index }) => (
  <div className="relative group p-8 rounded-[2rem] transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(30,61,43,0.08)]">
    {/* Background numbering (Archival look) */}
    <span className="absolute top-6 right-8 text-5xl font-serif italic text-[#1E3D2B]/5 group-hover:text-[#6E8B3D]/10 transition-colors duration-500">
      0{index + 1}
    </span>
    
    <div className="relative z-10">
      <div className="mb-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-[#1E3D2B]/5 shadow-sm group-hover:scale-110 group-hover:bg-[#1E3D2B] transition-all duration-500">
        <Icon 
          strokeWidth={1.5} 
          size={28} 
          className="text-[#6E8B3D] group-hover:text-[#F7F6F2] transition-colors duration-500" 
        />
      </div>
      
      <h3 className="text-lg font-bold text-[#1E3D2B] mb-3 flex items-center gap-2">
        {title}
        <div className="h-px w-0 group-hover:w-8 bg-[#6E8B3D] transition-all duration-500" />
      </h3>
      
      <p className="text-sm leading-[1.8] text-[#6B4F3F] opacity-80 group-hover:opacity-100 transition-opacity">
        {description}
      </p>
    </div>
  </div>
);

const BrandTrust = () => {
  const trustPoints = [
    {
      Icon: Leaf,
      title: "100% Natural",
      description: "Pure superfood powders made from farm-fresh ingredients without fillers or synthetic additives."
    },
    {
      Icon: ShieldCheck,
      title: "Zero Toxins",
      description: "Clean formulations with zero artificial colors, flavors, or heavy-metal contaminants."
    },
    {
      Icon: FlaskConical,
      title: "Lab Verified",
      description: "Each small batch is stringently tested for safety, purity, and peak nutritional potency."
    },
    {
      Icon: BadgeCheck,
      title: "GMP Standard",
      description: "Ethically manufactured in world-class facilities to ensure clinical-grade quality control."
    }
  ];

  return (
    <section className="relative py-32 bg-[#F7F6F2] overflow-hidden">
      {/* Decorative Grainy Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
       
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPoints.map((point, index) => (
            <TrustItem 
              key={index}
              index={index}
              {...point}
            />
          ))}
        </div>

        {/* Bottom Detail - High Contrast */}
        <div className="mt-24 pt-12 border-t border-[#1E3D2B]/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
             <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1E3D2B]">100%</span>
                <span className="text-[9px] uppercase tracking-widest font-black text-[#6E8B3D]">Traceable</span>
             </div>
             <div className="w-px h-8 bg-[#1E3D2B]/10" />
             <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1E3D2B]">Zero</span>
                <span className="text-[9px] uppercase tracking-widest font-black text-[#6E8B3D]">Fillers</span>
             </div>
             <div className="w-px h-8 bg-[#1E3D2B]/10" />
             <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1E3D2B]">3rd</span>
                <span className="text-[9px] uppercase tracking-widest font-black text-[#6E8B3D]">Party Tested</span>
             </div>
          </div>

          <button className="px-8 py-4 rounded-xl border border-[#1E3D2B] text-[#1E3D2B] text-[10px] font-black uppercase tracking-widest hover:bg-[#1E3D2B] hover:text-white transition-all">
            View Lab Reports
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;