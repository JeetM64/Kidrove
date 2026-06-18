import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'faq-prereq',
      question: 'Are there any prerequisites for this workshop?',
      answer: 'No prior coding experience is required! This workshop starts from the absolute basics. Our expert instructors guide kids step-by-step through block programming, ensuring every child can follow along and build confidence, regardless of their starting point.',
    },
    {
      id: 'faq-hardware',
      question: 'What hardware and software does my child need?',
      answer: 'Your child will need a desktop or laptop computer (Windows, macOS, or ChromeOS) with a functioning webcam, microphone, and a stable internet connection. All coding tools and AI engines we use run directly inside the Google Chrome browser, so no software installation is needed.',
    },
    {
      id: 'faq-recordings',
      question: 'Will recordings of the classes be available if my child misses one?',
      answer: 'Yes, absolutely! We understand that schedules can be busy. After each live session, the complete class recording will be uploaded to our private student dashboard. Your child will have lifetime access to these recordings to review or catch up at their own convenience.',
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 bg-slate-50 relative scroll-mt-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex p-2 bg-indigo-500/10 rounded-full text-indigo-500 mb-3">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1.5 bg-brand-primary mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-lg text-slate-600">
            Have questions? We have answers. If you need more details, feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-slate-300"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  className="w-full flex items-center justify-between text-left p-6 font-semibold text-slate-800 hover:text-indigo-600 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="pr-4 text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-indigo-500' : ''
                    }`}
                  />
                </button>
                
                {/* Expandable Panel */}
                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-60 border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-slate-600 leading-relaxed text-sm sm:text-base font-light bg-slate-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
