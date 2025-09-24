-- Update product images to use more appropriate placeholder images or local assets
-- For now, we'll update to use the public placeholder.svg which should load faster
UPDATE products 
SET image_url = 'placeholder.svg'
WHERE image_url LIKE 'https://images.unsplash.com%' OR image_url IS NULL OR image_url = 'placeholder.svg';