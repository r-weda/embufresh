-- Force update all product images that are still placeholder.svg to use proper image keys
UPDATE products SET image_url = 'bananas' WHERE name = 'Bananas';
UPDATE products SET image_url = 'mangoes' WHERE name = 'Mangoes';  
UPDATE products SET image_url = 'onions' WHERE name = 'Onions';
UPDATE products SET image_url = 'milk' WHERE name = 'Fresh Milk';
UPDATE products SET image_url = 'eggs' WHERE name = 'Eggs';

-- Add images for products we don't have specific images for yet
UPDATE products SET image_url = 'apples' WHERE name ILIKE '%orange%';
UPDATE products SET image_url = 'cabbage' WHERE name ILIKE '%tomato%';
UPDATE products SET image_url = 'kale' WHERE name ILIKE '%spinach%';