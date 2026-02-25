import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, ArrowRight, Youtube, ArrowUp, Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Shop', to: '/shop' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="relative bg-[#F7F6F2] pt-24 pb-5 px-6 overflow-hidden">
      {/* Decorative Organic Shape (Top Right) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#6E8B3D]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 pb-20">

          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="group flex items-center gap-2">
              <Leaf className="text-[#6E8B3D] transition-transform group-hover:rotate-12" size={28} />
              <span className="text-2xl font-serif italic text-[#1E3D2B]">
                Leaf <span className="not-italic font-light tracking-widest uppercase text-xs ml-1">Organics</span>
              </span>
            </Link>
            <p className="text-sm text-[#6B4F3F]/80 leading-relaxed max-w-sm">
              Cultivating wellness through regenerative agriculture and botanical alchemy.
              Our products are harvested with respect for the earth and delivered with clinical precision.
            </p>
            <div className="flex gap-5">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-[#1E3D2B]/40 hover:text-[#6E8B3D] transition-colors duration-300">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - Updated Links */}
          <div className="lg:col-span-3 lg:pl-12">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6E8B3D] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-[#1E3D2B]/70 hover:text-[#1E3D2B] hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-5 bg-white/40 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/60">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6E8B3D] mb-2">The Seed List</h4>
            <h3 className="text-2xl font-serif text-[#1E3D2B] mb-6">Join our conscious collective.</h3>

            <form className="relative flex items-center group">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent w-full border-b border-[#1E3D2B]/10 outline-none text-sm py-3 focus:border-[#6E8B3D] transition-all"
              />
              <button className="absolute right-0 p-2 text-[#1E3D2B] hover:text-[#6E8B3D] transition-all transform hover:translate-x-1">
                <ArrowRight size={20} strokeWidth={1} />
              </button>
            </form>
            <p className="mt-4 text-[10px] text-[#6B4F3F]/50">
              *By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-5 border-t border-[#1E3D2B]/10 flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Left: Legal & Copyright */}
          <div className="order-3 md:order-1 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#1E3D2B]/40">
              © {new Date().getFullYear()} Leaf Organics
            </span>
            <div className="flex gap-6">
              <Link className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3D2B]/30 hover:text-[#1E3D2B] transition-colors">Privacy</Link>
              <Link className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3D2B]/30 hover:text-[#1E3D2B] transition-colors">Terms</Link>
            </div>
          </div>

          {/* Center/Right: Highlighted Signature */}
          <div className="order-2 flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#1E3D2B]/10 hidden md:block"></div>
            <a
              href="https://letskillify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-1 overflow-hidden"
            >
              <div className="flex items-center gap-2">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#6B4F3F]/60 font-medium">
                  Digital Architecture by
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1E3D2B] group-hover:text-[#6E8B3D] transition-colors duration-500">
                  LetsKillify<span className="text-[#6E8B3D]">.</span>
                </span>
              </div>
              {/* Premium Sliding Underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#6E8B3D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </div>

          {/* Right: Scroll to Top */}
          <div className="order-1 md:order-3">
            <button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full border border-[#1E3D2B]/10 flex items-center justify-center text-[#1E3D2B]/40 group-hover:border-[#6E8B3D] group-hover:text-[#6E8B3D] transition-all duration-500">
                <ArrowUp size={14} strokeWidth={2} className="group-hover:-translate-y-1 transition-transform" />
              </div>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#1E3D2B]/20 group-hover:text-[#6E8B3D] transition-colors">Top</span>
            </button>
          </div>

        </div>
      </div>

      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </footer>
  );
};

export default Footer;