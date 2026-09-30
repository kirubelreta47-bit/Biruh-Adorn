import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Check, Copy, MessageCircle, Send, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { GoldSwallowDecor } from './BrandLogo';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Send formatted message via WhatsApp
    const text = `Hello Biruh Adorn!
Name: ${name}
Contact: ${contactInfo || 'Not specified'}
Message: ${message || 'Inquiring about your handcrafted jewelry.'}`;

    const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setName('');
      setContactInfo('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  const contactIcons = [
    {
      id: 'location',
      label: 'Location',
      detail: 'Addis Ababa & Bahir Dar, Ethiopia',
      icon: MapPin,
      href: 'https://maps.google.com/?q=Ethiopia',
      isExternal: true,
      copyText: null,
    },
    {
      id: 'phone',
      label: 'Phone',
      detail: BRAND_CONFIG.phone,
      icon: Phone,
      href: `tel:${BRAND_CONFIG.phone.replace(/\s+/g, '')}`,
      isExternal: false,
      copyText: BRAND_CONFIG.phone,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      detail: 'Direct WhatsApp Chat',
      icon: MessageCircle,
      href: `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Biruh Adorn, I would like to inquire about your handcrafted jewelry.')}`,
      isExternal: true,
      copyText: null,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      detail: `@${BRAND_CONFIG.instagramHandle}`,
      icon: Instagram,
      href: BRAND_CONFIG.instagramUrl,
      isExternal: true,
      copyText: null,
    },
    {
      id: 'email',
      label: 'Email',
      detail: BRAND_CONFIG.email,
      icon: Mail,
      href: `mailto:${BRAND_CONFIG.email}`,
      isExternal: false,
      copyText: BRAND_CONFIG.email,
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#EBE7DF]">
      <div className="max-w-5xl mx-auto">
        {/* Luxury Container Card */}
        <div className="bg-[#FFFFFF] border border-[#E2DDD3] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs relative overflow-hidden">
          {/* Subtle Corner Gold Swallow Ornament */}
          <div className="absolute top-4 right-4 w-10 h-10 opacity-20 pointer-events-none">
            <GoldSwallowDecor className="w-full h-full" flipped={true} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Side: "Get in touch with us" + detail + clean icons */}
            <div className="md:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
                  Studio Direct
                </span>
                
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B121E] font-normal tracking-tight mb-2.5">
                  Get in touch with us
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#6C7688] font-light leading-relaxed mb-6">
                  Located in Addis Ababa &amp; Bahir Dar, Ethiopia. Reach out directly for custom commissions, ring sizing, or jewelry orders.
                </p>
              </div>

              {/* Neatly Arranged Icons */}
              <div className="space-y-2.5 pt-2">
                {contactIcons.map((item) => {
                  const IconComponent = item.icon;
                  const isCopied = copiedKey === item.id;

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 p-2.5 rounded-lg border border-[#ECE7DE] hover:border-[#0B121E] bg-[#FAF8F5]/80 hover:bg-[#0B121E] text-[#0B121E] hover:text-[#FAF8F5] transition-all duration-300 group cursor-pointer"
                    >
                      {/* Icon */}
                      <div className="w-8 h-8 rounded-full bg-[#FFFFFF] group-hover:bg-[#1A253A] border border-[#E0DBD0] group-hover:border-[#C5A880]/50 flex items-center justify-center text-[#0B121E] group-hover:text-[#C5A880] shrink-0 transition-colors">
                        <IconComponent className="w-4 h-4" strokeWidth={1.5} />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] uppercase tracking-wider text-[#8E98A8] group-hover:text-[#C5A880] block leading-none mb-1">
                          {item.label}
                        </span>
                        <span className="text-xs font-medium tracking-tight truncate block">
                          {item.detail}
                        </span>
                      </div>

                      {/* Copy Button if available */}
                      {item.copyText && (
                        <button
                          type="button"
                          onClick={(e) => handleCopy(item.copyText!, item.id, e)}
                          className="p-1 text-[#8E98A8] group-hover:text-[#FAF8F5]/80 hover:text-[#C5A880] transition-colors cursor-pointer shrink-0"
                          title={`Copy ${item.label}`}
                          aria-label={`Copy ${item.label}`}
                        >
                          {isCopied ? (
                            <span className="text-[9px] text-[#25D366] font-sans font-medium flex items-center gap-0.5">
                              <Check className="w-3 h-3" />
                              <span>Copied</span>
                            </span>
                          ) : (
                            <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                          )}
                        </button>
                      )}

                      {/* External Arrow */}
                      {item.isExternal && !item.copyText && (
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#8E98A8] group-hover:text-[#C5A880] transition-colors shrink-0" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side: "Send a message" Form */}
            <div className="md:col-span-7 bg-[#FAF8F5] p-5 sm:p-7 lg:p-8 rounded-xl border border-[#E2DDD3]">
              <div className="mb-5">
                <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
                  Inquiry Form
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#0B121E] font-normal tracking-tight">
                  Send a message
                </h3>
                <p className="font-sans text-xs text-[#6C7688] font-light mt-0.5">
                  Leave your name and details, and our studio will connect with you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-sans font-medium uppercase tracking-[0.16em] text-[#5C6474] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Selamawit T."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E0DBD0] rounded-lg text-xs text-[#0B121E] placeholder-[#9E9789] focus:outline-hidden focus:border-[#0B121E] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-medium uppercase tracking-[0.16em] text-[#5C6474] mb-1.5">
                    Phone or Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="e.g. +251 91 234 5678 or name@email.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E0DBD0] rounded-lg text-xs text-[#0B121E] placeholder-[#9E9789] focus:outline-hidden focus:border-[#0B121E] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-medium uppercase tracking-[0.16em] text-[#5C6474] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your desired piece, ring size, or custom inquiry..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E0DBD0] rounded-lg text-xs text-[#0B121E] placeholder-[#9E9789] focus:outline-hidden focus:border-[#0B121E] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0B121E] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] rounded-lg hover:bg-[#C5A880] hover:text-[#0B121E] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>

                {submitted && (
                  <div className="p-2.5 bg-[#EAF7ED] border border-[#BCE6C4] rounded-lg text-xs text-[#1E7E34] flex items-center gap-2 animate-fadeIn">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>Inquiry prepared and dispatched. We will connect with you shortly!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
