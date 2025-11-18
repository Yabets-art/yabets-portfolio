import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company?: string;
  role?: string;
  budget?: string;
  message: string;
}

const HireModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', company: '', role: '', budget: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const openHandler = () => setIsOpen(true);
    window.addEventListener('openHireModal', openHandler as EventListener);
    return () => window.removeEventListener('openHireModal', openHandler as EventListener);
  }, []);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Valid email required';
    if (!formData.message.trim() || formData.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if ((errors as any)[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const apiUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/hiring-requests`;
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || `Failed to send (status ${res.status})`);
      }
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', role: '', budget: '', message: '' });
    } catch (err) {
      console.error(err);
      alert(err?.message || 'Failed to send hiring request. You can also email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/60" onClick={() => setIsOpen(false)} />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-white dark:bg-gray-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Hiring Request</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tell me about the role or project — I'll review and respond.</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <X />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Request Sent</h4>
              <p className="text-gray-600 dark:text-gray-400">Thank you — I'll review your request and get back to you soon.</p>
              <div className="mt-6">
                <button onClick={() => setIsOpen(false)} className="px-6 py-3 bg-blue-600 text-white rounded-full">Close</button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-200'} bg-white dark:bg-gray-700`} />
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-200'} bg-white dark:bg-gray-700`} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input name="company" value={formData.company} onChange={handleChange} placeholder="Company (optional)" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white dark:bg-gray-700" />
                <input name="role" value={formData.role} onChange={handleChange} placeholder="Role / Position (optional)" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white dark:bg-gray-700" />
                <input name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget (optional)" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white dark:bg-gray-700" />
              </div>

              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Describe the project, goals and timeline" className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-200'} bg-white dark:bg-gray-700`} />

              <div className="flex items-center justify-between">
                <button type="submit" disabled={isSubmitting} className={`inline-flex items-center px-6 py-3 rounded-full text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}>
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send className="mr-2" /> Send Request
                    </>
                  )}
                </button>
                <button type="button" onClick={() => { window.location.href = `mailto:${(window as any).personalEmail || ''}`; }} className="text-sm text-gray-500 underline">Or email directly</button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HireModal;
