import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const DarkLuxury = () => {
  return (
    <div className="min-h-full bg-black text-white font-sans p-12 overflow-hidden flex flex-col justify-between">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-light tracking-tighter">AETERNA</div>
        <div className="flex gap-4">
          {['Destinations', 'Fleet', 'Membership'].map((item) => (
            <button key={item} className="border border-white/20 rounded-full px-4 py-1.5 text-xs font-normal hover:bg-white hover:text-black transition-colors">
              {item}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] font-medium text-white/50 mb-6">Private Aviation</div>
            <h1 className="text-[120px] font-extralight leading-[0.85] tracking-tight mb-12">
              Beyond<br/>
              The Horizon.
            </h1>
            <div className="h-[1px] bg-white/20 w-48 mb-8"></div>
            <p className="text-lg text-white/40 max-w-sm font-light">
              Redefining the architecture of travel through bespoke services and invisible logistics.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div 
              className="w-full aspect-[3/4] bg-zinc-900 rounded-sm overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
              <ArrowUpRight className="w-8 h-8 font-thin" />
            </div>
          </div>
        </div>
      </main>

      <footer className="grid grid-cols-4 gap-8 pt-8 border-t border-white/10">
        {[
          { label: 'Altitude', value: '45,000 ft' },
          { label: 'Range', value: '7,500 nm' },
          { label: 'Cruise', value: 'Mach 0.925' },
          { label: 'Avail', value: 'Immediate' }
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{stat.label}</div>
            <div className="text-sm font-light tracking-wide">{stat.value}</div>
          </div>
        ))}
      </footer>
    </div>
  );
};
