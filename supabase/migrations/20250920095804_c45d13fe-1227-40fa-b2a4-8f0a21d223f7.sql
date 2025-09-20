-- Update categories to have proper display order
UPDATE categories SET image_url = 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400' WHERE slug = 'fruits';
UPDATE categories SET image_url = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400' WHERE slug = 'vegetables';
UPDATE categories SET image_url = 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400' WHERE slug = 'dairy';
UPDATE categories SET image_url = 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400' WHERE slug = 'cereals';
UPDATE categories SET image_url = 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400' WHERE slug = 'beverages';
UPDATE categories SET image_url = 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400' WHERE slug = 'household-items';

-- Add display_order column to sort categories properly
ALTER TABLE categories ADD COLUMN display_order INTEGER;

-- Set logical order for grocery store categories
UPDATE categories SET display_order = 1 WHERE slug = 'fruits';
UPDATE categories SET display_order = 2 WHERE slug = 'vegetables';  
UPDATE categories SET display_order = 3 WHERE slug = 'dairy';
UPDATE categories SET display_order = 4 WHERE slug = 'cereals';
UPDATE categories SET display_order = 5 WHERE slug = 'beverages';
UPDATE categories SET display_order = 6 WHERE slug = 'household-items';