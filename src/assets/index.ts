// Category Images
import categoryBeverages from './category-beverages.jpg';
import categoryCereals from './category-cereals.jpg';
import categoryDairy from './category-dairy.jpg';
import categoryFruits from './category-fruits.jpg';
import categoryHousehold from './category-household.jpg';
import categoryVegetables from './category-vegetables.jpg';

// Hero Image
import heroGrocery from './hero-grocery.jpg';

// Category image mapping for fast loading
export const categoryImages = {
  'category-beverages.jpg': categoryBeverages,
  'category-cereals.jpg': categoryCereals,
  'category-dairy.jpg': categoryDairy,
  'category-fruits.jpg': categoryFruits,
  'category-household.jpg': categoryHousehold,
  'category-vegetables.jpg': categoryVegetables,
} as const;

export { heroGrocery };