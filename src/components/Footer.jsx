import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, ArrowRight, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#F7F6F2] pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        {/* --- TOP LAYER: BRAND & NEWSLETTER --- */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-[#1E3D2B]/10">
          
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1E3D2B] flex items-center justify-center text-[#F7F6F2] font-black">
                +
              </div>
              <span className="text-2xl font-black tracking-tighter text-[#1E3D2B]">
                Leaf<span className="text-[#6E8B3D]">ORG.</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm text-[#6B4F3F] leading-relaxed opacity-80">
              Honest botanicals. Clinical precision. <br />
              Sourced from regenerative farms to your cellular doorstep.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
            <div className="w-full max-w-md">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6E8B3D] mb-4">
                The Journal
              </p>
              <form className="relative flex items-center border-b border-[#1E3D2B]/20 pb-2 group focus-within:border-[#1E3D2B] transition-all">
                <input 
                  type="email" 
                  placeholder="Join our conscious community" 
                  className="bg-transparent w-full outline-none text-sm placeholder:text-[#1E3D2B]/30 text-[#1E3D2B] py-2"
                />
                <button className="text-[#1E3D2B] hover:text-[#6E8B3D] transition-colors">
                  <ArrowRight size={20} strokeWidth={1.5} />
                </button>
              </form>
            </div>
            
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-[#1E3D2B]/10 flex items-center justify-center text-[#1E3D2B] hover:bg-[#1E3D2B] hover:text-[#F7F6F2] transition-all duration-500">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- MIDDLE LAYER: COMPACT DIRECTORY --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16">
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6E8B3D]">Shop</h4>
            <ul className="flex flex-col gap-3 text-[13px] font-medium text-[#1E3D2B]/70">
              <li><Link className="hover:text-[#6E8B3D] transition-colors">New Arrivals</Link></li>
              <li><Link className="hover:text-[#6E8B3D] transition-colors">Best Sellers</Link></li>
              <li><Link className="hover:text-[#6E8B3D] transition-colors">Superfoods</Link></li>
              <li><Link className="hover:text-[#6E8B3D] transition-colors">Daily Rituals</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6E8B3D]">About</h4>
            <ul className="flex flex-col gap-3 text-[13px] font-medium text-[#1E3D2B]/70">
              <li><Link className="hover:text-[#6E8B3D] transition-colors">Our Sourcing</Link></li>
              <li><Link className="hover:text-[#6E8B3D] transition-colors">Lab Reports</Link></li>
              <li><Link className="hover:text-[#6E8B3D] transition-colors">Sustainability</Link></li>
              <li><Link className="hover:text-[#6E8B3D] transition-colors">Press</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6E8B3D]">Support</h4>
            <ul className="flex flex-col gap-3 text-[13px] font-medium text-[#1E3D2B]/70">
              <li><Link className="hover:text-[#6E8B3D] transition-colors">Shipping & Returns</Link></li>
              <li><Link className="hover:text-[#6E8B3D] transition-colors">Contact Us</Link></li>
              <li><Link className="hover:text-[#6E8B3D] transition-colors">FAQs</Link></li>
              <li><Link className="hover:text-[#6E8B3D] transition-colors">Stockists</Link></li>
            </ul>
          </div>

          {/* Large Vertical Statement */}
          <div className="hidden lg:col-span-2 lg:flex flex-col justify-between items-end text-right">
            <h3 className="text-4xl font-serif italic text-[#1E3D2B]/10 leading-none">
              Purity <br /> Uncompromised.
            </h3>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-[#1E3D2B]/40 hover:text-[#6E8B3D] transition-all"
            >
              Back to top <div className="w-8 h-8 rounded-full border border-[#1E3D2B]/10 flex items-center justify-center group-hover:border-[#6E8B3D] transition-all"><ArrowUp size={12} /></div>
            </button>
          </div>
        </div>

        {/* --- BOTTOM LAYER: LEGAL & SIGNATURE --- */}
        <div className="pt-10 border-t border-[#1E3D2B]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-[#1E3D2B]/30">
            <span>© {currentYear} Leaf Organics</span>
            <Link className="hover:text-[#1E3D2B] transition-colors">Privacy</Link>
            <Link className="hover:text-[#1E3D2B] transition-colors">Terms</Link>
          </div>

          <a 
            href="https://letskillify.com" 
            target="_blank" 
            className="flex items-center gap-2 group grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] text-[#1E3D2B]">Designed by</span>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#1E3D2B]">
              LetsKillify<span className="text-[#6E8B3D]">.</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;