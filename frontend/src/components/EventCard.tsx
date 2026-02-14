import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface EventProps {
  title: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string;
}

export default function EventCard({ title, date, time, description, imageUrl }: EventProps) {
  return (
    <div className="bg-[#0a1628] border border-[#d4af37]/30 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col h-full">
      {/* Event Image */}
      <div className="h-56 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent opacity-60"></div>
      </div>

      {/* Event Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-serif font-bold text-[#d4af37] mb-3">{title}</h3>
        
        <div className="flex flex-col gap-2 text-sm text-[#f5f5dc]/70 mb-4 bg-[#0f1d33] p-3 rounded-lg border border-[#d4af37]/10">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-[#d4af37]" />
            <span className="font-semibold text-[#f5f5dc]">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#d4af37]" />
            <span>{time}</span>
          </div>
        </div>

        <p className="text-[#f5f5dc]/80 mb-6 line-clamp-3 leading-relaxed flex-grow">
          {description}
        </p>

        <button className="w-full py-3 border border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-[#0a1628] transition-all duration-300 font-bold uppercase tracking-wider text-sm">
          Reserve Now
        </button>
      </div>
    </div>
  );
}