import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'PixCraftX frequently asked questions and answers.',
};

const faqs = [
  {
    question: 'What is PixCraftX?',
    answer:
      'PixCraftX is an AI-powered coloring book engine for KDP and Etsy sellers. Batch generate coloring pages, auto-layout into books, and export print-ready PDFs with commercial license included.',
  },
  {
    question: 'How does it work?',
    answer:
      'Three steps: (1) Pick a Theme — describe your coloring book topic. (2) AI Batch Generate — create 30+ pages at once with consistent style. (3) Export & Sell — auto-layout into KDP-ready PDF and upload to Amazon or Etsy.',
  },
  {
    question: 'Is it free?',
    answer:
      'Yes! PixCraftX offers a free plan that includes 5 credits per month with a commercial license. If you need more, our Starter, Pro and Business plans provide additional monthly credits and exclusive features like batch generation and PDF export with auto-layout. Visit our pricing page for details.',
  },
  {
    question: 'What styles are available?',
    answer:
      'Line art styles optimized for coloring books — including Chubby Doodle, Clean Outline, and Detailed Ink. Each style produces pages with clear lines and print-quality resolution, perfect for KDP and Etsy.',
  },
  {
    question: 'What formats can I export?',
    answer:
      'Export your coloring pages as high-resolution 300 DPI PNG files for individual downloads, or as print-ready PDFs with correct KDP trim sizes and bleed included. Pro and Business plans support full book PDF export with auto-layout and multiple trim size options.',
  },
  {
    question: 'Can I use generated images commercially?',
    answer:
      'Every plan includes a commercial license to use generated images for commercial purposes, including selling on Amazon KDP, Etsy, and other platforms. Please review our Terms of Service for full details.',
  },
  {
    question: 'Is it safe for children?',
    answer:
      'Yes. All prompts are filtered through our content moderation system to block inappropriate or harmful content. We take child safety seriously and continuously improve our moderation. However, parental supervision is always recommended.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer:
      'You can cancel your subscription at any time from your account settings. Your access will remain active until the end of the current billing period. No further charges will be made after cancellation.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'All payments are processed securely through Creem, which supports a variety of international payment methods including major credit and debit cards. You will be able to select your preferred method at checkout.',
  },
  {
    question: 'How do I request a refund?',
    answer:
      'You can request a refund within 7 days of purchase by emailing support@pixcraftx.com with your account information and order number. Please see our Refund Policy for full details on eligibility and processing times.',
  },
  {
    question: 'Who made this?',
    answer:
      'PixCraftX is built by the PixCraftX team — a small group of designers and engineers passionate about helping creators build profitable coloring book businesses with AI. Visit pixcraftx.com to learn more.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl mb-8 text-center">
            Frequently Asked Questions
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h2 className="font-display text-2xl mt-8 mb-4 text-foreground">
                  {faq.question}
                </h2>
                <p className="leading-relaxed mb-6">
                  {faq.answer}
                </p>
              </div>
            ))}

            <h2 className="font-display text-2xl mt-8 mb-4 text-foreground">
              Still have questions?
            </h2>
            <p className="leading-relaxed mb-6">
              We&apos;re here to help! Reach out to us at{' '}
              <a href="mailto:support@pixcraftx.com" className="text-primary hover:underline">
                support@pixcraftx.com
              </a>{' '}
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
