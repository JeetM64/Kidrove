import Hero from './components/Hero';
import DetailsGrid from './components/DetailsGrid';
import LearningOutcomes from './components/LearningOutcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import { Bot, Star, Shield, GraduationCap } from 'lucide-react';

export default function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById('registration-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-500 rounded-xl text-white shadow-md shadow-indigo-200 flex items-center justify-center">
                <Bot className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                Kidrove
              </span>
            </div>

            {/* Navigation links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <a href="#details-section" className="hover:text-indigo-600 transition-colors">Highlights</a>
              <a href="#outcomes-section" className="hover:text-indigo-600 transition-colors">What You Learn</a>
              <a href="#faq-section" className="hover:text-indigo-600 transition-colors">FAQs</a>
            </nav>

            {/* Header CTA */}
            <div>
              <button
                id="nav-enroll-cta"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-indigo-100 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Details Grid Section */}
        <DetailsGrid />
        
        {/* 3. Learning Outcomes Section */}
        <div id="outcomes-section" className="scroll-mt-6">
          <LearningOutcomes />
        </div>
        
        {/* 4. FAQ Accordion Section */}
        <FAQ />
        
        {/* 5. Registration Form Section */}
        <RegistrationForm />
        
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            
            {/* Column 1: Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="p-1.5 bg-indigo-500 rounded-lg text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="text-lg font-bold text-white tracking-tight">Kidrove</span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm">
                Empowering children to shape the future through experiential learning in Coding, Robotics, and Artificial Intelligence.
              </p>
            </div>
            
            {/* Column 2: Badges / Trust */}
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center text-slate-300">
                <Shield className="w-6 h-6 text-teal-400 mb-1" />
                <span className="text-xs font-semibold">100% Safe Environment</span>
              </div>
              <div className="flex flex-col items-center text-slate-300">
                <Star className="w-6 h-6 text-brand-yellow mb-1" />
                <span className="text-xs font-semibold">Top-Rated Classes</span>
              </div>
              <div className="flex flex-col items-center text-slate-300">
                <GraduationCap className="w-6 h-6 text-indigo-400 mb-1" />
                <span className="text-xs font-semibold">Expert Instructors</span>
              </div>
            </div>

            {/* Column 3: Copy / Details */}
            <div className="text-sm md:text-right space-y-2">
              <div>© {new Date().getFullYear()} Kidrove. All rights reserved.</div>
              <div className="flex justify-center md:justify-end gap-4 text-xs text-slate-500">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:underline">Terms of Service</a>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
