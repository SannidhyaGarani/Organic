import React from 'react';
import { Leaf, BadgeCheck, Factory, Award, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F7F6F2] pt-32 pb-24 px-6">
      <div className="max-w-[1300px] mx-auto space-y-12">
        
        {/* --- 01. THE EDITORIAL HERO POD --- */}
        <div className="bg-white rounded-[3.5rem] overflow-hidden shadow-sm border border-[#1E3D2B]/5 relative">
          {/* Grainy Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <div className="grid lg:grid-cols-2 min-h-[700px]">
            {/* Content Side */}
            <div className="p-10 md:p-20 flex flex-col justify-center space-y-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#6E8B3D]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6E8B3D]">Our Origin Story</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-light text-[#1E3D2B] leading-[0.85] tracking-tighter">
                  Nature <br />
                  <span className="font-black italic text-[#6E8B3D]">Untouched.</span>
                </h1>
              </div>

              <p className="max-w-md text-base text-[#6B4F3F] leading-relaxed opacity-80">
                Leaf Organics was born from a simple realization: the purest nutrition shouldn't be a luxury, but a standard. We trace every seed, test every batch, and honor every harvest.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#1E3D2B]/5">
                <div>
                  <p className="text-3xl font-bold text-[#1E3D2B]">2025</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#6E8B3D] mt-1">Established</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1E3D2B]">100%</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#6E8B3D] mt-1">Traceable</p>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative bg-[#E5E3DB] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1517263904808-5dc91e3e704e?auto=format&fit=crop&q=80&w=1200" 
                alt="Organic Harvest" 
                className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Floating Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-center p-6">
                <p className="text-white text-[10px] font-black uppercase tracking-widest leading-tight">
                  Sourced from <br /> Regenerative <br /> Farms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 02. THE CORE VALUES (COMPACT GRID) --- */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Leaf,
              title: "Natural Integrity",
              desc: "Farm-sourced ingredients with zero preservatives, crafted for pure nutrition."
            },
            {
              icon: ShieldCheck,
              title: "Lab Verified",
              desc: "Every batch tested for safety, purity, and nutritional potency in certified labs."
            },
            {
              icon: Factory,
              title: "Ethical Craft",
              desc: "Small-batch processing that respects the plant's molecular structure."
            }
          ].map((value, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-10 border border-[#1E3D2B]/5 hover:border-[#6E8B3D]/20 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F7F6F2] flex items-center justify-center text-[#6E8B3D] mb-8 group-hover:bg-[#6E8B3D] group-hover:text-white transition-colors">
                <value.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3D2B] mb-4 tracking-tight">{value.title}</h3>
              <p className="text-sm text-[#6B4F3F] leading-relaxed opacity-70">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* --- 03. THE MANIFESTO (DARK POD) --- */}
        <div className="bg-[#1E3D2B] rounded-[3.5rem] p-10 md:p-24 relative overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-[#6E8B3D]/10 skew-x-12 translate-x-32" />
          <div className="absolute top-10 left-10 text-white/5 font-black text-[15vw] leading-none pointer-events-none select-none">
            PURITY
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-10">
              <div className="flex items-center gap-3">
                <Sparkles size={18} className="text-[#6E8B3D]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6E8B3D]">Our Living Promise</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-light text-white leading-[1.1] tracking-tighter">
                "Organic nutrition is not an <span className="italic font-black text-[#6E8B3D]">alternative</span>, it is the <span className="italic font-black text-[#6E8B3D]">foundation</span> of a life well lived."
              </h2>

              <div className="flex flex-wrap gap-12 pt-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#6E8B3D]">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-white">Mumbai HQ</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Est. 2025</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#6E8B3D]">
                      <BadgeCheck size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-white">ISO Certified</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Safety Standard</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-end">
               <button className="w-40 h-40 rounded-full border border-white/10 flex flex-col items-center justify-center text-white hover:bg-white hover:text-[#1E3D2B] transition-all duration-500 group">
                  <span className="text-[9px] font-black uppercase tracking-widest mb-2">Join Our</span>
                  <span className="text-xl font-bold italic">Circle</span>
                  <ArrowRight size={18} className="mt-4 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </div>

        {/* --- 04. THE PROCESS (MINIMAL FOOTER CARD) --- */}
        <div className="bg-[#E5E3DB]/30 rounded-[2.5rem] p-12 text-center border border-[#1E3D2B]/5">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1E3D2B]/40 mb-8">Crafting Excellence</p>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
               {['Farm Sourcing', 'Cold Processing', 'Lab Verification', 'Eco Packaging'].map((step, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                   <span className="text-xs font-bold text-[#1E3D2B]/20">0{idx + 1}</span>
                   <span className="text-sm font-bold text-[#1E3D2B] tracking-tight">{step}</span>
                 </div>
               ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;