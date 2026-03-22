'use client';

import { useState } from 'react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="inquiryName" className="block text-sm font-medium text-text-primary mb-1">
          Име
        </label>
        <input
          type="text"
          id="inquiryName"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="inquiryEmail" className="block text-sm font-medium text-text-primary mb-1">
          Имейл
        </label>
        <input
          type="email"
          id="inquiryEmail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-text-primary mb-1">
          Вид запитване
        </label>
        <select
          id="inquiryType"
          value={formData.inquiryType}
          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors bg-white"
          required
        >
          <option value="">-- Избери --</option>
          <option value="admissions">Прием и кандидатстване</option>
          <option value="programs">Специалности и програми</option>
          <option value="courses">Курсове</option>
          <option value="international">Международна дейност</option>
          <option value="other">Друго</option>
        </select>
      </div>
      <div>
        <label htmlFor="inquiryMessage" className="block text-sm font-medium text-text-primary mb-1">
          Съобщение
        </label>
        <textarea
          id="inquiryMessage"
          rows={4}
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
        Изпрати запитване
      </button>
    </form>
  );
}
