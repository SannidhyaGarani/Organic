import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const PromoBanner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section className="py-12 bg-[#F7F6F2] px-6">
      <div 
        onMouseMove={handleMouseMove}
        className="max-w-[1300px] mx-auto bg-[#1E3D2B] rounded-[3rem] overflow-hidden relative group shadow-2xl"
      >
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="grid lg:grid-cols-12 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-7 p-10 md:p-20 space-y-8 relative z-10">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-[#6E8B3D]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6E8B3D]">
                Limited Seasonal Invitation
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-light text-[#F7F6F2] leading-[0.95] tracking-tighter">
              Pure <span className="font-black italic text-[#6E8B3D]">Vitality</span> <br />
              At Your Door.
            </h2>

            <p className="max-w-md text-white/60 text-base leading-relaxed">
              Join our organic circle today and receive <span className="text-white font-bold">15% off</span> your first ritual. Preservative-free, farm-fresh potency.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="group flex items-center justify-between gap-8 bg-[#6E8B3D] hover:bg-[#7f9c4d] text-white px-8 py-5 rounded-2xl transition-all shadow-xl shadow-black/20">
                <span className="text-[11px] font-black uppercase tracking-widest">Claim Your Offer</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 px-2">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white font-serif italic text-xl">
                  15%
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Code: WELCOME15</span>
              </div>
            </div>
          </div>

          {/* Image Side - Constrained Parallax */}
          <div className="lg:col-span-5 h-[400px] lg:h-full relative overflow-hidden bg-[#E5E3DB]">
            <img 
              src="img/a (5).jpeg" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-200 ease-out scale-110"
              style={{
                transform: `scale(1.1) translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
              }}
              alt="Organic Superfoods"
            />
            {/* Inner Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
               <span className="text-white text-[10px] font-black uppercase tracking-widest text-center rotate-12">
                 Raw <br /> & Fresh
               </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromoBanner;