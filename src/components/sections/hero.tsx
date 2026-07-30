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
                  <div className="flex-1 px-5 pb-4 overflow-hidden">
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: dark.textMuted }}>AI Generated Line Art Pages</p>
                    <div className="grid grid-cols-5 gap-2">
                      {/* 1: Mushroom */}
                      <div className="rounded-lg aspect-[3/4] flex items-center justify-center" style={{ background: '#FAFAF8', border: `1px solid ${dark.border}`, animation: `heroFadeIn 0.4s ease-out 0.3s both` }}>
                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none"><path d="M16 6C9 6 4 14 4 20h24c0-6-5-14-12-14z" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><rect x="14" y="20" width="4" height="14" rx="1" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><circle cx="10" cy="13" r="1.5" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/><circle cx="20" cy="11" r="1" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/><circle cx="15" cy="9" r="1.2" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/></svg>
                      </div>
                      {/* 2: Flower */}
                      <div className="rounded-lg aspect-[3/4] flex items-center justify-center" style={{ background: '#FAFAF8', border: `1px solid ${dark.border}`, animation: `heroFadeIn 0.4s ease-out 0.4s both` }}>
                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none"><circle cx="16" cy="14" r="4" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><circle cx="16" cy="8" r="3" stroke="#2D2D3A" strokeWidth="1" fill="none"/><circle cx="11" cy="12" r="3" stroke="#2D2D3A" strokeWidth="1" fill="none"/><circle cx="21" cy="12" r="3" stroke="#2D2D3A" strokeWidth="1" fill="none"/><circle cx="12" cy="18" r="3" stroke="#2D2D3A" strokeWidth="1" fill="none"/><circle cx="20" cy="18" r="3" stroke="#2D2D3A" strokeWidth="1" fill="none"/><line x1="16" y1="18" x2="16" y2="36" stroke="#2D2D3A" strokeWidth="1.2"/><path d="M16 26Q12 22 10 26" stroke="#2D2D3A" strokeWidth="1" fill="none"/><path d="M16 30Q20 26 22 30" stroke="#2D2D3A" strokeWidth="1" fill="none"/></svg>
                      </div>
                      {/* 3: Butterfly */}
                      <div className="rounded-lg aspect-[3/4] flex items-center justify-center" style={{ background: '#FAFAF8', border: `1px solid ${dark.border}`, animation: `heroFadeIn 0.4s ease-out 0.5s both` }}>
                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none"><path d="M16 12Q6 4 4 14Q6 22 16 18Z" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><path d="M16 12Q26 4 28 14Q26 22 16 18Z" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><path d="M16 20Q8 18 6 26Q10 32 16 26Z" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><path d="M16 20Q24 18 26 26Q22 32 16 26Z" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><line x1="16" y1="10" x2="16" y2="30" stroke="#2D2D3A" strokeWidth="1.2"/><circle cx="13" cy="10" r="1" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/><circle cx="19" cy="10" r="1" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/></svg>
                      </div>
                      {/* 4: Leaf */}
                      <div className="rounded-lg aspect-[3/4] flex items-center justify-center" style={{ background: '#FAFAF8', border: `1px solid ${dark.border}`, animation: `heroFadeIn 0.4s ease-out 0.6s both` }}>
                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none"><path d="M16 4Q28 16 16 38Q4 16 16 4Z" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><line x1="16" y1="4" x2="16" y2="38" stroke="#2D2D3A" strokeWidth="1"/><path d="M16 12Q22 16 16 22" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/><path d="M16 18Q10 22 16 28" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/><path d="M16 8Q20 12 16 16" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/></svg>
                      </div>
                      {/* 5: Star mandala */}
                      <div className="rounded-lg aspect-[3/4] flex items-center justify-center" style={{ background: '#FAFAF8', border: `1px solid ${dark.border}`, animation: `heroFadeIn 0.4s ease-out 0.7s both` }}>
                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none"><circle cx="16" cy="18" r="10" stroke="#2D2D3A" strokeWidth="1" fill="none"/><circle cx="16" cy="18" r="6" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/><circle cx="16" cy="18" r="2" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/><line x1="26" y1="18" x2="22" y2="18" stroke="#2D2D3A" strokeWidth="0.8"/><line x1="6" y1="18" x2="10" y2="18" stroke="#2D2D3A" strokeWidth="0.8"/><line x1="16" y1="8" x2="16" y2="12" stroke="#2D2D3A" strokeWidth="0.8"/><line x1="16" y1="28" x2="16" y2="24" stroke="#2D2D3A" strokeWidth="0.8"/><line x1="23.07" y1="10.93" x2="20.24" y2="13.76" stroke="#2D2D3A" strokeWidth="0.8"/><line x1="8.93" y1="25.07" x2="11.76" y2="22.24" stroke="#2D2D3A" strokeWidth="0.8"/><line x1="23.07" y1="25.07" x2="20.24" y2="22.24" stroke="#2D2D3A" strokeWidth="0.8"/><line x1="8.93" y1="10.93" x2="11.76" y2="13.76" stroke="#2D2D3A" strokeWidth="0.8"/></svg>
                      </div>
                      {/* 6: Rabbit */}
                      <div className="rounded-lg aspect-[3/4] flex items-center justify-center" style={{ background: '#FAFAF8', border: `1px solid ${dark.border}`, animation: `heroFadeIn 0.4s ease-out 0.8s both` }}>
                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none"><ellipse cx="16" cy="26" rx="8" ry="10" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><ellipse cx="12" cy="10" rx="3" ry="8" stroke="#2D2D3A" strokeWidth="1" fill="none"/><ellipse cx="20" cy="10" rx="3" ry="8" stroke="#2D2D3A" strokeWidth="1" fill="none"/><circle cx="16" cy="22" r="6" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><circle cx="14" cy="21" r="0.8" fill="#2D2D3A"/><circle cx="18" cy="21" r="0.8" fill="#2D2D3A"/><path d="M15 24Q16 25.5 17 24" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/></svg>
                      </div>
                      {/* 7: Tree */}
                      <div className="rounded-lg aspect-[3/4] flex items-center justify-center" style={{ background: '#FAFAF8', border: `1px solid ${dark.border}`, animation: `heroFadeIn 0.4s ease-out 0.9s both` }}>
                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none"><path d="M16 4L6 22h20L16 4z" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><path d="M16 12L8 26h16L16 12z" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><rect x="14" y="26" width="4" height="10" rx="1" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><line x1="16" y1="26" x2="16" y2="36" stroke="#2D2D3A" strokeWidth="0.8"/></svg>
                      </div>
                      {/* 8: Dragonfly */}
                      <div className="rounded-lg aspect-[3/4] flex items-center justify-center" style={{ background: '#FAFAF8', border: `1px solid ${dark.border}`, animation: `heroFadeIn 0.4s ease-out 1.0s both` }}>
                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none"><ellipse cx="16" cy="20" rx="3" ry="10" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><ellipse cx="10" cy="18" rx="6" ry="3" stroke="#2D2D3A" strokeWidth="1" fill="none"/><ellipse cx="22" cy="18" rx="6" ry="3" stroke="#2D2D3A" strokeWidth="1" fill="none"/><ellipse cx="10" cy="22" rx="5" ry="2.5" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/><ellipse cx="22" cy="22" rx="5" ry="2.5" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/><circle cx="16" cy="12" r="2.5" stroke="#2D2D3A" strokeWidth="1" fill="none"/></svg>
                      </div>
                      {/* 9: Castle */}
                      <div className="rounded-lg aspect-[3/4] flex items-center justify-center" style={{ background: '#FAFAF8', border: `1px solid ${dark.border}`, animation: `heroFadeIn 0.4s ease-out 1.1s both` }}>
                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none"><rect x="6" y="18" width="20" height="18" rx="1" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><rect x="8" y="12" width="4" height="6" stroke="#2D2D3A" strokeWidth="1" fill="none"/><rect x="20" y="12" width="4" height="6" stroke="#2D2D3A" strokeWidth="1" fill="none"/><rect x="14" y="10" width="4" height="8" stroke="#2D2D3A" strokeWidth="1" fill="none"/><path d="M10 12L10 8M12 12L12 9" stroke="#2D2D3A" strokeWidth="0.8"/><path d="M22 12L22 8M20 12L20 9" stroke="#2D2D3A" strokeWidth="0.8"/><path d="M16 10L16 6" stroke="#2D2D3A" strokeWidth="0.8"/><rect x="13" y="28" width="6" height="8" rx="3" stroke="#2D2D3A" strokeWidth="1" fill="none"/><rect x="9" y="24" width="3" height="3" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/><rect x="20" y="24" width="3" height="3" stroke="#2D2D3A" strokeWidth="0.8" fill="none"/></svg>
                      </div>
                      {/* 10: Hearts */}
                      <div className="rounded-lg aspect-[3/4] flex items-center justify-center" style={{ background: '#FAFAF8', border: `1px solid ${dark.border}`, animation: `heroFadeIn 0.4s ease-out 1.2s both` }}>
                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none"><path d="M16 32Q6 22 6 16Q6 10 11 10Q16 10 16 16Q16 10 21 10Q26 10 26 16Q26 22 16 32Z" stroke="#2D2D3A" strokeWidth="1.2" fill="none"/><path d="M16 14Q12 10 10 12" stroke="#2D2D3A" strokeWidth="0.6" fill="none"/><path d="M16 14Q20 10 22 12" stroke="#2D2D3A" strokeWidth="0.6" fill="none"/></svg>
                      </div>
                    </div>
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

              {/* Bottom label — changes per step */}
              <div className="px-5 py-3 flex items-center justify-center border-t" style={{ background: dark.surface, borderColor: dark.border }}>
                <span className="font-display text-xs px-4 py-1.5 rounded-full transition-all duration-500" style={{ color: dark.accent, background: `${dark.accent}18`, border: `1px solid ${dark.accent}30` }}>
                  {stepIdx === 0 && '+20 more pages generating...'}
                  {stepIdx === 1 && 'Auto-Layout & Assemble'}
                  {stepIdx === 2 && 'Coloring Book Workflow'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
