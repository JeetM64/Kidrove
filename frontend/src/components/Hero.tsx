import { Bot, Cpu, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('registration-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-24 sm:py-32 text-white">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/4 w-96 h-96 bg-brand-primary opacity-20 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-brand-secondary opacity-20 blur-3xl rounded-full animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-300 text-sm font-medium animate-bounce-slow">
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              <span>Unleash Your Child's Tech Potential</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
              AI & Robotics <br />
              <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Summer Workshop
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Empower your child to become a creator, not just a consumer. In this 4-week action-packed camp, kids build real AI models, dive into visual block coding, and explore the foundations of smart robotics through live, playful instruction.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button
                id="hero-enroll-cta"
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#details-section"
                className="inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 bg-slate-800/40 hover:bg-slate-800/80 text-slate-200 font-medium px-8 py-4 rounded-xl transition-colors"
              >
                Learn More
              </a>
            </div>
            
            {/* Social Trust Metrics */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full border-2 border-slate-900 bg-teal-500 flex items-center justify-center text-[10px] font-bold text-white">⭐</span>
                  <span className="w-8 h-8 rounded-full border-2 border-slate-900 bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">🤖</span>
                  <span className="w-8 h-8 rounded-full border-2 border-slate-900 bg-rose-500 flex items-center justify-center text-[10px] font-bold text-white">🚀</span>
                </span>
                <span>Join <strong>1,200+</strong> happy young creators</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-700 rounded-full hidden sm:block"></div>
              <div>Rated <strong>4.9/5</strong> by Parents</div>
            </div>
          </div>
          
          {/* Visual Showcase Block */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-indigo-500/10 to-rose-500/10 border border-slate-800 rounded-3xl p-8 flex items-center justify-center backdrop-blur-md shadow-2xl animate-float">
              {/* Core robot graphics */}
              <div className="absolute top-8 right-8 text-brand-yellow/80">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              <div className="absolute bottom-8 left-8 text-brand-accent/80">
                <Cpu className="w-10 h-10" />
              </div>
              
              <div className="flex flex-col items-center space-y-6">
                <div className="relative p-6 bg-indigo-500/20 border border-indigo-500/30 rounded-full">
                  <Bot className="w-24 h-24 text-indigo-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-400 rounded-full"></div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="bg-slate-800/90 border border-slate-700 px-4 py-2 rounded-xl text-sm font-semibold tracking-wider text-teal-400 uppercase">
                    Kidrove Robotics
                  </div>
                  <p className="text-xs text-slate-400 font-mono">Status: Ready to Build_</p>
                </div>
              </div>
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 border border-dashed border-slate-700/60 rounded-3xl pointer-events-none scale-105"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
