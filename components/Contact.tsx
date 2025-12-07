
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { refineDraft } from '../services/geminiService';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isRefining, setIsRefining] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleRefine = async () => {
    if (!formData.message.trim()) return;
    
    setIsRefining(true);
    try {
        const refined = await refineDraft(formData.message);
        setFormData(prev => ({ ...prev, message: refined.trim() }));
    } catch (e) {
        // Fallback to original
    } finally {
        setIsRefining(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
        const response = await fetch("https://formspree.io/f/mnnbqgbv", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setSent(true);
        } else {
            alert("There was a problem sending your message. Please try again.");
        }
    } catch (error) {
        alert("There was a problem sending your message. Please check your internet connection.");
    } finally {
        setIsSending(false);
    }
  };

  if (sent) {
      return (
        <div className="min-h-screen bg-[#F5F2EB] flex flex-col items-center justify-center animate-fade-in-up px-6">
            <div className="text-center max-w-lg">
                <div className="w-16 h-16 bg-[#2C2A26] text-[#F5F2EB] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <h2 className="text-3xl font-serif text-[#2C2A26] mb-4">Message Sent</h2>
                <p className="text-[#5D5A53] mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                    onClick={onBack}
                    className="text-xs font-bold uppercase tracking-widest border-b border-[#2C2A26] pb-1 hover:opacity-60"
                >
                    Return Home
                </button>
            </div>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-[#F5F2EB] pt-32 pb-24 px-6 md:px-12 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left: Contact Info */}
            <div>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">Contact</span>
                <h1 className="text-4xl md:text-5xl font-serif text-[#2C2A26] mb-8 leading-tight">
                    Let's start a <br/> conversation.
                </h1>
                <p className="text-[#5D5A53] font-light leading-relaxed mb-12">
                    I'm currently available for freelance work and full-time engineering roles. 
                    Whether you have a project in mind or just want to say hello, I'd love to hear from you.
                </p>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-bold text-[#2C2A26] uppercase tracking-widest mb-1">Phone</h4>
                        <p className="text-[#5D5A53]">+91-7218276369</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-[#2C2A26] uppercase tracking-widest mb-1">Socials</h4>
                        <div className="flex gap-4 mt-2">
                             <a href="https://linkedin.com/in/krishnapatil03" target="_blank" className="text-[#A8A29E] hover:text-[#2C2A26] transition-colors">LinkedIn</a>
                             <a href="https://github.com/krishnapydev" target="_blank" className="text-[#A8A29E] hover:text-[#2C2A26] transition-colors">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white/50 border border-[#D6D1C7] p-8 md:p-10 shadow-sm h-fit">
                <form onSubmit={handleSend} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-2">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-end mb-2">
                            <label className="block text-xs font-bold uppercase tracking-widest text-[#2C2A26]">Message</label>
                            <button 
                                type="button" 
                                onClick={handleRefine}
                                disabled={isRefining || !formData.message}
                                className="text-[10px] uppercase tracking-widest font-bold text-[#A8A29E] hover:text-[#2C2A26] flex items-center gap-1 disabled:opacity-50"
                            >
                                {isRefining ? (
                                    <>Refining...</>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                            <path d="M15.98 1.804a1 1 0 00-1.215-.04l-7.27 5.812-1.25-2.078a1 1 0 10-1.716 1.029l1.643 2.738L2.49 10.985a1 1 0 00.329 1.543l9.663 5.378a1 1 0 001.325-.264l4.56-6.195a1 1 0 00-.387-1.443l-2.001-1.2ZM14 3.754l3.18 1.908-1.758 2.388-3.32-1.992 1.9-2.304Z" />
                                        </svg>
                                        Refine with AI
                                    </>
                                )}
                            </button>
                        </div>
                        <textarea 
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full bg-transparent border border-[#D6D1C7] p-4 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors resize-none"
                            placeholder="How can I help you?"
                        />
                        <p className="text-[10px] text-[#A8A29E] mt-2 text-right">
                            *Click 'Refine with AI' to polish your message.
                        </p>
                    </div>

                    <button 
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-[#2C2A26] text-[#F5F2EB] py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#444] transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                    >
                        {isSending ? (
                            <>Sending...</>
                        ) : (
                            <>Send Message</>
                        )}
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
