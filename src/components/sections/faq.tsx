'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How do I create a coloring page?',
    answer:
      'Simply type a description of what you want — like "a Chinese dragon soaring through clouds" — and click Generate. Our AI will create a clean line art coloring page in seconds.',
  },
  {
    question: 'What styles are available?',
    answer:
      'Line art styles optimized for coloring books — including Chubby Doodle, Clean Outline, and Detailed Ink. Each style produces pages with clear lines and print-quality resolution.',
  },
  {
    question: 'What formats can I export?',
    answer:
      'Export your coloring pages as high-resolution 300 DPI PNG files for individual downloads, or as print-ready PDFs with correct KDP trim sizes and bleed included. Pro and Business plans support full book PDF export with auto-layout and multiple trim size options.',
  },
  {
    question: 'Can I upload a reference image?',
    answer:
      'Yes! Upload any photo and our AI will transform it into a coloring page while preserving the composition and subject. This costs 5 credits per generation.',
  },
  {
    question: 'Can I use the images commercially?',
    answer:
      'Every plan includes a commercial license, so you can use generated images for products, prints, and sell on Amazon KDP, Etsy, and other platforms. Please review our Terms of Service for full details.',
  },
  {
    question: 'How many pages can I generate for free?',
    answer:
      'Free accounts get 5 credits per month with a commercial license. Each text-generated page costs 1 credit, and reference image generation costs 5 credits (first one is free!). No credit card required to start.',
  },
  {
    question: 'What image formats are available for download?',
    answer:
      'All pages can be downloaded as high-resolution 300 DPI PNG files. Starter and above support PDF export. Pro and Business plans include full book PDF with auto-layout and multiple trim sizes.',
  },
  {
    question: 'Do free downloads have a watermark?',
    answer:
      'Free plan downloads include a subtle PixCraftX watermark. Starter plan and above get clean, watermark-free downloads.',
  },
  {
    question: 'What AI technology powers PixCraftX?',
    answer:
      'PixCraftX uses advanced AI image generation and editing models to batch generate coloring pages and export print-ready PDFs. All generated content is AI-created and should be reviewed before use.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="font-display text-[32px] md:text-[40px] text-center mb-12 text-foreground" style={{ letterSpacing: '-0.5px' }}>
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card overflow-hidden hover:border-[#FFB800]/25 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
