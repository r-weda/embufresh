// Product Images - ES6 imports for fast loading
import apples from './apples.jpg';
import bananas from './bananas.jpg';
import butter from './butter.jpg';
import cabbage from './cabbage.jpg';
import carrots from './carrots.jpg';
import cheese from './cheese.jpg';
import cocaCola from './coca-cola.jpg';
import coffee from './coffee.jpg';
import cookingOil from './cooking-oil.jpg';
import eggs from './eggs.jpg';
import milk from './milk.jpg';
import mangoes from './mangoes.jpg';
import onions from './onions.jpg';
import kale from './kale.jpg';
import maizeFlour from './maize-flour.jpg';
import beans from './beans.jpg';
import lentils from './lentils.jpg';
import water from './water.jpg';
import detergent from './detergent.jpg';
import soap from './soap.jpg';
import oranges from './oranges.jpg';
import tomatoes from './tomatoes.jpg';
import spinach from './spinach.jpg';

// Product image mapping for fast loading
export const productImages = {
  'apples': apples,
  'bananas': bananas,
  'butter': butter,
  'cabbage': cabbage,
  'carrots': carrots,
  'cheese': cheese,
  'coca-cola': cocaCola,
  'coffee': coffee,
  'cooking-oil': cookingOil,
  'eggs': eggs,
  'milk': milk,
  'fresh-milk': milk,
  'mangoes': mangoes,
  'onions': onions,
  'kale': kale,
  'maize-flour': maizeFlour,
  'beans': beans,
  'lentils': lentils,
  'water': water,
  'drinking-water': water,
  'detergent': detergent,
  'detergent-powder': detergent,
  'soap': soap,
  'laundry-soap': soap,
  'oranges': oranges,
  'tomatoes': tomatoes,
  'spinach': spinach,
} as const;

// Helper function to get product image by name
export const getProductImage = (productName: string): string => {
  const normalizedName = productName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
  
  return productImages[normalizedName as keyof typeof productImages] || '/placeholder.svg';
};