import React from 'react';
import { Award, Code2, BrainCircuit, Cpu, Trophy, Lightbulb } from 'lucide-react';

interface Outcome {
  id: string;
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

export default function LearningOutcomes() {
  const outcomes: Outcome[] = [
    {
      id: 'outcome-1',
      num: '01',
      title: 'Block Coding Basics',
      desc: 'Master visual programming interfaces like Scratch to build computational thinking, variables, loops, and conditions.',
      icon: <Code2 className="w-6 h-6" />,
      color: 'bg-orange-500 text-white',
    },
    {
      id: 'outcome-2',
      num: '02',
      title: 'Building AI Models',
      desc: 'Understand and train basic Machine Learning models, exploring Image Classification and Voice Recognition algorithms.',
      icon: <BrainCircuit className="w-6 h-6" />,
      color: 'bg-indigo-500 text-white',
    },
    {
      id: 'outcome-3',
      num: '03',
      title: 'Robotics Hardware Concepts',
      desc: 'Get introduced to microcontrollers, sensors, actuators, and the hardware fundamentals that power modern automation.',
      icon: <Cpu className="w-6 h-6" />,
      color: 'bg-cyan-500 text-white',
    },
    {
      id: 'outcome-4',
      num: '04',
      title: 'Constructing Smart Projects',
      desc: 'Apply newly gained knowledge to program interactive mini-games, automated alert systems, and smart applications.',
      icon: <Trophy className="w-6 h-6" />,
      color: 'bg-emerald-500 text-white',
    },
    {
      id: 'outcome-5',
      num: '05',
      title: 'Algorithmic Problem Solving',
      desc: 'Learn how to deconstruct large, complex problems into manageable step-by-step logic, enhancing reasoning skills.',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'bg-rose-500 text-white',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Your Young Innovator Will Learn
          </h2>
          <div className="w-16 h-1.5 bg-brand-purple mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-lg text-slate-600">
            A carefully designed curriculum that turns consumption into creation.
          </p>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
            {/* Background graphics */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="space-y-6 relative z-10">
              <span className="bg-white/20 border border-white/30 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                The Kidrove Method
              </span>
              <h3 className="text-2xl font-bold">Hands-On & Playful Learning</h3>
              <p className="text-indigo-100 font-light leading-relaxed">
                We believe kids learn best when they build things. Instead of boring lectures, each session is packed with coding challenges, interactive activities, and live quizzes.
              </p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>100% Practical Project Building</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Small Cohorts for Personal Care</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Interactive Live Support & Doubt Clearing</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 p-4 bg-white/10 border border-white/20 rounded-2xl flex items-center gap-4 relative z-10">
              <Award className="w-12 h-12 text-brand-yellow shrink-0" />
              <div>
                <h4 className="font-semibold">Graduation Certificate</h4>
                <p className="text-xs text-indigo-200">Shareable certificate of completion to boost confidence!</p>
              </div>
            </div>
          </div>

          {/* Right Column: Outcomes List */}
          <div className="lg:col-span-7 space-y-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome.id}
                id={outcome.id}
                className="premium-card flex flex-col sm:flex-row items-start gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-slate-200"
              >
                {/* Number or Icon */}
                <div className={`p-3 rounded-xl shrink-0 ${outcome.color}`}>
                  {outcome.icon}
                </div>
                
                {/* Text */}
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 font-mono tracking-widest uppercase">
                      Outcome {outcome.num}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">
                    {outcome.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {outcome.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
