// import { useState } from 'react';

// export default function Menu() {
//   const [activeCategory, setActiveCategory] = useState('Starters');
//   const [activeDiet, setActiveDiet] = useState('All');

//   const categories = [
//     'Starters',
//     'Tandoor & Grills',
//     'Biryani',
//     'Curries',
//     'Breads',
//     'Desserts',
//   ];

//   const menuItems = [
//     {
//       category: 'Starters',
//       name: 'Sweet Corn Soup',
//       description: 'Creamy corn soup with vegetables',
//       diet: 'Veg',
//       price: 7.0,
//     },
//     {
//       category: 'Starters',
//       name: 'Chicken Manchow Soup',
//       description: 'Spicy Indo-Chinese soup',
//       diet: 'Chicken',
//       price: 8.0,
//     },
//     {
//       category: 'Starters',
//       name: 'Paneer 65',
//       description: 'Crispy fried paneer with spices',
//       diet: 'Veg',
//       price: 12.0,
//     },
//     {
//       category: 'Starters',
//       name: 'Chicken 65',
//       description: 'Spicy fried chicken bites',
//       diet: 'Chicken',
//       price: 13.0,
//     },
//     {
//       category: 'Tandoor & Grills',
//       name: 'Tandoori Chicken',
//       description: 'Classic clay oven roasted chicken',
//       diet: 'Chicken',
//       price: 15.0,
//     },
//     {
//       category: 'Tandoor & Grills',
//       name: 'Paneer Tikka',
//       description: 'Marinated cottage cheese grilled to perfection',
//       diet: 'Veg',
//       price: 14.0,
//     },
//     {
//       category: 'Tandoor & Grills',
//       name: 'Seekh Kebab',
//       description: 'Minced lamb skewers with aromatic spices',
//       diet: 'Goat',
//       price: 16.0,
//     },
//     {
//       category: 'Biryani',
//       name: 'Vegetable Biryani',
//       description: 'Fragrant basmati rice with mixed vegetables',
//       diet: 'Veg',
//       price: 14.0,
//     },
//     {
//       category: 'Biryani',
//       name: 'Chicken Dum Biryani',
//       description: 'Authentic Hyderabadi style chicken biryani',
//       diet: 'Chicken',
//       price: 16.0,
//     },
//     {
//       category: 'Biryani',
//       name: 'Goat Dum Biryani',
//       description: 'Slow-cooked goat biryani with aromatic spices',
//       diet: 'Goat',
//       price: 18.0,
//     },
//     {
//       category: 'Curries',
//       name: 'Paneer Butter Masala',
//       description: 'Cottage cheese in rich tomato cream sauce',
//       diet: 'Veg',
//       price: 13.0,
//     },
//     {
//       category: 'Curries',
//       name: 'Chicken Tikka Masala',
//       description: 'Grilled chicken in creamy tomato gravy',
//       diet: 'Chicken',
//       price: 15.0,
//     },
//     {
//       category: 'Curries',
//       name: 'Goat Curry',
//       description: 'Traditional spicy goat curry',
//       diet: 'Goat',
//       price: 17.0,
//     },
//     {
//       category: 'Breads',
//       name: 'Butter Naan',
//       description: 'Soft leavened bread with butter',
//       diet: 'Veg',
//       price: 3.0,
//     },
//     {
//       category: 'Breads',
//       name: 'Garlic Naan',
//       description: 'Naan topped with garlic and cilantro',
//       diet: 'Veg',
//       price: 4.0,
//     },
//     {
//       category: 'Breads',
//       name: 'Tandoori Roti',
//       description: 'Whole wheat bread from clay oven',
//       diet: 'Veg',
//       price: 2.5,
//     },
//     {
//       category: 'Desserts',
//       name: 'Gulab Jamun',
//       description: 'Sweet milk dumplings in sugar syrup',
//       diet: 'Veg',
//       price: 5.0,
//     },
//     {
//       category: 'Desserts',
//       name: 'Rasmalai',
//       description: 'Soft cheese patties in sweet milk',
//       diet: 'Veg',
//       price: 6.0,
//     },
//     {
//       category: 'Desserts',
//       name: 'Kheer',
//       description: 'Rice pudding with nuts and saffron',
//       diet: 'Veg',
//       price: 5.0,
//     },
//   ];

//   const filteredItems = menuItems.filter((item) => {
//     const categoryMatch = item.category === activeCategory;
//     const dietMatch = activeDiet === 'All' || item.diet === activeDiet;
//     return categoryMatch && dietMatch;
//   });

//   return (
//     <section id="menu" className="relative py-20 bg-[#0f1d33] overflow-hidden" style={{
//   background: `
//     /* Layer 1 (Top): Soft vignette */
//     linear-gradient(
//       to right,
//       rgba(11, 19, 43, 0.6) 5%,
//       transparent 30%,
//       transparent 70%,
//       rgba(11, 19, 43, 0.6) 95%
//     ),

//     /* Layer 2 (Middle): Transparent SVG pattern */
//     url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23efbf04' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E"),

//     /* Layer 3 (Bottom): Solid background color */
//     #0B132B
//   `
// }}>
//       <div className="absolute inset-0 mandala-pattern opacity-5"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-6">
//             Our Culinary Creations
//           </h2>
//           <p className="text-xl text-[#f5f5dc]">
//             Authentic flavors from every corner of India, crafted with passion.
//           </p>
//         </div>

//         <div className="mb-8">
//           <div className="flex flex-wrap justify-center gap-4 mb-6">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-6 py-3 font-serif text-lg transition-all duration-300 rounded-md ${
//                   activeCategory === category
//                     ? 'bg-[#d4af37] text-[#f5f5dc]'
//                     : 'text-[#f5f5dc] hover:text-[#d4af37] bg-[#0a1628]/50'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           <div className="flex justify-center gap-4">
//             {['All', 'Veg', 'Chicken', 'Goat'].map((diet) => (
//               <button
//                 key={diet}
//                 onClick={() => setActiveDiet(diet)}
//                 className={`px-4 py-2 font-serif transition-all duration-300 ${
//                   activeDiet === diet
//                     ? 'text-[#d4af37] font-bold'
//                     : 'text-[#f5f5dc] hover:text-[#d4af37]'
//                 }`}
//               >
//                 {diet}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredItems.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#0a1628]/50 border border-[#d4af37]/30 rounded-lg p-6 hover:border-[#d4af37] transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/20"
//             >
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="text-xl font-serif text-[#f5f5dc] font-semibold">
//                   {item.name}
//                 </h3>
//                 <span className="text-sm text-[#d4af37] font-semibold px-3 py-1 bg-[#d4af37]/10 rounded-full">
//                   {item.diet}
//                 </span>
//               </div>
//               <p className="text-[#f5f5dc]/80 mb-4 text-sm">{item.description}</p>
//               <div className="text-2xl font-bold text-[#d4af37]">
//                 ${item.price.toFixed(2)}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// src/pages/MenuPage.jsx

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Star, Leaf, Drumstick, Clock } from 'lucide-react';
import Footer from '../components/Footer';

const menuData = {
  'Soups & Starters': [
   { name: 'Sweet Corn Soup', description: 'A classic soup featuring sweet com kernels in a creamy base, seasoned with herbs and spices.', options: [{ type: 'Veg', price: 6 }, { type: 'Chicken', price: 7 }], diet: 'veg-friendly' },
   { name: 'Manchow Soup', description: 'A popular Indo-Chinese soup characterized by its spicy and tangy flavour, typically made with mixed vegetables, and accompanied with a side of crispy noodles for that extra crunch.', options: [{ type: 'Veg', price: 6 }, { type: 'Chicken', price: 7 }], diet: 'veg-friendly' },
   { name: 'Lemon Coriander Soup', description: 'A refreshing soup made with a broth infused with the tangy flavour of lemon and the aromatic essence of coriander leaves.', options: [{ type: 'Veg', price: 6 }, { type: 'Chicken', price: 7 }], diet: 'veg-friendly' },
   { name: 'Hot and Sour Soup', description: 'An Asian-inspired soup known for its balance of spicy and tangy flavors.', options: [{ type: 'Veg', price: 6 }, { type: 'Chicken', price: 7 }], isSpicy: true, diet: 'veg-friendly' },
   { name: 'Lentil Soup', description: 'A nourishing soup made from lentils, cooked with vegetables, spices This thick and hearty dish is packed with protein and fiber.', options: [{ type: 'Veg', price: 6 }], diet: 'veg' },
   { name: 'Goat Paya', description: 'A hearty soup made from goat trotters, simmered for hours to extract maximum flavour and nutrients.', options: [{ type: 'Goat', price: 9 }], isSignature: true, diet: 'non-veg' },
   { name: 'Steamed Momos', description: 'Traditional Momos That Are Cooked by Steaming, Resulting in a Soft, Tender Dumpling Wrapper Encasing a Flavourful Filling.Accompanied With a House-special Dipping Sauce.', options: [{ type: 'Veg', price: 9 }, { type: 'Paneer', price: 11 }, { type: 'Chicken', price: 11 }], diet: 'veg-friendly' },
   { name: 'Fried Momos', description: 'Momos Are Deep-fried Until Golden and Crispy on the Outside, Creating a Contrast in Texture With the Soft Filling Inside.', options: [{ type: 'Veg', price: 9 }, { type: 'Paneer', price: 11 }, { type: 'Chicken', price: 11 }], diet: 'veg-friendly' },
   { name: 'Masala Tossed Momo (Tandoori/Malai)', description: 'Momos That Are Cooked Using a Dry Frying Technique, After Which They Are Tossed in a Masala Spice Mix This Method Imparts a Flavourful Coating to the Momos, Enhancing Their Taste.', options: [{ type: 'Veg', price: 10 }, { type: 'Paneer', price: 12 }, { type: 'Chicken', price: 12 }], isSignature: true, diet: 'veg-friendly' },
   { name: 'Samosa (2)', description: 'Traditional Indian pastry filled with potatoes, peas, and herbs, deep-fried until golden and crispy.', options: [{ type: 'Veg', price: 6 }], diet: 'veg' },
   { name: 'Bullet Samosa (6)', description: 'A spicy, crispy, bite-sized samosa variant with a filling of spices, onions, and beaten rice.', options: [{ type: 'Veg', price: 10 }], diet: 'veg' },
   { name: 'Masala Tossed Fries', description: 'Indian-spiced twist on world-famous fries: a flavorful upgrade to the classic snack!', options: [{ type: 'Veg', price: 10 }], diet: 'veg' },
   { name: 'Crispy Corn', description: 'Made With Crispy Corn Kernels Seasoned WithSpices, Creating a Crunchy and Flavourful Snack.', options: [{ type: 'Veg', price: 12 }], diet: 'veg' },
   { name: 'Mushroom Pepper Fry', description: 'Sautéed Mushrooms Seasoned With Black Pepper and Other Spices.Resulting in a Flavourful and Aromatic Dish.', options: [{ type: 'Mushroom', price: 14 }], diet: 'veg' },
   { name: 'Masala Papad (2)', description: 'Wafer-thin lentil crackers topped with onions, tomatoes, spices, and herbs-crunchy, spicy, and bursting with flavor!', options: [{ type: 'Veg', price: 6 }], diet: 'veg' },
   { name: 'Ghee Roast', description: 'A rich and aromatic dish made with a blend of spices roasted in golden ghee, offering a burst of bold flavors', options: [{ type: 'Gobi', price: 13 }, { type: 'Paneer', price: 14 }, { type: 'Mushroom', price: 14 }, { type: 'Chicken', price: 14 }, { type: 'Goat', price: 17 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], diet: 'veg-friendly' },
   { name: 'Masala 65', description: 'Discover our twist on the iconic Hyderabad-origin dish with a house-special sauce featuring cumin, red chilies, and garlic hints.', options: [{ type: 'Veg', price: 13 }, { type: 'Gobi', price: 13 }, { type: 'Paneer', price: 14 }, { type: 'Mushroom', price: 14 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 13 }, { type: 'Fish', price: 17 }], diet: 'veg-friendly' },
   { name: 'Crispy Cauliflower', description: 'Featuring Golden-battered Florets Fried to Perfection and Tossed in a Tantalizing Blend of Spices.', options: [{ type: 'Gobi', price: 13 }], diet: 'veg' },
   { name: 'Matka Taco (3)', description: 'Savor our Indian-Hispanic fusion: Crunchy tacos filled with cheese, veggies, and a hint of Indian spices.', options: [{ type: 'Veg', price: 12 }, { type: 'Chicken', price: 14 }], isSignature: true, diet: 'veg-friendly' },
   { name: 'Nalakaram', description: 'Our top-selling, house-special spicy dish packed with traditional South Indian flavors from red chillies to black pepper.', options: [{ type: 'Veg', price: 13 }, { type: 'Paneer', price: 14 }, { type: 'Mushroom', price: 14 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Goat', price: 17 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], isSpicy: true, isSignature: true, diet: 'veg-friendly' },
   { name: 'Bombay Bhel', description: 'A favorite Indian street snack crispy noodles with house special sauce', options: [{ type: 'Veg', price: 11 }], diet: 'veg' },
   { name: 'Street Style Mirchi Bajji (4)', description: 'South Indian street snack sensation stuffed with onions, peanuts, and spices.', options: [{ type: 'Veg', price: 12 }], diet: 'veg' },
   { name: 'Karivepaku', description: 'Karivepaku, or curry leaves, infuse South Indian dishes with their distinct flavor, enhanced by a blend of herbs and spices.', options: [{ type: 'Veg', price: 13 }, { type: 'Gobi', price: 13 }, { type: 'Paneer', price: 14 }, { type: 'Mushroom', price: 14 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Goat', price: 17 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], diet: 'veg-friendly' },
   { name: 'Allam', description: 'Ginger infused South Indian house special spice mix with blend of curry leaves', options: [{ type: 'Veg', price: 13 }, { type: 'Gobi', price: 13 }, { type: 'Paneer', price: 14 }, { type: 'Mushroom', price: 14 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Goat', price: 17 }, { type: 'Shrimp', price: 17 }], isSpicy: true, diet: 'veg-friendly' },
   { name: 'Amaravathi', description: 'Amaravathi-inspired dish, blending flavors from Farmed Red Chillies', options: [{ type: 'Veg', price: 13 }, { type: 'Gobi', price: 13 }, { type: 'Paneer', price: 14 }, { type: 'Mushroom', price: 14 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Goat', price: 17 }, { type: 'Shrimp', price: 17 }], isSpicy: true, diet: 'veg-friendly' },
   { name: 'Village Style', description: 'A smoky wok cooked rustic delight infused with bold South Indian spices.For an authentic country side experience', options: [{ type: 'Veg', price: 13 }, { type: 'Gobi', price: 13 }, { type: 'Paneer', price: 14 }, { type: 'Mushroom', price: 14 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Goat', price: 17 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], diet: 'veg-friendly' },
   { name: 'Majestic', description: 'Indulge in our yogurt, cream and jalapeno sauce a fan favorite delight!', options: [{ type: 'Veg', price: 12 }, { type: 'Gobi', price: 12 }, { type: 'Paneer', price: 13 }, { type: 'Mushroom', price: 13 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], diet: 'veg-friendly' },
   { name: 'Soya Masala Chops', description: 'Chunks of Soya (Textured Vegetable Protein) Marinated in a Masala Blend and Fried Tossed until Tender and Flavourful.', options: [{ type: 'Veg', price: 13 }], diet: 'veg' },
   { name: 'Pudina', description: 'Mint leaves, elevate Indian cuisine with refreshing flavor, notably in the house-special Pudina Sauce.', options: [{ type: 'Veg', price: 13 }, { type: 'Paneer', price: 14 }, { type: 'Mushroom', price: 14 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], diet: 'veg-friendly' },
   { name: 'Chennai Chicken 65', description: 'Spicy and Tangy Fried Chicken Dish, Bursting With Bold South Indian Flavors and Aromatic Spices', options: [{ type: 'Chicken', price: 14 }], diet: 'non-veg' },
   { name: 'Chicken Lollipop (5) (Tossed/Crispy)', description: 'Chicken Drumettes Marinated, Coated in Batter, and Deep-fried Until Crispy, Resembling Lollipops.', options: [{ type: 'Chicken', price: 13 }], diet: 'non-veg' },
   { name: 'Sukka', description: 'A South Indian Dry Dish Made With Meat Cooked With Spicesand Coconut, Resulting in a Rich and Aromatic Preparation.', options: [{ type: 'Chicken', price: 15 }, { type: 'Goat', price: 17 }], diet: 'non-veg' },
   { name: 'Apollo Fish', description: 'Crispy fish fillets, spicy batter, tossed in sauce', options: [{ type: 'Fish', price: 17 }], diet: 'non-veg' },
   { name: 'Natukodi Vepudu', description: 'Spicy, rustic village-style country chicken tossed with aromatic spices for a rich, flavorful taste.', options: [{ type: 'Chicken', price: 20 }], diet: 'non-veg' },
   { name: 'Chicken Satay', description: 'Skewered and Grilled Chicken Marinated in a Flavourful Blend of Spices', options: [{ type: 'Chicken', price: 14 }], isSignature: true, diet: 'non-veg' },
   { name: 'Chicken Wings (Tandoori/Ginger)', description: 'Chicken Wings Marinated in Yogurt and Tandoori Spices, Then Cooked in a Tandoor (Clay Oven) for a Smoky and Flavorful Taste/ Chicken Wings Marinated in a Tangy and Spicy Ginger-tamarind Sauce', options: [{ type: 'Chicken', price: 14 }], isSignature: true, diet: 'non-veg' },
   { name: 'Tawa Shrimp', description: 'Shrimp Cooked on a Hot Tawa (Griddle) With Spices and Herbs, Resulting in a Flavorful and Succulent Seafood Dish.', options: [{ type: 'Shrimp', price: 17 }], diet: 'non-veg' },
  ],

  'Indo-Chinese': [
   { name: 'Veg Spring Roll (6)', description: 'Filled with shredded cabbage and carrots, wrapped in thin pastry, deep-fried to golden perfection.', options: [{ type: 'Veg', price: 10 }], diet: 'veg' },
   { name: 'Manchurian (Appetizer)', description: 'Popular Indo-Chinese appetizer, tossed in tangy and spicy sauce with soy, garlic, ginger', options: [{ type: 'Veg', price: 12 }, { type: 'Paneer', price: 13 }, { type: 'Gobi', price: 13 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Fish', price: 15 }, { type: 'Shrimp', price: 15 }], diet: 'veg-friendly' },
   { name: 'Chilli (Appetizer)', description: 'Indo-Chinese favorites, Rooster in spicy sauce, onions, bell peppers, and green chilies.', options: [{ type: 'Veg', price: 12 }, { type: 'Paneer', price: 13 }, { type: 'Gobi', price: 13 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Fish', price: 15 }, { type: 'Shrimp', price: 15 }], diet: 'veg-friendly' },
   { name: 'Thai Curry (Red/Green) (Appetizer)', description: 'Thai-inspired appetizer with red/green curry flavors, coconut milk, herbs, and spices.', options: [{ type: 'Veg', price: 12 }, { type: 'Paneer', price: 13 }, { type: 'Gobi', price: 13 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Fish', price: 15 }, { type: 'Shrimp', price: 15 }], isSignature: true, diet: 'veg-friendly' },
   { name: 'Dragon (Appetizer)', description: 'Chicken/veggies in sweet- hot sauce akin to sweet and sour style', options: [{ type: 'Veg', price: 12 }, { type: 'Paneer', price: 13 }, { type: 'Gobi', price: 13 }, { type: 'Egg', price: 13 }, { type: 'Chicken', price: 14 }, { type: 'Fish', price: 15 }, { type: 'Shrimp', price: 15 }], diet: 'veg-friendly' },
   { name: 'Manchurian (Entree)', description: 'Popular Indo-Chinese entree served with steamed rice, tossed in tangy and spicy sauce with soy, garlic, ginger', options: [{ type: 'Veg', price: 14 }, { type: 'Paneer', price: 15 }, { type: 'Gobi', price: 15 }, { type: 'Egg', price: 15 }, { type: 'Chicken', price: 16 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], diet: 'veg-friendly' },
   { name: 'Chilli (Entree)', description: 'Indo-Chinese favorite entree served with steamed rice, in spicy sauce, onions, bell peppers, and green chilies.', options: [{ type: 'Veg', price: 14 }, { type: 'Paneer', price: 15 }, { type: 'Gobi', price: 15 }, { type: 'Egg', price: 15 }, { type: 'Chicken', price: 16 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], diet: 'veg-friendly' },
   { name: 'Thai Curry (Red/Green) (Entree)', description: 'Thai-inspired entree served with steamed rice, with red/green curry flavors, coconut milk, herbs, and spices.', options: [{ type: 'Veg', price: 14 }, { type: 'Paneer', price: 15 }, { type: 'Gobi', price: 15 }, { type: 'Egg', price: 15 }, { type: 'Chicken', price: 16 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], isSignature: true, diet: 'veg-friendly' },
   { name: 'Dragon (Entree)', description: 'Chicken/veggies in sweet- hot sauce akin to sweet and sour style, served with steamed rice.', options: [{ type: 'Veg', price: 14 }, { type: 'Paneer', price: 15 }, { type: 'Gobi', price: 15 }, { type: 'Egg', price: 15 }, { type: 'Chicken', price: 16 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], diet: 'veg-friendly' },
],
'Curries': [
   { name: 'Paneer Tikka Masala', description: 'Rich creamy and flavourful dish made with soft paneer cubes and tomato based sauce', options: [{ type: 'Paneer', price: 14 }], diet: 'veg' },
   { name: 'Paneer Butter Masala', description: 'Indulge in creamy Paneer Makhani, a rich tomato-based delight adorned with kasuri methi.', options: [{ type: 'Paneer', price: 14 }], diet: 'veg' },
   { name: 'Saag Paneer', description: 'Creamy spinach-infused paneer, seasoned with garlic, ginger, and spices, bursting with vibrant flavor.', options: [{ type: 'Paneer', price: 14 }], diet: 'veg' },
   { name: 'Dal Tadka / Dal Fry', description: 'Indian lentil dish with yellow lentils, onions, tomatoes, spices, tempered with ghee, cumin seeds, curry leaf, and red chilies.', options: [{ type: 'Veg', price: 12 }], diet: 'veg' },
   { name: 'Navaratan Korma', description: 'A Creamy and Mildly Spiced Mughlai Dish Made With a Variety of Vegetables and Nuts Cooked in a Rich and Flavorful Nut Gravy.', options: [{ type: 'Veg', price: 13 }], diet: 'veg' },
   { name: 'Malai Kofta', description: 'Mashed vegetables dumplings in creamy tomato nut gravy spiced to perfection', options: [{ type: 'Veg', price: 15 }], diet: 'veg' },
   { name: 'Jalfrezi', description: 'A Indian Curry Made With Stir-fried Vegetables Cooked With Onions, Bell Peppers, Tomatoes, and a Variety of Spices.', options: [{ type: 'Veg', price: 14 }, { type: 'Paneer', price: 15 }, { type: 'Mushroom', price: 16 }, { type: 'Chicken', price: 15 }, { type: 'Goat', price: 17 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], diet: 'veg-friendly' },
   { name: 'Chettinad', description: "Chettinad curry: Bold, spicy, aromatic blend from Tamil Nadu's rich culinary heritage.", options: [{ type: 'Veg', price: 14 }, { type: 'Paneer', price: 15 }, { type: 'Mushroom', price: 16 }, { type: 'Egg', price: 14 }, { type: 'Chicken', price: 15 }, { type: 'Goat', price: 17 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], diet: 'veg-friendly' },
   { name: 'Gongura', description: 'A Tangy and Flavorful Curry Made With Gongura (Sorrel Leaves), Often Cooked with Onions, Tomatoes, and Spices', options: [{ type: 'Veg', price: 14 }, { type: 'Paneer', price: 15 }, { type: 'Mushroom', price: 16 }, { type: 'Chicken', price: 15 }, { type: 'Goat', price: 17 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], isSpicy: true, isSignature: true, diet: 'veg-friendly' },
   { name: 'Ghee Roast Curry', description: 'A rich and aromatic dish made with a blend of spices roasted in golden ghee, offering a burst of bold flavors', options: [{ type: 'Veg', price: 14 }, { type: 'Paneer', price: 15 }, { type: 'Mushroom', price: 16 }, { type: 'Chicken', price: 15 }, { type: 'Goat', price: 17 }, { type: 'Fish', price: 17 }, { type: 'Shrimp', price: 17 }], isSignature: true, diet: 'veg-friendly' },
   { name: 'Butter Chicken', description: 'Tender Chicken Pieces Are Simmered in a Rich and Creamy Tomato-based Sauce, Flavoured With Butter, Cream and Aromatic Spices.', options: [{ type: 'Chicken', price: 15 }], diet: 'non-veg' },
   { name: 'Lamb Rogan Josh', description: 'A classic North Indian curry made with tender lamb pieces cooked in aromatic spices and yogurt-based gravy.', options: [{ type: 'Goat', price: 17 }], diet: 'non-veg' },
   { name: 'Fish Curry', description: 'A tangy and spicy curry made with fresh fish, tamarind, and traditional spices.', options: [{ type: 'Fish', price: 17 }], diet: 'non-veg' },
   { name: 'Prawn Curry', description: 'Prawns cooked in a flavorful and spicy coconut-based curry.', options: [{ type: 'Shrimp', price: 17 }], diet: 'non-veg' }
],
'Biryani & Mandi': [
   { name: 'Veg Biryani', description: 'Fragrant basmati rice cooked with mixed vegetables, saffron, and aromatic spices.', options: [{ type: 'Veg', price: 14 }], diet: 'veg' },
   { name: 'Paneer Biryani', description: 'Basmati rice cooked with soft paneer cubes, saffron, and spices.', options: [{ type: 'Paneer', price: 15 }], diet: 'veg' },
   { name: 'Chicken Biryani', description: 'Classic biryani with basmati rice, marinated chicken, and aromatic spices.', options: [{ type: 'Chicken', price: 16 }], diet: 'non-veg' },
   { name: 'Goat Biryani', description: 'Tender goat meat cooked with basmati rice and spices.', options: [{ type: 'Goat', price: 17 }], diet: 'non-veg' },
   { name: 'Fish Biryani', description: 'Basmati rice cooked with fresh fish and spices.', options: [{ type: 'Fish', price: 17 }], diet: 'non-veg' },
   { name: 'Shrimp Biryani', description: 'Basmati rice cooked with shrimp and aromatic spices.', options: [{ type: 'Shrimp', price: 17 }], diet: 'non-veg' }
],
'Rice & Breads': [
   { name: 'Jeera Rice', description: 'Basmati rice cooked with cumin seeds and mild spices.', options: [{ type: 'Veg', price: 8 }], diet: 'veg' },
   { name: 'Peas Pulao', description: 'Basmati rice cooked with peas and mild spices.', options: [{ type: 'Veg', price: 8 }], diet: 'veg' },
   { name: 'Plain Rice', description: 'Steamed basmati rice, simple and fluffy.', options: [{ type: 'Veg', price: 7 }], diet: 'veg' },
   { name: 'Naan', description: 'Soft, fluffy, leavened flatbread cooked in a tandoor.', options: [{ type: 'Veg', price: 4 }], diet: 'veg' },
   { name: 'Roti', description: 'Whole wheat flatbread, soft and healthy.', options: [{ type: 'Veg', price: 3 }], diet: 'veg' },
   { name: 'Paratha', description: 'Layered whole wheat flatbread, pan-fried to golden crisp.', options: [{ type: 'Veg', price: 5 }], diet: 'veg' }
],

  'Dosas & Chaat': [
  {
    name: 'Ragi Sangati',
    description: 'A wholesome and healthy dish made from ragi flour (finger millet) and rice. Rich in calcium, iron, and dietary fiber.',
    options: [
      { type: 'Veg (Gutti Vankaya)', price: 15 },
      { type: 'Chicken', price: 18 },
      { type: 'Goat', price: 20 },
      { type: 'Shrimp', price: 19 },
      { type: 'Fish', price: 19 },
      { type: 'Natukodi', price: 22 },
    ],
    isLimited: true,
    diet: 'veg-friendly',
  },
  { name: 'Kadak Ghee Roast Dosa', description: 'A crispy, cone-shaped dosa roasted with ghee.', options: [{ type: 'Veg', price: 10 }], isLimited: true, diet: 'veg' },
  { name: 'Matka Masala Dosa', description: 'Our signature masala dosa with a special potato filling.', options: [{ type: 'Veg', price: 13 }], isLimited: true, diet: 'veg' },
  { name: 'Bullet Dosa', description: 'A spicy version of the classic dosa.', options: [{ type: 'Veg', price: 12 }], isSpicy: true, isLimited: true, diet: 'veg' },
  { name: 'Paneer Manpasand Dosa', description: 'Dosa filled with a savory paneer mixture.', options: [{ type: 'Paneer', price: 13 }], isLimited: true, diet: 'veg' },
  { name: 'Palak Paneer Dosa', description: 'Dosa with a creamy spinach and paneer filling.', options: [{ type: 'Paneer', price: 13 }], isLimited: true, diet: 'veg' },
  { name: 'Veg Keema Dosa', description: 'Dosa filled with a spiced minced vegetable mixture.', options: [{ type: 'Veg', price: 15 }], isLimited: true, diet: 'veg' },
  { name: 'Andhra Special Chicken Dosa', description: 'Dosa filled with a spicy Andhra-style chicken.', options: [{ type: 'Chicken', price: 15 }], isSpicy: true, isLimited: true, diet: 'non-veg' },
  { name: 'Goat Keema Dosa', description: 'Dosa filled with flavorful and spicy minced goat meat.', options: [{ type: 'Goat', price: 16 }], isLimited: true, diet: 'non-veg' },
  { name: 'Seema Velluli Karam Dosa', description: 'Village special dosa with a spicy garlic paste.', options: [{ type: 'Veg', price: 13 }], isSpicy: true, isLimited: true, diet: 'veg' },
  { name: 'Malgudi Podi Dosa', description: 'Dosa sprinkled with a house special spice mix (podi).', options: [{ type: 'Veg', price: 13 }], isLimited: true, diet: 'veg' },
  { name: 'Chennai Style Thattu Dosa', description: 'Smaller, thicker, and softer dosas, Chennai street style.', options: [{ type: 'Veg', price: 12 }], isLimited: true, diet: 'veg' },
  { name: 'Maa Oori Guddu Dosa (Egg)', description: 'A village-style dosa topped with a spiced egg mixture.', options: [{ type: 'Egg', price: 13 }], isLimited: true, diet: 'non-veg' },
  { name: 'Natukodi Curry Dosa', description: 'Dosa served with a country chicken curry.', options: [{ type: 'Chicken', price: 16 }], isLimited: true, diet: 'non-veg' },
  { name: 'Pani Ke Batashe (10 piece)', description: 'Indian street food Pani Puri filled with spiced water, chickpeas, and topped with sev.', options: [{ type: 'Veg', price: 8 }], isLimited: true, diet: 'veg' },
  { name: 'Dahi Ke Batashe (10 piece)', description: 'Indian street food Pani Puri filled with spiced yogurt, chickpeas, topped with sev.', options: [{ type: 'Veg', price: 9 }], isLimited: true, diet: 'veg' },
  { name: 'Samosa Chana Chaat', description: 'Pastries filled with fresh potatoes and green peas, served with chickpeas and Indian dressing.', options: [{ type: 'Veg', price: 10 }], isLimited: true, diet: 'veg' },
],

'Kids, Desserts & Drinks': [
  { name: 'French Fries', description: 'Classic golden french fries.', options: [{ price: 7 }], diet: 'veg' },
  { name: 'Chicken Nuggets', description: 'Crispy breaded chicken nuggets.', options: [{ price: 8 }], diet: 'non-veg' },
  { name: 'Butter Chicken/Paneer Combo', description: 'Served with Steam Rice or Naan and One Samosa.', options: [{ price: 11 }], diet: 'veg-friendly' },
  { name: 'Manchurian Combo', description: 'Served with Fried Rice or Noodles and One Spring roll.', options: [{ price: 11 }], diet: 'veg-friendly' },
  { name: 'Dal Rice Combo', description: 'Served with Steam Rice, Dal curry and One Samosa.', options: [{ price: 10 }], diet: 'veg' },
  { name: 'Gulab Jamun', description: 'Soft, melt-in-your-mouth deep-fried dumplings in a sweet syrup.', options: [{ price: 5 }], diet: 'veg' },
  { name: 'Rasmalai', description: 'Spongy cheese patties soaked in thickened, sweetened milk.', options: [{ price: 5 }], diet: 'veg' },
  { name: 'Rabdi Gulab Jamun', description: 'Gulab jamun served with rich, thickened sweet milk (rabdi).', options: [{ price: 6 }], diet: 'veg' },
  { name: 'Kala Jamun', description: 'A darker, richer version of gulab jamun.', options: [{ price: 6 }], diet: 'veg' },
  { name: 'Apricot Delight', description: 'A sweet dessert made from dried apricots.', options: [{ price: 7 }], isSignature: true, diet: 'veg' },
  { name: 'Tender Coconut Souffle', description: 'A light and airy dessert with the flavor of fresh coconut.', options: [{ price: 7 }], isSignature: true, diet: 'veg' },
  { name: 'Lotus Cheesecake', description: 'Cheesecake flavored with Lotus Biscoff cookies.', options: [{ price: 7 }], isSignature: true, diet: 'veg' },
  { name: 'Lassi (Mango/Sweet)', description: 'A refreshing yogurt-based drink.', options: [{ price: 4 }], diet: 'veg' },
  { name: 'Sapota Shake', description: 'A creamy milkshake made from sapota (chickoo) fruit.', options: [{ price: 7 }], diet: 'veg' },
  { name: 'Chai', description: 'Traditional Indian spiced tea.', options: [{ price: 3 }], diet: 'veg' },
],

};


const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('Soups & Starters');
  const [dietFilter, setDietFilter] = useState('all');

  const categories = Object.keys(menuData);

  const filteredItems = useMemo(() => {
    let items = menuData[activeCategory];
    if (dietFilter === 'all') {
      return items;
    }
    return items.filter(item => {
      if (dietFilter === 'veg') {
        return item.diet === 'veg' || (item.diet === 'veg-friendly' && item.options.some(opt => ['Veg', 'Paneer', 'Gobi', 'Mushroom', 'Broccoli'].includes(opt.type) || !opt.type));
      }
      if (dietFilter === 'non-veg') {
        return item.diet === 'non-veg' || (item.diet === 'veg-friendly' && item.options.some(opt => ['Chicken', 'Goat', 'Fish', 'Shrimp', 'Egg', 'Lamb'].includes(opt.type)));
      }
      return false;
    });
  }, [activeCategory, dietFilter]);

  return (
    <div className="min-h-screen text-[#F5F5DC]" style={{
  background: `
    /* Layer 1 (Top): Soft vignette */
    linear-gradient(
      to right,
      rgba(11, 19, 43, 0.6) 5%,
      transparent 30%,
      transparent 70%,
      rgba(11, 19, 43, 0.6) 95%
    ),

    /* Layer 2 (Middle): Transparent SVG pattern */
    url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23efbf04' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E"),

    /* Layer 3 (Bottom): Solid background color */
    #0B132B
  `
}}>
      {/* Header */}
      <section className="py-28 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl md:text-6xl font-bold font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Culinary <span className="text-[#FFC72C]">Creations</span>
          </motion.h1>
          <motion.p
            className="text-xl text-[#F5F5DC]/80 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Authentic flavors from every corner of India, crafted with passion.
          </motion.p>
        </div>
      </section>

      {/* Main Menu Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full font-sans font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#FFC72C] text-[#1a0000] shadow-lg shadow-[#FFC72C]/20'
                    : 'border border-[#E59500]/50 text-[#F5F5DC]/80 hover:border-[#E59500] hover:text-[#F5F5DC]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Diet Filters */}
           <div className="flex justify-center items-center gap-4 mb-12">
             <button onClick={() => setDietFilter('all')} className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${dietFilter === 'all' ? 'text-[#FFC72C]' : 'text-[#F5F5DC]/70 hover:text-white'}`}>All</button>
             <span className="text-[#E59500]/30">|</span>
             <button onClick={() => setDietFilter('veg')} className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${dietFilter === 'veg' ? 'text-green-400' : 'text-[#F5F5DC]/70 hover:text-white'}`}><Leaf size={16}/> Veg</button>
             <span className="text-[#E59500]/30">|</span>
             <button onClick={() => setDietFilter('non-veg')} className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${dietFilter === 'non-veg' ? 'text-red-400' : 'text-[#F5F5DC]/70 hover:text-white'}`}><Drumstick size={16} /> Non-Veg</button>
           </div>


          {/* Items Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + dietFilter}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredItems.map((item, index) => (
                <motion.div key={index} className="flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold font-serif text-[#F5F5DC]">{item.name}</h3>
                        <div className="flex items-center gap-3">
                            {item.isSpicy && <Flame className="w-5 h-5 text-orange-400" title="Spicy" />}
                            {item.isSignature && <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" title="Signature Dish" />}
                            {item.isLimited && <Clock className="w-5 h-5 text-blue-400" title="Limited Availability" />}
                        </div>
                    </div>
                  
                  <p className="text-[#F5F5DC]/70 font-sans text-sm mb-3 flex-grow">{item.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                        {item.options.map((opt, i) => (
                            <div key={i} className="flex items-baseline">
                                {opt.type && <span className="text-[#F5F5DC]/80 mr-2">{opt.type}</span>}
                                <span className="font-bold text-[#FFC72C]">${opt.price.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                  </div>

                  <div className="border-b border-[#E59500]/20 mt-6"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      
    </div>
  );
};

export default MenuPage;