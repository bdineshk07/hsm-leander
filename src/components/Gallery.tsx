import { useState } from 'react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Our Cuisine', 'Our Ambiance', 'Our Exterior', 'Events'];

  const images = [
    {
      category: 'Our Cuisine',
      url: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Biryani',
    },
    {
      category: 'Our Cuisine',
      url: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tandoori Chicken',
    },
    {
      category: 'Our Cuisine',
      url: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Curry',
    },
    {
      category: 'Our Ambiance',
      url: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Interior',
    },
    {
      category: 'Our Ambiance',
      url: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dining Area',
    },
    {
      category: 'Our Exterior',
      url: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant Exterior',
    },
    {
      category: 'Events',
      url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Event Setup',
    },
    {
      category: 'Events',
      url: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Celebration',
    },
  ];

  const filteredImages =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="relative py-20 bg-[#0a1628] overflow-hidden" style={{
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
      <div className="absolute inset-0 geometric-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-[#f5f5dc]">
            A visual journey through our culinary world.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-serif text-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                  : 'text-[#f5f5dc] hover:text-[#d4af37]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37] transition-all duration-300 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center bg-[#0f1d33]/50 border border-[#d4af37]/30 rounded-lg p-12">
          <h3 className="text-3xl font-serif font-bold text-[#d4af37] mb-4">
            Experience It Yourself
          </h3>
          <p className="text-xl text-[#f5f5dc] mb-8">
            Pictures can't capture the full experience - come taste our story.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-[#d4af37] text-[#f5f5dc] font-serif text-lg rounded-md hover:bg-[#e6c158] transition-all duration-300 shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105"
          >
            Book Your Visit
          </a>
        </div>
      </div>
    </section>
  );
}
