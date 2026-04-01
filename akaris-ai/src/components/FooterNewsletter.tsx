import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: 'New Newsletter Subscription — Akaris.ai',
          email,
          _template: 'table',
          from_name: 'Akaris.ai Newsletter',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      <h4 className="text-white font-semibold text-sm mb-1 tracking-wide">Stay in the Loop</h4>
      <p className="text-slate-500 text-xs mb-4 leading-relaxed">
        Get AI insights, course updates, and exclusive offers.
      </p>

      {status === 'success' ? (
        <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          You're subscribed!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              aria-label="Email address for newsletter"
              className="flex-1 min-w-0 bg-navy-900 border border-navy-700 focus:border-gold-500/60 text-white placeholder-slate-600 rounded-xl px-4 py-2.5 text-sm outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-navy-950 font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors shrink-0"
            >
              {status === 'sending' ? '…' : 'Subscribe'}
            </button>
          </div>
          {status === 'error' && (
            <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </div>
  );
}
