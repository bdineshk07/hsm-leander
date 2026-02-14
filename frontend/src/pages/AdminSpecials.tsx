/*

import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { Upload, CheckCircle } from 'lucide-react';

export default function AdminSpecials() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Form State
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // CHANGE THIS PASSWORD TO SOMETHING SECURE
    if (password === 'SpicyMatka2026') setIsAuthenticated(true);
    else alert('Incorrect Password');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return alert("Please select an image");

    setUploading(true);
    try {
      // 1. Upload Image
      const imageRef = ref(storage, `events/${imageFile.name + Date.now()}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      // 2. Save Data
      await addDoc(collection(db, "events"), {
        title, date, time, description, imageUrl,
        createdAt: serverTimestamp()
      });

      alert("Event Published Successfully!");
      // Reset form
      setTitle(''); setDate(''); setTime(''); setDescription(''); setImageFile(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed. Check console.");
    } finally {
      setUploading(false);
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1d33] p-4">
        <form onSubmit={handleLogin} className="bg-[#0a1628] p-8 rounded-xl border border-[#d4af37] w-full max-w-sm text-center">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Admin Access</h2>
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 bg-[#0f1d33] border border-[#d4af37]/50 rounded text-white focus:outline-none focus:border-[#d4af37]"
          />
          <button className="w-full bg-[#d4af37] text-black font-bold py-3 rounded hover:bg-[#c5a028]">Login</button>
        </form>
      </div>
    );
  }

  // Upload Form
  return (
    <div className="min-h-screen py-20 bg-[#0f1d33] text-[#f5f5dc]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-[#d4af37] mb-8 text-center">Add New Event</h2>
        
        <form onSubmit={handleSubmit} className="bg-[#0a1628] p-8 rounded-xl border border-[#d4af37]/30 shadow-2xl space-y-6">
          
          <div>
            <label className="block text-[#d4af37] mb-2 font-semibold">Event Title</label>
            <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded-lg focus:outline-none focus:border-[#d4af37]" placeholder="e.g. Grand Buffet" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#d4af37] mb-2 font-semibold">Date</label>
              <input required type="text" value={date} onChange={e => setDate(e.target.value)} className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded-lg" placeholder="e.g. Oct 24, 2026" />
            </div>
            <div>
              <label className="block text-[#d4af37] mb-2 font-semibold">Time</label>
              <input required type="text" value={time} onChange={e => setTime(e.target.value)} className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded-lg" placeholder="e.g. 7:00 PM - 10:00 PM" />
            </div>
          </div>

          <div>
            <label className="block text-[#d4af37] mb-2 font-semibold">Description</label>
            <textarea required value={description} onChange={e => setDescription(e.target.value)} className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded-lg h-32 focus:outline-none focus:border-[#d4af37]" placeholder="Event details..." />
          </div>

          <div className="border-2 border-dashed border-[#d4af37]/40 rounded-lg p-6 text-center hover:bg-[#0f1d33]/50 transition-colors">
            <Upload className="mx-auto text-[#d4af37] mb-3" />
            <input required type="file" accept="image/*" onChange={e => setImageFile(e.target.files ? e.target.files[0] : null)} className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#d4af37] file:text-[#0a1628] hover:file:bg-[#e6c158]" />
          </div>

          <button disabled={uploading} type="submit" className={`w-full py-4 text-lg font-bold rounded-lg transition-all flex justify-center items-center gap-2 ${uploading ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#d4af37] hover:bg-[#e6c158] text-[#0a1628]'}`}>
            {uploading ? 'Uploading...' : <><CheckCircle size={20} /> Publish Event</>}
          </button>

        </form>
      </div>
    </div>
  );
}
*/


// src/pages/AdminSpecials.tsx


import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle, Trash2 } from 'lucide-react';

export default function AdminSpecials() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Form State
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // NEW: State for the list of events
  const [events, setEvents] = useState<any[]>([]);

  // NEW: Fetch events from backend
  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/events');
      const data = await res.json();
      setEvents(data);
    } catch (err) { console.error(err); }
  };

  // NEW: Load events when page opens
  useEffect(() => {
    fetchEvents();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'SpicyMatka2026') {
      setIsAuthenticated(true);
      fetchEvents(); // Load events after login
    } else {
      alert('Incorrect Password');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return alert("Please select an image");

    setUploading(true);
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('description', description);
    formData.append('image', imageFile);

    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: { 'x-admin-secret': 'SpicyMatka2026' },
        body: formData
      });

      if (response.ok) {
        alert("Event Published!");
        // Clear form
        setTitle(''); setDate(''); setTime(''); setDescription(''); setImageFile(null);
        // Refresh list
        fetchEvents();
      } else {
        alert("Server Error");
      }
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  // NEW: Delete Function
  const handleDelete = async (id: string) => {
    if(!confirm("Are you sure you want to delete this event?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/events/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-secret': 'SpicyMatka2026' }
      });
      
      if (res.ok) {
        alert("Event Deleted");
        fetchEvents(); // Refresh the list
      } else {
        alert("Failed to delete");
      }
    } catch (err) { console.error(err); }
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f1d33] p-4">
            <form onSubmit={handleLogin} className="bg-[#0a1628] p-8 rounded-xl border border-[#d4af37] w-full max-w-sm text-center">
            <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Admin Access</h2>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 mb-4 bg-[#0f1d33] border border-[#d4af37]/50 rounded text-white" placeholder="Password" />
            <button className="w-full bg-[#d4af37] text-black font-bold py-3 rounded">Login</button>
            </form>
        </div>
    );
  }

  // DASHBOARD SCREEN
  return (
    <div className="min-h-screen py-20 bg-[#0f1d33] text-[#f5f5dc]">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-[#d4af37] mb-8 text-center">Manage Events</h2>
            
            {/* Upload Form */}
            <form onSubmit={handleSubmit} className="bg-[#0a1628] p-8 rounded-xl border border-[#d4af37]/30 space-y-6 mb-12">
                <input required type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Event Title" className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded text-white"/>
                
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" value={date} onChange={e => setDate(e.target.value)} placeholder="Date (e.g. Oct 24)" className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded text-white"/>
                  <input required type="text" value={time} onChange={e => setTime(e.target.value)} placeholder="Time (e.g. 7 PM)" className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded text-white"/>
                </div>

                <textarea required value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded text-white h-24"/>
                
                <div className="border border-dashed border-[#d4af37]/30 p-4 rounded text-center">
                  <input type="file" onChange={e => setImageFile(e.target.files ? e.target.files[0] : null)} className="text-white"/>
                </div>
                
                <button disabled={uploading} className="w-full bg-[#d4af37] py-3 text-black font-bold rounded flex items-center justify-center gap-2">
                    {uploading ? 'Uploading...' : <><CheckCircle size={20}/> Publish Event</>}
                </button>
            </form>

            {/* NEW: Existing Events List */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#d4af37] mb-6 border-b border-[#d4af37]/30 pb-2">Existing Events</h3>
                
                <div className="grid gap-4">
                  {events.length === 0 && <p className="text-gray-400 text-center">No events found.</p>}
                  
                  {events.map(event => (
                    <div key={event._id} className="flex items-center justify-between bg-[#0a1628] p-4 rounded-lg border border-[#d4af37]/20">
                      <div className="flex items-center gap-4">
                        {/* Show image if it exists */}
                        <img src={event.imageUrl} alt={event.title} className="w-16 h-16 object-cover rounded bg-gray-800" />
                        <div>
                          <h4 className="font-bold text-[#f5f5dc] text-lg">{event.title}</h4>
                          <p className="text-sm text-[#d4af37]">{event.date} • {event.time}</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => handleDelete(event._id)}
                        className="p-3 text-red-400 hover:bg-red-900/20 rounded-full transition-colors border border-transparent hover:border-red-400/30"
                        title="Delete Event"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </div>
  );
}