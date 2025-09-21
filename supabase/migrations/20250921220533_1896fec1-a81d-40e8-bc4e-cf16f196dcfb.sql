-- Update all product images to use placeholder for now since Unsplash URLs are failing
UPDATE products 
SET image_url = 'placeholder.svg'
WHERE image_url LIKE 'https://images.unsplash.com%' OR image_url IS NULL;