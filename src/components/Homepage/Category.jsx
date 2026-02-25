import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const categories = [
  {
    title: "Organic Powders",
    subtitle: "Fine Botanical Milling",
    image: "https://images.unsplash.com/photo-1515696955266-4f67e13219e8?q=80&w=1200",
    gridClass: "md:col-span-8 md:row-span-2",
    tag: "Most Popular"
  },
  {
    title: "Superfoods",
    subtitle: "Raw Vitality",
    image: "https://images.unsplash.com/photo-1615485242299-4c36ad99796d?q=80&w=1000",
    gridClass: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Herbal Blends",
    subtitle: "Ancient Wisdom",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1000",
    gridClass: "md:col-span-4 md:row-span-2",
  },
  {
    title: "Wellness Kits",
    subtitle: "Curated Rituals",
    image: "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=1000",
    gridClass: "md:col-span-8 md:row-span-1",
  }
];

const CategoryCard = ({ category }) => (
  <div className={`${category.gridClass} group relative overflow-hidden rounded-[3rem] bg-white border border-[#1E3D2B]/5 shadow-sm min-h-[400px]`}>
    {/* Image Treatment */}
    <div className="absolute inset-0 transition-transform duration-[3s] ease-out group-hover:scale-110">
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-full object-cover"
      />
      {/* Editorial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E3D2B]/90 via-[#1E3D2B]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
    </div>

    {/* Content Overlay */}
    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
      <div className="relative z-10 space-y-4">
        {category.tag && (
          <span className="inline-block px-3 py-1 rounded-full bg-[#6E8B3D] text-white text-[9px] font-black uppercase tracking-widest mb-2">
            {category.tag}
          </span>
        )}
        
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 group-hover:text-[#6E8B3D] transition-colors duration-500">
            {category.subtitle}
          </p>
          <h3 className="text-4xl md:text-5xl font-light text-white leading-none tracking-tighter">
            {category.title.split(' ')[0]} <br />
            <span className="font-black italic text-[#6E8B3D]">{category.title.split(' ')[1]}</span>
          </h3>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
          <span className="text-[10px] font-black uppercase tracking-widest text-white">View Collection</span>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1E3D2B] rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CategorySection = () => {
  return (
    <section className="py-24 bg-[#F7F6F2] px-6">
      <div className="max-w-[1300px] mx-auto">
        
        {/* --- MAGAZINE HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-[#1E3D2B]/5 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-[#6E8B3D]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6E8B3D]">Botanical Curations</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-light text-[#1E3D2B] leading-[0.85] tracking-tighter">
              The <span className="font-black italic">Collections</span>
            </h2>
          </div>
          
          <div className="max-w-sm">
            <p className="text-base text-[#6B4F3F] leading-relaxed opacity-70 italic">
              "We’ve categorized our harvests to help you find the specific ritual your body is calling for."
            </p>
          </div>
        </div>

        {/* --- ASYMMETRIC GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px]">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} category={cat} />
          ))}
        </div>

        {/* --- GRID FOOTER --- */}
        <div className="mt-25 flex justify-center">
            <button className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#1E3D2B] hover:text-[#6E8B3D] transition-colors">
                Explore All Products
                <div className="w-8 h-[1px] bg-[#1E3D2B] group-hover:w-12 group-hover:bg-[#6E8B3D] transition-all" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;