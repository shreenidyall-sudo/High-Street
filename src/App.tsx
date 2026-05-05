import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layout, 
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

import { TechnicalDashboard } from './components/recipes/TechnicalDashboard';
import { EditorialHero } from './components/recipes/EditorialHero';
import { DarkLuxury } from './components/recipes/DarkLuxury';
import { SaasLanding } from './components/recipes/SaasLanding';
import { WarmOrganic } from './components/recipes/WarmOrganic';
import { RecipeId, Recipe } from './types';

const RECIPES: Recipe[] = [
  {
    id: 'technical-dashboard',
    name: 'Technical Dashboard',
    mood: 'Professional & Precise',
    description: 'Visible grid structures and monospace fonts for high-density data environments.',
    component: TechnicalDashboard
  },
  {
    id: 'editorial-hero',
    name: 'Editorial Hero',
    mood: 'Bold & Dramatic',
    description: 'Massive typography and skewed transforms for high-impact magazine aesthetics.',
    component: EditorialHero
  },
  {
    id: 'dark-luxury',
    name: 'Dark Luxury',
    mood: 'Sophisticated & Minimal',
    description: 'Pure black backgrounds and refined typography for premium experiences.',
    component: DarkLuxury
  },
  {
    id: 'saas-landing',
    name: 'SaaS Split Layout',
    mood: 'Confident & Modern',
    description: 'High-contrast 50/50 split layouts designed for software product marketing.',
    component: SaasLanding
  },
  {
    id: 'warm-organic',
    name: 'Warm Organic',
    mood: 'Approachable & Human',
    description: 'Serif fonts, earth tones, and large rounded corners for cultural or artisanal brands.',
    component: WarmOrganic
  }
];

export default function App() {
  const [activeRecipeId, setActiveRecipeId] = useState<RecipeId>('technical-dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeRecipe = RECIPES.find(r => r.id === activeRecipeId) || RECIPES[0];

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-zinc-950 text-white font-sans">
      {/* Mobile Header */}
      <header className="lg:hidden p-4 border-b border-white/10 flex justify-between items-center bg-zinc-900/50 backdrop-blur-md z-50">
        <div className="font-bold tracking-tighter flex items-center gap-2">
          <Layout className="w-5 h-5 text-blue-500" />
          RECIPE_EXPLORER
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`
          fixed lg:relative inset-0 lg:inset-auto z-40
          w-full lg:w-80 border-r border-white/10 bg-zinc-950 flex flex-col p-6
          transition-transform duration-300 lg:translate-x-0
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="mb-12 hidden lg:block">
            <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
              <Layout className="w-6 h-6 text-blue-500" />
              RECIPE_EXPLORER_v1
            </div>
            <div className="text-[10px] font-mono text-zinc-500 mt-2 tracking-widest uppercase">
              Design Guidelines Demo
            </div>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto">
            {RECIPES.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => {
                  setActiveRecipeId(recipe.id);
                  setIsMenuOpen(false);
                }}
                className={`
                  w-full text-left p-4 rounded-lg transition-all group relative overflow-hidden
                  ${activeRecipeId === recipe.id ? 'bg-white text-black' : 'hover:bg-white/5'}
                `}
              >
                <div className="flex justify-between items-center relative z-10">
                  <span className="font-semibold text-sm tracking-tight">{recipe.name}</span>
                  <ChevronRight className={`w-4 h-4 opacity-0 transition-all ${activeRecipeId === recipe.id ? 'opacity-100' : 'group-hover:opacity-100 group-hover:translate-x-1'}`} />
                </div>
                <div className={`text-[10px] mt-1 uppercase tracking-wider font-bold opacity-50 relative z-10 ${activeRecipeId === recipe.id ? 'text-black/60' : 'text-zinc-500'}`}>
                  {recipe.mood}
                </div>
                
                {activeRecipeId === recipe.id && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="p-4 bg-zinc-900 rounded-lg">
              <div className="text-[10px] uppercase font-bold text-zinc-500 mb-2 tracking-widest">Active Schema</div>
              <div className="text-xs font-mono text-blue-400 truncate">{activeRecipe.id}.config</div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 relative overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRecipeId}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <activeRecipe.component />
            </motion.div>
          </AnimatePresence>

          {/* Info Overlay */}
          <div className="absolute bottom-6 right-6 z-30 max-w-sm pointer-events-none">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={`info-${activeRecipeId}`}
              className="bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl pointer-events-auto"
            >
              <h3 className="font-bold text-lg mb-1">{activeRecipe.name}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {activeRecipe.description}
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/10 rounded text-[10px] uppercase font-bold tracking-widest">React</span>
                <span className="px-2 py-1 bg-white/10 rounded text-[10px] uppercase font-bold tracking-widest">Motion</span>
                <span className="px-2 py-1 bg-white/10 rounded text-[10px] uppercase font-bold tracking-widest text-blue-400">Recipe_{RECIPES.indexOf(activeRecipe) + 1}</span>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
