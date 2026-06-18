"use client";

import { type FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-slate-900">
            Ad
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            placeholder="Adınız"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-slate-900">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            placeholder="ornek@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-semibold text-slate-900">
            Mesaj
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="mt-2 w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            placeholder="Mesajınızı yazın"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          Mesaj Gönder
        </button>
        {sent ? (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800" role="status">
            Mesajınız alındı. Bu form şu an frontend-only çalışıyor.
          </p>
        ) : null}
      </div>
    </form>
  );
}
