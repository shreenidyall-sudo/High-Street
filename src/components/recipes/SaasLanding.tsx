import { motion } from 'motion/react';

export const SaasLanding = () => {
  return (
    <div className="min-h-full bg-[#f5f5f4] text-[#0a0a0a] font-sans flex grid lg:grid-cols-2 overflow-hidden">
      {/* Left Pane */}
      <div className="p-12 flex flex-col justify-between border-r border-[#0a0a0a]">
        <div className="flex justify-between items-start">
          <div className="font-bold text-2xl tracking-tighter">VECTOR</div>
          <div className="rail-text font-mono text-[10px] uppercase tracking-widest text-[#0a0a0a]/40">
            Internal // Build_v2.04
          </div>
        </div>

        <div className="my-24">
          <motion.h1 
            className="text-[112px] leading-[0.88] font-semibold tracking-[-0.04em]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Scale<br/>
            Without<br/>
            Limits.
          </motion.h1>
          <div className="mt-12 flex gap-4">
            <button className="cta-circle bg-white hover:bg-black hover:text-white transition-all cursor-pointer">
              Join
            </button>
            <div className="max-w-[200px] text-xs leading-relaxed opacity-60 ml-4 font-medium">
              The only platform built for high-density computational throughput.
            </div>
          </div>
        </div>

        <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest opacity-40">
          <span>Reliability: 99.99%</span>
          <span>Latency: 12ms</span>
          <span>Support: 24/7</span>
        </div>
      </div>

      {/* Right Pane */}
      <div className="bg-[#0a0a0a] text-[#f5f5f4] p-12 relative flex items-center justify-center overflow-hidden">
        <div className="absolute top-12 right-12 flex gap-6">
          <button className="text-[11px] font-bold uppercase tracking-widest hover:underline">Pricing</button>
          <button className="text-[11px] font-bold uppercase tracking-widest hover:underline">Docs</button>
        </div>

        <div className="relative w-full max-w-md">
          <motion.div 
            className="feature-bubble bg-white text-black -rotate-6 z-10 relative shadow-2xl"
            animate={{ rotate: [-6, -4, -6] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-[10px] text-white">01</div>
              <div>
                <div className="font-bold text-sm tracking-tight">Auto-Optimization</div>
                <div className="text-[10px] opacity-60">Engineered for speed</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="feature-bubble bg-zinc-800 text-white rotate-6 -mt-4 translate-x-12 relative"
            animate={{ rotate: [6, 8, 6] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#f5f5f4] rounded-full flex items-center justify-center text-[10px] text-black">02</div>
              <div>
                <div className="font-bold text-sm tracking-tight">Global Mesh</div>
                <div className="text-[10px] opacity-40">Edge distribution enabled</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-12 flex items-center gap-4">
          <div className="w-32 h-[1px] bg-white/20"></div>
          <div className="text-[40px] font-serif italic text-white/10">Momentum</div>
        </div>
      </div>

      <style>{`
        .rail-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .cta-circle {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          outline: 1px solid #0a0a0a;
          display: grid;
          place-items: center;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.14em;
        }
        .feature-bubble {
          border-radius: 9999px;
          padding: 24px;
          border: 1px solid #0a0a0a;
        }
      `}</style>
    </div>
  );
};
