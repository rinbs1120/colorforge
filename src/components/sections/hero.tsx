'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen, FileText, Check } from 'lucide-react';

const BOOK_STEPS = 3;
const STEP_DURATIONS = [3500, 3500, 4000];

/* Dark theme colors */
const dark = {
  bg: '#1A1A2E',
  surface: '#242438',
  surfaceLight: '#2E2E48',
  border: '#3A3A54',
  text: '#E8E4F0',
  textMuted: '#9894A8',
  accent: '#FFB800',
  accentSecondary: '#FFD666',
};

export function Hero() {
  const [stepIdx, setStepIdx] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setTimeout(() => {
      setStepIdx(prev => (prev + 1) % BOOK_STEPS);
    }, STEP_DURATIONS[stepIdx]);
    return () => clearTimeout(timer);
  }, [stepIdx]);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.12] pointer-events-none" style={{ background: 'radial-gradient(circle, #FFB800 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 md:px-6 max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: '#FFB80010', border: '1.5px solid #FFB80025' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB800' }} />
              <span className="text-sm font-semibold tracking-wide" style={{ color: '#FFB800' }}>AI-Powered Coloring Book Engine</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[52px] leading-[1.08] mb-7" style={{ letterSpacing: '-1px' }}>
              <span style={{ color: '#FFB800' }}>Create Coloring Books</span>
              <br />
              That Sell
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              AI-powered coloring page generator for KDP &amp; Etsy sellers. Batch create, auto-layout, export print-ready PDF — commercial license included.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="/generate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-lg rounded-full transition-all hover:-translate-y-1 hover:shadow-xl text-[#1A1A2E]"
                style={{
                  background: '#FFB800',
                  boxShadow: '0 4px 24px rgba(255,184,0,0.35)',
                }}
              >
                <Sparkles className="w-5 h-5" />Start Creating — 5 Free Pages
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold text-base rounded-full transition-all hover:-translate-y-0.5 text-foreground"
                style={{ border: '1.5px solid #E5E7EB' }}
              >
                See How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Minimal trust line */}
            <p className="text-sm text-muted-foreground">
              No credit card · 5 free pages · Commercial license · 300 DPI Print-Ready
            </p>
          </div>

          {/* Right: Book Creation Demo — 3 steps */}
          <div className="hidden lg:flex lg:justify-center lg:items-center">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: '540px',
                background: dark.bg,
                boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15)',
                animation: 'heroTransformSlideIn 0.8s ease-out both',
              }}
            >
              {/* Window top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: dark.surface, borderColor: dark.border }}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                </div>
                <span className="font-display text-xs ml-3" style={{ color: dark.textMuted }}>PixCraftX</span>
                <div className="ml-auto flex gap-2">
                  {[0,1,2].map(i => (
                    <div key={i} className="rounded-full transition-all duration-500" style={{
                      width: stepIdx===i ? '24px' : '8px',
                      height: '8px',
                      background: stepIdx>=i
                        ? (i===0 ? '#FFB800' : i===1 ? '#FFD666' : '#2ECC71')
                        : dark.surfaceLight,
                    }} />
                  ))}
                </div>
              </div>

              {/* Content area */}
              <div className="relative" style={{ minHeight: '420px' }}>

                {/* STEP 0: Pick Theme → AI generates pages */}
                <div className="absolute inset-0 flex flex-col transition-all duration-700" style={{ opacity: stepIdx===0?1:0, transform: stepIdx===0?'translateX(0)':'translateX(-40px)', pointerEvents: stepIdx===0?'auto':'none' }}>
                  <div className="px-5 pt-5 pb-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: dark.textMuted }}>Step 1 — Describe your theme</p>
                    <div className="rounded-xl px-4 py-3 text-sm" style={{ background: dark.surfaceLight, border: `1px solid ${dark.border}` }}>
                      <span style={{ color: dark.accent }} className="mr-2">✨</span>
                      <span style={{ color: dark.text }}>Enchanted fairy garden with mushrooms and flowers...</span>
                      <span className="inline-block w-[2px] h-4 ml-0.5 align-middle" style={{ background: dark.accent, animation: 'heroBlink 0.8s step-end infinite' }} />
                    </div>
                    <button className="mt-3 px-4 py-2 rounded-lg text-xs font-bold text-[#1A1A2E]" style={{ background: '#FFB800' }}>
                      <Sparkles className="w-3 h-3 inline mr-1" />Generate 30 Pages
                    </button>
                  </div>
                  {/* Thumbnail grid of generated pages */}
                  <div className="flex-1 px-5 pb-5">
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: dark.textMuted }}>AI Generated Line Art Pages</p>
                    <div className="grid grid-cols-5 gap-2">
                      {Array.from({length: 10}).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-lg aspect-[3/4] flex items-center justify-center"
                          style={{
                            background: dark.surfaceLight,
                            border: `1px solid ${dark.border}`,
                            animation: `heroFadeIn 0.4s ease-out ${0.3 + i * 0.1}s both`,
                          }}
                        >
                          <svg width="24" height="32" viewBox="0 0 24 32" fill="none" style={{ opacity: 0.5 }}>
                            <rect x="2" y="2" width="20" height="28" rx="3" stroke={dark.textMuted} strokeWidth="1.5" />
                            <path d="M7 12 Q12 6 17 12 Q12 18 7 12Z" stroke={dark.accent} strokeWidth="1" fill="none" />
                            <circle cx="12" cy="22" r="3" stroke={dark.accent} strokeWidth="1" fill="none" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] mt-2 text-center" style={{ color: dark.accent }}>+20 more pages generating...</p>
                  </div>
                </div>

                {/* STEP 1: Auto-Layout Preview */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700" style={{ opacity: stepIdx===1?1:0, transform: stepIdx===1?'translateX(0)':stepIdx<1?'translateX(40px)':'translateX(-40px)', pointerEvents: stepIdx===1?'auto':'none' }}>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-4" style={{ color: dark.textMuted }}>Step 2 — Auto-Layout &amp; Assemble</p>
                  {/* Book spread mockup */}
                  <div className="flex gap-1 mb-4" style={{ perspective: '800px' }}>
                    {/* Left page (blank) */}
                    <div
                      className="rounded-lg flex flex-col items-center justify-center"
                      style={{
                        width: '180px',
                        height: '240px',
                        background: '#FAFAF8',
                        border: '1px solid #E5E7EB',
                        transform: 'rotateY(5deg)',
                        boxShadow: '4px 4px 16px rgba(0,0,0,0.1)',
                      }}
                    >
                      <span className="text-xs text-gray-300 font-medium">Blank Back Page</span>
                      <span className="text-[10px] text-gray-300 mt-1">KDP Standard</span>
                    </div>
                    {/* Right page (line art) */}
                    <div
                      className="rounded-lg flex flex-col items-center justify-center"
                      style={{
                        width: '180px',
                        height: '240px',
                        background: '#FAFAF8',
                        border: '1px solid #E5E7EB',
                        transform: 'rotateY(-5deg)',
                        boxShadow: '-4px 4px 16px rgba(0,0,0,0.1)',
                      }}
                    >
                      <svg width="100" height="130" viewBox="0 0 100 130" fill="none">
                        <path d="M20 40 Q50 10 80 40 Q50 70 20 40Z" stroke="#1A1A2E" strokeWidth="1.5" fill="none" />
                        <path d="M30 80 Q50 60 70 80 Q50 100 30 80Z" stroke="#1A1A2E" strokeWidth="1.5" fill="none" />
                        <circle cx="50" cy="110" r="8" stroke="#1A1A2E" strokeWidth="1.5" fill="none" />
                        <path d="M10 20 L15 15 M90 20 L85 15 M50 5 L50 10" stroke="#1A1A2E" strokeWidth="1" fill="none" />
                      </svg>
                      <span className="text-[10px] text-gray-400 mt-1">Page 12 — Fairy Garden</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold" style={{ background: `${dark.accent}18`, border: `1px solid ${dark.accent}30`, color: dark.accent }}>
                      <BookOpen className="w-3 h-3" />30 pages assembled
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold" style={{ background: `${dark.accent}18`, border: `1px solid ${dark.accent}30`, color: dark.accent }}>
                      8.5×11″ trim size
                    </span>
                  </div>
                </div>

                {/* STEP 2: Export PDF & Sell */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700" style={{ opacity: stepIdx===2?1:0, transform: stepIdx===2?'translateX(0)':stepIdx<2?'translateX(40px)':'translateX(-40px)', pointerEvents: stepIdx===2?'auto':'none' }}>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-4" style={{ color: dark.textMuted }}>Step 3 — Export &amp; Upload to KDP</p>
                  {/* PDF file icon */}
                  <div className="relative mb-4">
                    <div
                      className="rounded-xl flex flex-col items-center justify-center"
                      style={{
                        width: '160px',
                        height: '200px',
                        background: '#FAFAF8',
                        border: '2px solid #E5E7EB',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                      }}
                    >
                      <FileText className="w-12 h-12 text-[#FF4444] mb-2" />
                      <span className="text-xs font-bold text-foreground">Coloring-Book.pdf</span>
                      <span className="text-[10px] text-gray-400 mt-1">300 DPI · 30 pages</span>
                      <span className="text-[10px] text-gray-400">8.5×11″ · Bleed included</span>
                    </div>
                    {/* Download arrow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#FFB800' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1 L6 8 M3 6 L6 9 L9 6" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Platform badges */}
                  <div className="flex gap-3 mt-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold" style={{ background: '#2ECC7118', border: '1px solid #2ECC7130', color: '#2ECC71' }}>
                      <Check className="w-3 h-3" />KDP Ready
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold" style={{ background: '#2ECC7118', border: '1px solid #2ECC7130', color: '#2ECC71' }}>
                      <Check className="w-3 h-3" />Etsy Ready
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold" style={{ background: '#2ECC7118', border: '1px solid #2ECC7130', color: '#2ECC71' }}>
                      <Check className="w-3 h-3" />Commercial ✓
                    </span>
                  </div>
                </div>

              </div>

              {/* Bottom label */}
              <div className="px-5 py-3 flex items-center justify-center border-t" style={{ background: dark.surface, borderColor: dark.border }}>
                <span className="font-display text-xs px-4 py-1.5 rounded-full" style={{ color: dark.accent, background: `${dark.accent}18`, border: `1px solid ${dark.accent}30` }}>
                  Coloring Book Workflow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
