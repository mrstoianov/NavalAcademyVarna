'use client';

import { useState } from 'react';

export default function CourseEnrollment() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-text-primary mb-1">
          Три имена
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="enrollEmail" className="block text-sm font-medium text-text-primary mb-1">
          Имейл
        </label>
        <input
          type="email"
          id="enrollEmail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors"
        />
      </div>
      <div>
        <label htmlFor="course" className="block text-sm font-medium text-text-primary mb-1">
          Избери курс
        </label>
        <select
          id="course"
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-teal transition-colors bg-white"
          required
        >
          <option value="">-- Избери --</option>
          <option value="maritime">Морски курсове</option>
          <option value="it">ИТ курсове</option>
          <option value="language">Езикови курсове LangMar</option>
          <option value="radiation">Йонизиращи лъчения</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-coral text-white px-8 py-3 rounded-full font-bold hover:bg-coral-dark transition-colors"
      >
        Запиши се
      </button>
    </form>
  );
}
