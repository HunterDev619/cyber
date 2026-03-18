'use client';

import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface Props {
  /** Full Tailwind classes for the submit button (bg, text, hover) */
  accentClass?: string;
  /** Field styling variant for light/white sections */
  variant?: 'light' | 'dark';
}

export default function ContactForm({
  accentClass = 'bg-purple-700 hover:bg-purple-600 text-white',
  variant = 'dark',
}: Props) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Invalid email address';
    if (!form.message.trim()) next.message = 'Message is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', company: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  function field(
    id: keyof FormState,
    label: string,
    type = 'text',
    required = false,
  ) {
    const isLight = variant === 'light';
    return (
      <div>
        <label
          htmlFor={id}
          className={`block text-sm font-medium mb-1 ${
            isLight ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          {label}
          {required && <span className="text-purple-400 ml-0.5">*</span>}
        </label>
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={(e) => setForm((prev) => ({ ...prev, [id]: e.target.value }))}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 ${
            isLight
              ? 'border-gray-200 bg-white text-gray-900 focus:border-purple-500 focus:ring-purple-500'
              : 'border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500'
          }`}
        />
        {errors[id] && <p className="mt-1 text-xs text-red-400">{errors[id]}</p>}
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-700/40 bg-green-900/20 p-8 text-center">
        <p className="text-2xl font-bold text-green-400 mb-2">Message Sent!</p>
        <p className="text-gray-300 text-sm">We'll be in touch within one business day.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-purple-400 underline underline-offset-2 hover:text-purple-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {field('name', 'Name', 'text', true)}
        {field('email', 'Email', 'email', true)}
        {field('company', 'Company')}
        {field('phone', 'Phone (optional)', 'tel')}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message<span className="text-purple-400 ml-0.5">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 resize-none ${
            variant === 'light'
              ? 'border-gray-200 bg-white text-gray-900 focus:border-purple-500 focus:ring-purple-500'
              : 'border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500'
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`self-start rounded-lg px-6 py-3 text-sm font-semibold transition-colors disabled:opacity-60 ${accentClass}`}
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
