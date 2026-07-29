import { Sparkles, Layers, FileText, Download, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Pick a Theme & Describe',
    description: 'Choose from 50+ themes or describe your own — fairy garden, cottagecore, mandala...',
    icon: Sparkles,
  },
  {
    number: 2,
    title: 'AI Generates Pages in Batch',
    description: 'Create 30-50 unique coloring pages in one session with consistent style',
    icon: Layers,
  },
  {
    number: 3,
    title: 'Auto-Layout & Assemble Book',
    description: 'Single-page design + blank back page, KDP-standard formatting',
    icon: FileText,
  },
  {
    number: 4,
    title: 'Export Print-Ready PDF & Sell',
    description: '300 DPI PDF with correct trim size, bleed, and margins — upload directly to KDP',
    icon: Download,
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #1A1A2E 0%, #24243E 100%)' }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="font-display text-[32px] md:text-[40px] text-white text-center mb-12" style={{ letterSpacing: '-0.5px' }}>
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: '#FFB800' }}
                  >
                    <Icon className="w-7 h-7 text-[#1A1A2E]" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-[#1A1A2E] text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-lg text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-[#FFB800] mt-4 hidden md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
