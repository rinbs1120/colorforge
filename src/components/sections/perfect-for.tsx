import { Store, ShoppingBag, Users } from 'lucide-react';

const personas = [
  {
    icon: Store,
    emoji: '📚',
    title: 'KDP Publishers',
    headline: 'Create coloring books at scale, export KDP-ready PDF',
    points: [
      'Batch generate 30-50 pages per book',
      'Auto-layout with blank back pages',
      '300 DPI print-ready with correct trim size',
    ],
    color: '#FFB800',
    bg: 'rgba(255, 184, 0, 0.06)',
  },
  {
    icon: ShoppingBag,
    emoji: '🎨',
    title: 'Etsy Sellers',
    headline: 'Design unique coloring pages that stand out',
    points: [
      'Custom themes and styles per collection',
      'Multiple sizes: 8.5×11″, 8.5×8.5″, 6×9″',
      'Commercial license included in all plans',
    ],
    color: '#E8D5A0',
    bg: 'rgba(232, 213, 160, 0.06)',
  },
  {
    icon: Users,
    emoji: '💼',
    title: 'Content Creators',
    headline: 'Generate themed collections for your audience',
    points: [
      'Consistent style across entire book',
      'Reference image upload for custom designs',
      'Sell on KDP, Etsy, or your own store',
    ],
    color: '#FFD666',
    bg: 'rgba(255, 214, 102, 0.06)',
  },
];

export function PerfectFor() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #1A1A2E 0%, #24243E 100%)' }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-[32px] md:text-[40px] text-white mb-4" style={{ letterSpacing: '-0.5px' }}>
            Built for Sellers
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to create and sell coloring books at scale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl p-8 border border-white/10 hover:border-[#FFB800]/30 transition-all hover:-translate-y-1"
                style={{ background: p.bg, backdropFilter: 'blur(10px)' }}
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="font-display text-2xl text-white mb-2">{p.title}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: p.color }}>{p.headline}</p>
                <ul className="space-y-2">
                  {p.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: p.color }}>&#10003;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
