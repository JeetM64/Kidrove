import React, { useState, FormEvent } from 'react';
import { Send, AlertCircle, CheckCircle2, Loader2, Phone, Mail, User } from 'lucide-react';

interface FormFields {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormFields>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [apiMessage, setApiMessage] = useState<string>('');

  // Real-time validation rules
  const validateField = (name: keyof FormFields, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters long.';
        return '';
      case 'email':
        if (!value.trim()) return 'Email address is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required.';
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value.trim())) return 'Phone number must be exactly 10 digits.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate on type/change
    const errorMsg = validateField(name as keyof FormFields, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name as keyof FormFields, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Perform validation on all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormFields;
      const errorMsg = validateField(fieldName, formData[fieldName]);
      if (errorMsg) {
        newErrors[fieldName] = errorMsg;
      }
    });

    setErrors(newErrors);

    // If there are validation errors, block submission
    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }

    setStatus('loading');
    setApiMessage('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus('error');
        setApiMessage(result.message || 'Something went wrong. Please check your submission.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setApiMessage('Network error: Unable to connect to the server. Please ensure the backend is running.');
    }
  };

  return (
    <section id="registration-section" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-6">
      {/* Visual background rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-800 rounded-full pointer-events-none opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-800 rounded-full pointer-events-none opacity-10"></div>
      
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Success State Visual Overlay */}
        {status === 'success' ? (
          <div className="bg-slate-800 border border-slate-700/60 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-float">
            <div className="inline-flex p-4 bg-teal-500/10 rounded-full text-teal-400">
              <CheckCircle2 className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
              Enquiry Submitted!
            </h3>
            <p className="text-slate-300 leading-relaxed font-light">
              We have successfully registered your interest. Our academic advisor will contact you within the next 24 hours to guide you through the syllabus details, batch timings, and software onboarding.
            </p>
            <div className="pt-4 border-t border-slate-700/60 text-sm text-slate-400">
              A copy of the confirmation has been dispatched to your email.
            </div>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/60 rounded-3xl p-8 shadow-2xl space-y-8">
            
            {/* Header text */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Secure Your Spot Today
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Fill out the quick enrollment form and take the first step towards your child's futuristic learning.
              </p>
            </div>

            {/* API Error Box */}
            {status === 'error' && (
              <div className="flex gap-3 bg-rose-500/15 border border-rose-500/20 text-rose-300 p-4 rounded-xl text-sm items-start">
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                <span>{apiMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="reg-name" className="block text-sm font-semibold text-slate-300">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                    <User className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    id="reg-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'loading'}
                    placeholder="Enter student or parent name"
                    className={`w-full bg-slate-900 border ${
                      errors.name ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-700 focus:ring-indigo-500/20'
                    } rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-4 transition-all duration-200 disabled:opacity-50`}
                  />
                </div>
                {errors.name && (
                  <p id="reg-name-error" className="text-xs text-rose-400 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="reg-email" className="block text-sm font-semibold text-slate-300">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                    <Mail className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    id="reg-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'loading'}
                    placeholder="example@gmail.com"
                    className={`w-full bg-slate-900 border ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-700 focus:ring-indigo-500/20'
                    } rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-4 transition-all duration-200 disabled:opacity-50`}
                  />
                </div>
                {errors.email && (
                  <p id="reg-email-error" className="text-xs text-rose-400 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label htmlFor="reg-phone" className="block text-sm font-semibold text-slate-300">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                    <Phone className="w-5 h-5" />
                  </span>
                  <input
                    type="tel"
                    id="reg-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'loading'}
                    placeholder="10-digit mobile number"
                    className={`w-full bg-slate-900 border ${
                      errors.phone ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-700 focus:ring-indigo-500/20'
                    } rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-4 transition-all duration-200 disabled:opacity-50`}
                  />
                </div>
                {errors.phone && (
                  <p id="reg-phone-error" className="text-xs text-rose-400 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="reg-submit-btn"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-slate-700 disabled:to-slate-800 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-950/45 hover:shadow-indigo-500/20 hover:-translate-y-0.5 disabled:translate-y-0 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Enquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Enquiry
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
