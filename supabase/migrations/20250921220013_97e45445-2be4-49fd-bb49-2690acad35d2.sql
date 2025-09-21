-- Update categories to use proper public asset paths
UPDATE categories 
SET image_url = CASE 
  WHEN slug = 'fruits' THEN 'category-fruits.jpg'
  WHEN slug = 'vegetables' THEN 'category-vegetables.jpg'
  WHEN slug = 'dairy' THEN 'category-dairy.jpg'
  WHEN slug = 'cereals' THEN 'category-cereals.jpg'
  WHEN slug = 'beverages' THEN 'category-beverages.jpg'
  WHEN slug = 'household-items' THEN 'category-household.jpg'
  ELSE image_url
END
WHERE slug IN ('fruits', 'vegetables', 'dairy', 'cereals', 'beverages', 'household-items');

-- Update products to use placeholder images that will work
UPDATE products 
SET image_url = 'placeholder.svg'
WHERE image_url LIKE 'https://images.unsplash.com%';