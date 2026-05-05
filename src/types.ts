import React from 'react';

export type RecipeId = 
  | 'technical-dashboard' 
  | 'editorial-hero' 
  | 'hardware-tool' 
  | 'dark-luxury' 
  | 'brutalist-tool' 
  | 'warm-organic'
  | 'immersive-media'
  | 'clean-utility'
  | 'oversized-calendar'
  | 'bold-list'
  | 'saas-landing'
  | 'luxury-prestige';

export interface Recipe {
  id: RecipeId;
  name: string;
  mood: string;
  description: string;
  component: React.ComponentType;
}
