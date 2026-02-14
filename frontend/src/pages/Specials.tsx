/*

import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import EventCard from '../components/EventCard';
import { ChefHat, Sparkles } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string;
}

export default function Specials() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const eventsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Event[];
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section className="min-h-screen py-20 bg-[#0f1d33] text-[#f5f5dc]" style={{
      background: `linear-gradient(to right, rgba(11, 19, 43, 0.95), rgba(11, 19, 43, 0.98))`
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        // Header 
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37] mb-4">
            Upcoming Specials Events
          </h2>
          <div className="h-1 w-24 bg-[#d4af37] mx-auto rounded-full mb-4"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d4af37]"></div>
          </div>
        ) : events.length === 0 ? (
          
          // =========================================
            // COMING SOON MESSAGE (Empty State)
             //========================================= 
          <div className="flex flex-col items-center justify-center py-20 text-center border border-[#d4af37]/20 rounded-2xl bg-[#0a1628]/50 backdrop-blur-sm">
             <div className="relative mb-6">
                <ChefHat size={80} className="text-[#d4af37] opacity-80" />
                <Sparkles size={30} className="text-white absolute -top-2 -right-4 animate-pulse" />
             </div>
             <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#f5f5dc] mb-4 tracking-wide">
               COMING SOON
             </h3>
             <p className="text-xl text-[#d4af37] font-medium max-w-lg">
               We are crafting something special in our kitchen! <br/>
               Stay tuned for exclusive events and new menu launches.
             </p>
          </div>

        ) : (
          // Events Grid 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard 
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                description={event.description}
                imageUrl={event.imageUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
*/



import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import { ChefHat, Sparkles } from 'lucide-react';

const API_URL = 'http://localhost:5000/api/events'; 

export default function Specials() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen py-20 bg-[#0f1d33] text-[#f5f5dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37] mb-4">
            Upcoming Specials & Events
          </h2>
          <div className="h-1 w-24 bg-[#d4af37] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us for exclusive dining experiences and seasonal celebrations.
          </p>
        </div>

        {/* LOADING STATE (The Spinner) */}
        {loading ? (
          <div className="flex flex-col justify-center items-center h-64">
             <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#d4af37] mb-4"></div>
             <p className="text-[#d4af37] animate-pulse">Loading events...</p>
          </div>
        ) : events.length === 0 ? (
          
          /* EMPTY STATE (No Events Found) */
          <div className="flex flex-col items-center justify-center py-20 text-center border border-[#d4af37]/20 rounded-2xl bg-[#0a1628]/50 backdrop-blur-sm">
            <div className="relative mb-6">
                <ChefHat size={80} className="text-[#d4af37] opacity-80" />
                <Sparkles size={30} className="text-white absolute -top-2 -right-4 animate-pulse" />
            </div>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#f5f5dc] mb-4 tracking-wide">
              COMING SOON
            </h3>
            <p className="text-xl text-[#d4af37] font-medium max-w-lg">
              We are crafting something special!
            </p>
          </div>

        ) : (

          /* DATA STATE (Show the Cards) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard 
                key={event._id}
                title={event.title}
                date={event.date}
                time={event.time}
                description={event.description}
                imageUrl={event.imageUrl}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}