-- First, let's add comprehensive products for each category

-- Fruits category products
INSERT INTO public.products (name, slug, description, price, category_id, image_url, unit, stock_quantity, is_featured, is_active) VALUES
('Bananas', 'bananas', 'Fresh sweet bananas from local farms', 120.00, (SELECT id FROM categories WHERE slug = 'fruits'), 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400', 'per kg', 50, true, true),
('Oranges', 'oranges', 'Juicy Valencia oranges packed with Vitamin C', 180.00, (SELECT id FROM categories WHERE slug = 'fruits'), 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400', 'per kg', 40, true, true),
('Mangoes', 'mangoes', 'Sweet and ripe mangoes, perfect for snacking', 250.00, (SELECT id FROM categories WHERE slug = 'fruits'), 'https://images.unsplash.com/photo-1553279764-3fa61bd67bb8?w=400', 'per kg', 30, true, true),
('Pineapples', 'pineapples', 'Fresh tropical pineapples, sweet and tangy', 300.00, (SELECT id FROM categories WHERE slug = 'fruits'), 'https://images.unsplash.com/photo-1550828520-4cb496926fc8?w=400', 'per piece', 25, false, true),
('Watermelons', 'watermelons', 'Large juicy watermelons, perfect for hot days', 400.00, (SELECT id FROM categories WHERE slug = 'fruits'), 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400', 'per piece', 15, false, true),
('Apples', 'apples', 'Crisp red apples imported for quality', 320.00, (SELECT id FROM categories WHERE slug = 'fruits'), 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400', 'per kg', 35, false, true);

-- Vegetables category products
INSERT INTO public.products (name, slug, description, price, category_id, image_url, unit, stock_quantity, is_featured, is_active) VALUES
('Tomatoes', 'tomatoes', 'Fresh red tomatoes perfect for cooking', 100.00, (SELECT id FROM categories WHERE slug = 'vegetables'), 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=400', 'per kg', 60, true, true),
('Onions', 'onions', 'Fresh white onions essential for every kitchen', 80.00, (SELECT id FROM categories WHERE slug = 'vegetables'), 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400', 'per kg', 70, true, true),
('Carrots', 'carrots', 'Orange carrots rich in vitamins and nutrients', 120.00, (SELECT id FROM categories WHERE slug = 'vegetables'), 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400', 'per kg', 45, false, true),
('Spinach', 'spinach', 'Fresh green spinach leaves packed with iron', 150.00, (SELECT id FROM categories WHERE slug = 'vegetables'), 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400', 'per bunch', 30, true, true),
('Kale', 'kale', 'Nutritious kale perfect for healthy meals', 180.00, (SELECT id FROM categories WHERE slug = 'vegetables'), 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', 'per bunch', 25, false, true),
('Cabbage', 'cabbage', 'Fresh cabbage heads great for salads and cooking', 90.00, (SELECT id FROM categories WHERE slug = 'vegetables'), 'https://images.unsplash.com/photo-1594282788806-010aebe54cc4?w=400', 'per piece', 40, false, true),
('Potatoes', 'potatoes', 'Quality potatoes perfect for various dishes', 70.00, (SELECT id FROM categories WHERE slug = 'vegetables'), 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400', 'per kg', 80, false, true);

-- Dairy category products
INSERT INTO public.products (name, slug, description, price, category_id, image_url, unit, stock_quantity, is_featured, is_active) VALUES
('Fresh Milk', 'fresh-milk', 'Pure fresh milk from local dairy farms', 60.00, (SELECT id FROM categories WHERE slug = 'dairy'), 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400', 'per liter', 50, true, true),
('Yogurt', 'yogurt', 'Creamy natural yogurt rich in probiotics', 120.00, (SELECT id FROM categories WHERE slug = 'dairy'), 'https://images.unsplash.com/photo-1571212515416-ee2ef5339da1?w=400', 'per 500ml', 40, false, true),
('Cheese', 'cheese', 'Local cheese perfect for sandwiches and cooking', 300.00, (SELECT id FROM categories WHERE slug = 'dairy'), 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400', 'per 250g', 20, false, true),
('Eggs', 'eggs', 'Fresh eggs from free-range local chickens', 350.00, (SELECT id FROM categories WHERE slug = 'dairy'), 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=400', 'per tray (30)', 35, true, true),
('Butter', 'butter', 'Creamy butter made from fresh local milk', 280.00, (SELECT id FROM categories WHERE slug = 'dairy'), 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400', 'per 500g', 25, false, true);

-- Cereals category products
INSERT INTO public.products (name, slug, description, price, category_id, image_url, unit, stock_quantity, is_featured, is_active) VALUES
('White Rice', 'white-rice', 'Premium quality white rice for everyday meals', 180.00, (SELECT id FROM categories WHERE slug = 'cereals'), 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=400', 'per kg', 100, true, true),
('Maize Flour', 'maize-flour', 'Fine maize flour perfect for ugali', 80.00, (SELECT id FROM categories WHERE slug = 'cereals'), 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400', 'per kg', 80, true, true),
('Wheat Flour', 'wheat-flour', 'All-purpose wheat flour for baking and cooking', 120.00, (SELECT id FROM categories WHERE slug = 'cereals'), 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', 'per kg', 70, false, true),
('Beans', 'beans', 'Nutritious beans rich in protein', 200.00, (SELECT id FROM categories WHERE slug = 'cereals'), 'https://images.unsplash.com/photo-1520172036862-4d197d17c27a?w=400', 'per kg', 60, false, true),
('Lentils', 'lentils', 'Red lentils perfect for healthy meals', 220.00, (SELECT id FROM categories WHERE slug = 'cereals'), 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', 'per kg', 45, false, true);

-- Beverages category products
INSERT INTO public.products (name, slug, description, price, category_id, image_url, unit, stock_quantity, is_featured, is_active) VALUES
('Drinking Water', 'drinking-water', 'Pure drinking water in convenient bottles', 40.00, (SELECT id FROM categories WHERE slug = 'beverages'), 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400', 'per 500ml', 100, false, true),
('Coca Cola', 'coca-cola', 'Classic Coca Cola soft drink', 80.00, (SELECT id FROM categories WHERE slug = 'beverages'), 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400', 'per 500ml', 50, false, true),
('Orange Juice', 'orange-juice', 'Fresh squeezed orange juice', 120.00, (SELECT id FROM categories WHERE slug = 'beverages'), 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400', 'per 500ml', 30, false, true),
('Tea Leaves', 'tea-leaves', 'Premium quality tea leaves from local farms', 150.00, (SELECT id FROM categories WHERE slug = 'beverages'), 'https://images.unsplash.com/photo-1594631661960-d66d2e837e0c?w=400', 'per 250g', 40, true, true),
('Coffee', 'coffee', 'Aromatic coffee beans for the perfect brew', 300.00, (SELECT id FROM categories WHERE slug = 'beverages'), 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400', 'per 250g', 25, false, true);

-- Household Items category products
INSERT INTO public.products (name, slug, description, price, category_id, image_url, unit, stock_quantity, is_featured, is_active) VALUES
('Laundry Soap', 'laundry-soap', 'Effective laundry soap for all your washing needs', 50.00, (SELECT id FROM categories WHERE slug = 'household-items'), 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400', 'per bar', 80, false, true),
('Detergent Powder', 'detergent-powder', 'Powerful detergent powder for clean clothes', 180.00, (SELECT id FROM categories WHERE slug = 'household-items'), 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400', 'per kg', 60, false, true),
('Cooking Oil', 'cooking-oil', 'Pure cooking oil for all your culinary needs', 320.00, (SELECT id FROM categories WHERE slug = 'household-items'), 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400', 'per liter', 70, true, true),
('Sugar', 'sugar', 'Pure white sugar for sweetening', 150.00, (SELECT id FROM categories WHERE slug = 'household-items'), 'https://images.unsplash.com/photo-1571046922604-ba4a3e6b3065?w=400', 'per kg', 90, false, true),
('Salt', 'salt', 'Pure table salt for cooking and seasoning', 30.00, (SELECT id FROM categories WHERE slug = 'household-items'), 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400', 'per kg', 100, false, true);