"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Stethoscope, Syringe, Sparkles, Activity, ShieldCheck, 
  Smile, Phone, MapPin, Clock, Award, CheckCircle2, MessageCircle, Navigation, ChevronRight, Star, Quote
} from "lucide-react";

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Thakur Ajay Singh",
      text: "We recently had the privilege of being treated by Dr. Renu Tanwar for my 75-year-old mother. I cannot speak highly enough of the exceptional care we received for an extensive procedure involving 7 root canals.",
      rating: 5,
      tag: "Verified Patient"
    },
    {
      name: "Usha Rani Sharma",
      text: "Got a dental filling done. The line of treatment was clearly explained. It felt more like a friendly meet than a clinical visit. Highly recommend for her friendly nature and expertise.",
      rating: 5,
      tag: "Verified Patient"
    },
    {
      name: "Manju Chawla",
      text: "Excellent experience. Dr. Renu is very patient and explains everything in detail. The clinic is very hygienic and well-maintained. Best dental care in Sector 77.",
      rating: 5,
      tag: "Local Guide"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const services = [
    { title: "Root Canal Treatment", desc: "Specialized painless endodontic therapy to save your natural teeth.", icon: <Activity className="w-8 h-8 text-teal-600" /> },
    { title: "Dental Implants", desc: "Permanent solutions for missing teeth with natural-looking results.", icon: <ShieldCheck className="w-8 h-8 text-teal-600" /> },
    { title: "Teeth Whitening", desc: "Professional brightening treatments for a radiant, confident smile.", icon: <Sparkles className="w-8 h-8 text-teal-600" /> },
    { title: "Crowns & Bridges", desc: "Durable restorations designed to match your natural tooth color.", icon: <Award className="w-8 h-8 text-teal-600" /> },
    { title: "Tooth Extraction", desc: "Safe and gentle removal of problematic or wisdom teeth.", icon: <Syringe className="w-8 h-8 text-teal-600" /> },
    { title: "General Checkup", desc: "Comprehensive cleaning and exams to maintain oral health.", icon: <Stethoscope className="w-8 h-8 text-teal-600" /> },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800 selection:bg-teal-100">
      {/* Navigation - RESTORED SUBTEXTS */}
      <header className="fixed w-full bg-white/80 backdrop-blur-xl shadow-sm z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold text-blue-600 tracking-tight">
            Adiagstya<span className="text-teal-600"> Dental</span>
          </motion.h1>
          <div className="hidden md:flex gap-10 font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#about" className="hover:text-blue-600 transition">Our Specialist</a>
            <a href="#reviews" className="hover:text-blue-600 transition">Patient Stories</a>
            <a href="#contact" className="hover:text-blue-600 transition">Location</a>
          </div>
          <a href="tel:+918130354198" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-100">
            Call Clinic
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Welcome to Adiagstya Dental</span>
            <h2 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Modern Care for a <span className="text-teal-600">Perfect Smile</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-light">
              Experience painless dentistry with Dr. Renu Tanwar. We use advanced technology to ensure your comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="https://wa.me/918130354198" className="bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:bg-teal-700 transition flex items-center justify-center gap-2">
                Book Appointment <ChevronRight size={20}/>
              </a>
            </div>
          </motion.div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Clinic" className="rounded-[32px] shadow-2xl border-8 border-white object-cover h-[500px] w-full" />
          </div>
        </div>
      </section>

      {/* Specialist Section - WITH REAL PHOTO */}
      <section id="about" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[48px] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <img 
                src="https://raw.githubusercontent.com/get-pantry/pantry-main/main/dr-renu-tanwar.png" 
                alt="Dr. Renu Tanwar" 
                className="rounded-[40px] shadow-2xl h-[600px] w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-white">
              <h3 className="text-5xl font-black mb-6">Dr. Renu Tanwar</h3>
              <p className="text-teal-400 text-xl font-medium mb-10 italic">BDS, MDS – Conservative Dentistry & Endodontics</p>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                With over 21 years of experience, Dr. Tanwar is renowned for her precision in complex root canals and aesthetic smile makeovers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 {['Painless RCT', 'Smile Design', '21+ Years Exp', 'Sterile Clinic'].map((tag, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-slate-300 bg-white/5 p-4 rounded-2xl">
                     <CheckCircle2 className="text-teal-400" size={20}/>
                     <span className="font-semibold">{tag}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Slider - RESTORED */}
      <section id="reviews" className="py-32 px-8 bg-blue-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-white text-4xl font-black mb-16">What Our Patients Say</h3>
          <div className="min-h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={currentReview} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white rounded-[40px] p-10 shadow-2xl">
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-2xl font-medium text-slate-700 leading-relaxed mb-10">"{reviews[currentReview].text}"</p>
                <span className="text-slate-900 font-black text-xl">{reviews[currentReview].name}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact & Timings - RESTORED 7 DAYS */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h3 className="text-5xl font-black text-slate-900">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <MapPin className="text-blue-600" size={28}/>
                <div>
                  <h4 className="font-bold text-xl mb-2">Location</h4>
                  <p className="text-slate-500 text-lg">T-804, Prateek Wisteria, Sector 77, Noida, UP</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Clock className="text-blue-600" size={28}/>
                <div>
                  <h4 className="font-bold text-xl mb-2">Clinic Hours</h4>
                  <p className="text-slate-500 text-lg font-medium">Monday – Sunday: 10:00 AM – 8:00 PM</p>
                  <p className="text-teal-600 font-bold uppercase text-sm">Open 7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-4 z-50">
        <a href="https://wa.me/918130354198" className="bg-green-500 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition"><MessageCircle size={32} /></a>
        <a href="tel:+918130354198" className="bg-blue-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition"><Phone size={32} /></a>
      </div>
    </main>
  );
