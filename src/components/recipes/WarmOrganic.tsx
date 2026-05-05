import { motion } from 'motion/react';

export const WarmOrganic = () => {
  return (
    <div className="min-h-full bg-[#f5f5f0] text-[#1a1a1a] font-serif p-12 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-24">
          <div className="text-3xl font-medium tracking-tight">KURA_</div>
          <div className="flex gap-12 text-sm uppercase tracking-widest font-sans font-semibold opacity-60">
            <span>Exhibit</span>
            <span>Archive</span>
            <span>About</span>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-7xl font-light leading-tight mb-8">
              The Art of <br/>
              <span className="italic">Silent Craft</span>
            </h1>
            <p className="text-xl text-[#1a1a1a]/60 leading-relaxed max-w-md mb-12">
              A curated collection of minimalist ceramics and essential objects from the Edo period to modern day.
            </p>
            <button className="bg-[#5A5A40] text-white rounded-full px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-[#4a4a30] transition-colors">
              View Collection
            </button>
          </div>

          <div className="relative">
            <motion.div 
              className="rounded-[40px] overflow-hidden aspect-[4/5] relative z-10"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1000&auto=format&fit=crop" 
                alt="Ceramic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute top-12 -right-12 w-64 h-64 bg-[#e5e5d0] rounded-full -z-10 animate-pulse"></div>
          </div>
        </section>

        <section className="mt-32">
          <div className="flex justify-between items-end mb-12 border-b border-black/10 pb-4">
            <h2 className="text-2xl font-normal">Featured Works</h2>
            <div className="text-xs uppercase tracking-widest font-sans opacity-40">Section_01</div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'Toro Vase', year: '1972', img: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=800&auto=format&fit=crop' },
              { title: 'Kiku Bowl', year: '2004', img: 'https://images.unsplash.com/photo-1590641645628-6627f1c97a9f?q=80&w=800&auto=format&fit=crop' },
              { title: 'Mizu Tray', year: '1998', img: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop' }
            ].map((work, idx) => (
              <motion.div 
                key={idx} 
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="relative rounded-[32px] overflow-hidden aspect-square mb-4 bg-white">
                  <img 
                    src={work.img} 
                    alt={work.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center px-2">
                  <h3 className="text-lg">{work.title}</h3>
                  <span className="text-[10px] font-sans font-bold opacity-40 uppercase tracking-widest">{work.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
