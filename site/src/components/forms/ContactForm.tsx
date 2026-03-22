'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
          Име и фамилия
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
          Имейл адрес
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1">
          Тема
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">
          Съобщение
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors resize-vertical"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-teal text-white px-8 py-3 rounded-full font-bold hover:bg-teal-dark transition-colors"
      >
        Изпрати
      </button>
    </form>
  );
}
