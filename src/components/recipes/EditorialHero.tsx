import { motion } from 'motion/react';

export const EditorialHero = () => {
  return (
    <div className="min-h-full bg-[#050505] text-white flex flex-col justify-center overflow-hidden relative">
      <div className="absolute top-8 left-8 flex gap-8 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] opacity-40">
        <span>Edition 04</span>
        <span>Spring // 2026</span>
      </div>

      <div className="px-8 transform -skew-x-[10deg]">
        <motion.div
          initial={{ scale: 2, y: -100, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-[20vw] leading-[0.82] uppercase tracking-[-0.02em]">
            Brutal<br/>
            <span className="text-[#F27D26]">Reality</span>
          </h1>
        </motion.div>
      </div>

      <div className="mt-12 px-8 grid grid-cols-12 gap-4 items-end">
        <div className="col-span-4 border-t border-white/20 pt-4">
          <div className="font-sans text-[0.7rem] font-semibold uppercase tracking-widest opacity-70 mb-2">Manifesto</div>
          <p className="text-sm text-white/50 leading-relaxed font-sans max-w-xs">
            Exploring the intersection of raw material and digital ephemeral. A study in contrast and intentional density.
          </p>
        </div>
        
        <div className="col-start-10 col-span-3">
          <div className="relative group cursor-pointer">
            <motion.div 
              className="w-full aspect-[4/5] bg-[#F27D26]/20 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" 
                alt="Architecture"
                className="w-full h-full object-cover grayscale mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-4 -left-4 font-display text-4xl opacity-20 group-hover:opacity-100 transition-opacity">01</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8">
        <motion.button 
          className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center font-sans text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore
        </motion.button>
      </div>
    </div>
  );
};
