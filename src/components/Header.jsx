import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Heart, X, Menu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Shop', to: '/shop' },
    { name: 'Contact', to: '/contact' },
  ];

  // Helper for icon styling based on scroll state
  const iconClass = `p-2 transition-all duration-300 hover:scale-110 active:scale-95 ${
    isScrolled ? 'text-[#F7F6F2] hover:text-[#6E8B3D]' : 'text-[#1E3D2B] hover:text-[#6E8B3D]'
  }`;

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[100] flex justify-center transition-all duration-700 pointer-events-none pt-4 lg:pt-8">
        <div className={`
          flex items-center justify-between pointer-events-auto transition-all duration-700 ease-in-out
          ${isScrolled
            ? 'w-[92%] lg:w-[86%] px-8 py-3 rounded-full bg-[#1E3D2B]/95 backdrop-blur-xl border border-[#6E8B3D]/20 shadow-2xl'
            : 'w-full px-6 md:px-12 py-4 bg-transparent border-transparent'}
        `}>

          {/* --- BRAND LOGO --- */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
            <div className={`relative flex items-center justify-center transition-all duration-500 rounded-full overflow-hidden
              ${isScrolled ? 'w-8 h-8 bg-[#6E8B3D]' : 'w-10 h-10 bg-[#1E3D2B]'}`}>
              <span className="font-black text-lg text-[#F7F6F2]">+</span>
            </div>
            <span className={`text-xl font-black tracking-tighter transition-colors duration-500
              ${isScrolled ? 'text-[#F7F6F2]' : 'text-[#1E3D2B]'}`}>
              Leaf<span className="text-[#6E8B3D]">ORG.</span>
            </span>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-300 relative group
                  ${isScrolled ? 'text-[#F7F6F2]/60 hover:text-[#F7F6F2]' : 'text-[#1E3D2B]/50 hover:text-[#1E3D2B]'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#6E8B3D] rounded-full transition-all duration-300 group-hover:w-4" />
              </Link>
            ))}
          </nav>

          {/* --- PREMIUM ACTIONS --- */}
          <div className="flex items-center gap-1 md:gap-3">
            {/* Account */}
            <Link to="/account" className={iconClass}>
              <User size={20} strokeWidth={1.5} />
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className={iconClass}>
              <Heart size={20} strokeWidth={1.5} />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative group p-2">
              <ShoppingBag 
                size={20} 
                strokeWidth={1.5} 
                className={`transition-all duration-300 group-hover:scale-110 ${isScrolled ? 'text-[#F7F6F2]' : 'text-[#1E3D2B]'}`} 
              />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#6E8B3D] rounded-full border border-white" />
            </Link>

            {/* --- MOBILE TOGGLE --- */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 lg:hidden transition-colors duration-500 ml-2
                ${isScrolled ? 'text-[#F7F6F2]' : 'text-[#1E3D2B]'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE EDITORIAL OVERLAY --- */}
      <div className={`
        fixed inset-0 z-[90] bg-[#F7F6F2] transition-all duration-700 ease-in-out lg:hidden
        ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
        {/* Subtle texture for mobile overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="h-full flex flex-col justify-center px-12 space-y-12 bg-[#F7F6F2]">
          <div className="space-y-2">
            <p className="text-[#6E8B3D] text-[10px] font-black uppercase tracking-[0.5em]">Collections</p>
            <div className="w-12 h-[1px] bg-[#1E3D2B]/20" />
          </div>

          <nav className="flex flex-col space-y-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={closeMenu}
                className="group flex items-center justify-between"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-5xl font-light text-[#1E3D2B] tracking-tighter group-hover:italic transition-all">
                  {link.name}
                </span>
                <ArrowRight className="text-[#6E8B3D] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </nav>

          <div className="pt-12 border-t border-[#1E3D2B]/10 flex flex-col gap-8">
            <div className="flex gap-10">
               <Link to="/account" onClick={closeMenu} className="text-[10px] font-black uppercase tracking-widest text-[#1E3D2B]">Account</Link>
               <Link to="/wishlist" onClick={closeMenu} className="text-[10px] font-black uppercase tracking-widest text-[#1E3D2B]">Wishlist</Link>
               <Link to="/cart" onClick={closeMenu} className="text-[10px] font-black uppercase tracking-widest text-[#1E3D2B]">Cart (0)</Link>
            </div>
            <p className="text-[#1E3D2B]/40 text-[10px] font-medium leading-relaxed uppercase tracking-widest">
              Ethically Sourced <br /> Lab Verified Ayurveda
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;