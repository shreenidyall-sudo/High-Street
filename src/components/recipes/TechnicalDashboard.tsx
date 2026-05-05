import { motion } from 'motion/react';

export const TechnicalDashboard = () => {
  const data = [
    { id: '001', name: 'CORE_SYSTEM_OXYGEN', status: 'STABLE', value: '98.2%' },
    { id: '002', name: 'FUEL_CELL_ALPHA', status: 'DEGRADING', value: '45.1%' },
    { id: '003', name: 'NAVIGATION_RELAY', status: 'STABLE', value: '100.0%' },
    { id: '004', name: 'THERMAL_SHIELD', status: 'CRITICAL', value: '12.4%' },
  ];

  return (
    <div className="min-h-full bg-[#E4E3E0] text-[#141414] p-8 font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-[#141414] pb-4 flex justify-between items-end">
          <div>
            <h1 className="font-['Georgia',_serif] italic text-4xl">System Diagnostics</h1>
            <p className="font-mono text-xs opacity-50 mt-2">STATION_ID: ALPHA_7 // TIMESTAMP: {new Date().toISOString()}</p>
          </div>
          <div className="text-right font-mono text-xs">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            CONNECTED
          </div>
        </header>

        <div className="grid grid-cols-[40px_1.5fr_1fr_1fr] px-4 py-2 border-b border-[#141414] opacity-50 text-[11px] font-['Georgia',_serif] italic uppercase tracking-widest">
          <span>#</span>
          <span>Component Ident</span>
          <span>Status</span>
          <span>Readout</span>
        </div>

        <div className="divide-y divide-[#141414]">
          {data.map((row) => (
            <motion.div
              key={row.id}
              className="grid grid-cols-[40px_1.5fr_1fr_1fr] items-center p-4 cursor-pointer transition-colors duration-200 hover:bg-[#141414] hover:text-[#E4E3E0]"
              whileHover={{ x: 10 }}
            >
              <span className="font-mono text-xs opacity-50">{row.id}</span>
              <span className="font-bold tracking-tight">{row.name}</span>
              <span className={`text-xs font-mono ${row.status === 'CRITICAL' ? 'text-red-600' : ''}`}>
                [{row.status}]
              </span>
              <span className="font-mono text-lg tracking-tighter">{row.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-[#141414] p-4">
              <div className="font-['Georgia',_serif] italic text-xs mb-4 opacity-50 uppercase">Submodule_{i}</div>
              <div className="h-24 bg-zinc-300 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-[#141414] opacity-10"
                  animate={{ height: ['20%', '80%', '40%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-0 flex items-center justify-center font-mono text-xs">
                  {Math.random().toFixed(4)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
