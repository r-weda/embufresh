-- Update categories to use local images instead of failing Unsplash URLs
UPDATE categories 
SET image_url = CASE 
  WHEN slug = 'fruits' THEN '/src/assets/category-fruits.jpg'
  WHEN slug = 'vegetables' THEN '/src/assets/category-vegetables.jpg'
  WHEN slug = 'dairy' THEN '/src/assets/category-dairy.jpg'
  WHEN slug = 'cereals' THEN '/src/assets/category-cereals.jpg'
  WHEN slug = 'beverages' THEN '/src/assets/category-beverages.jpg'
  WHEN slug = 'household-items' THEN '/src/assets/category-household.jpg'
  ELSE image_url
END
WHERE slug IN ('fruits', 'vegetables', 'dairy', 'cereals', 'beverages', 'household-items');