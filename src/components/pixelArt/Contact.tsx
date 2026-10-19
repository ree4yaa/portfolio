import { useState } from 'react';
import { PixelButton } from '@/components/pixelArt/PixelButton';
import { useReveal } from '@/components/pixelArt/useReveal';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

export function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-20 px-4 overflow-hidden bg-retro-bg2 pixel-noise"
    >
      <div className="absolute inset-0 pixel-grid opacity-20" />

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <div className="inline-block bg-retro-bg2 border-4 border-retro-dark px-6 py-3 mb-4" style={{ boxShadow: '0 0 0 4px #ff2e88, 0 0 20px rgba(255,46,136,0.2)' }}>
          <span className="font-pixel text-[10px] sm:text-[14px] text-retro-pink text-pixel-shadow">
            FINAL LEVEL
          </span>
        </div>
        <h2 className="font-pixel text-[16px] sm:text-[24px] md:text-[32px] text-retro-white text-pixel-shadow mb-3">
          CONTACT
        </h2>
        <p className="font-pixel text-[10px] sm:text-[14px] text-retro-yellow animate-pulse-glow mb-2">
          READY FOR THE NEXT QUEST?
        </p>
        <p className="font-mono text-lg text-retro-gray">~ Initiate Communication ~</p>
      </div>

      <div ref={ref} className={`relative z-10 max-w-3xl mx-auto ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        {/* Quick links */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          <ContactLink
            href="mailto:reeya@example.com"
            icon={<Mail size={20} />}
            label="EMAIL"
            color="pink"
          />
          <ContactLink
            href="https://www.linkedin.com/in/reeya-pandey-02378a384"
            target="_blank"
            icon={<Linkedin size={20} />}
            label="LINKEDIN"
            color="cyan"
          />
          <ContactLink
            href="https://github.com/ree4yaa"
            target="_blank"
            icon={<Github size={20} />}
            label="GITHUB"
            color="green"
          />
        </div>

        {/* Dialogue box form */}
        <div
          className="relative bg-retro-panel border-4 border-retro-dark"
          style={{ boxShadow: '0 0 0 4px #9d4edd, 0 0 30px rgba(157,78,221,0.2)' }}
        >
          {/* Dialogue header */}
          <div className="flex items-center justify-between border-b-4 border-retro-dark px-4 py-2 bg-retro-bg2/50">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[7px] text-retro-purple">▶ NPC: REEYA</span>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-retro-pink" />
              <div className="w-2 h-2 bg-retro-yellow" />
              <div className="w-2 h-2 bg-retro-green" />
            </div>
          </div>

          {/* Dialogue text */}
          <div className="px-4 py-3 border-b-2 border-retro-gray/20">
            <p className="font-mono text-base text-retro-cyan">
              "Hello, adventurer! Send me a message and let's start a new quest together."
              <span className="cursor-blink" />
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
            {/* Name */}
            <div>
              <label className="font-pixel text-[7px] text-retro-pink block mb-1">YOUR NAME:</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-retro-dark border-4 border-retro-dark px-3 py-2 font-mono text-base text-retro-green focus:outline-none focus:border-retro-pink"
                style={{ boxShadow: 'inset 2px 2px 0 rgba(0,0,0,0.5)' }}
                placeholder="Enter your name..."
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-pixel text-[7px] text-retro-cyan block mb-1">YOUR EMAIL:</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-retro-dark border-4 border-retro-dark px-3 py-2 font-mono text-base text-retro-cyan focus:outline-none focus:border-retro-cyan"
                style={{ boxShadow: 'inset 2px 2px 0 rgba(0,0,0,0.5)' }}
                placeholder="Enter your email..."
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-pixel text-[7px] text-retro-green block mb-1">MESSAGE:</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-retro-dark border-4 border-retro-dark px-3 py-2 font-mono text-base text-retro-green focus:outline-none focus:border-retro-green resize-none"
                style={{ boxShadow: 'inset 2px 2px 0 rgba(0,0,0,0.5)' }}
                placeholder="Type your message..."
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col items-center gap-3">
              {sent ? (
                <div className="w-full bg-retro-green/20 border-4 border-retro-green px-4 py-3 text-center">
                  <p className="font-pixel text-[8px] text-retro-green animate-pulse">
                    ✓ MESSAGE SENT! QUEST UPDATED.
                  </p>
                </div>
              ) : (
                <PixelButton type="submit" color="purple" size="md" glow className="w-full">
                  <Send size={14} /> SEND MESSAGE
                </PixelButton>
              )}
              <div className="flex items-center gap-1">
                <MapPin size={10} className="text-retro-gray" />
                <span className="font-mono text-sm text-retro-gray">India</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  color,
  target,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: 'pink' | 'cyan' | 'green';
  target?: string;
}) {
  const colorMap = {
    pink: '#ff2e88',
    cyan: '#00f0ff',
    green: '#39ff14',
  };
  const c = colorMap[color];

  return (
    <a
      href={href}
      target={target}
      rel={target ? 'noopener noreferrer' : undefined}
      className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-retro-panel border-4 border-retro-dark card-hover transition-all"
      style={{ boxShadow: `0 0 0 2px ${c}44` }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 0 4px ${c}, 0 0 16px ${c}66`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px ${c}44`)}
    >
      <span style={{ color: c }}>{icon}</span>
      <span className="font-pixel text-[7px] sm:text-[8px]" style={{ color: c }}>
        {label}
      </span>
    </a>
  );
}
