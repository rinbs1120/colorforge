import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'About',
  description: 'Learn more about PixCraftX and our mission.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl mb-8 text-center">
            About PixCraftX
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              PixCraftX is an AI-powered coloring book engine built for KDP publishers, Etsy sellers,
              and creators who want to build coloring book collections that sell.
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe every creator should be able to build a profitable coloring book business. Whether you&apos;re a KDP publisher
              scaling your catalog, an Etsy seller launching your first coloring page shop, or a designer
              building themed collections — PixCraftX makes it fast, easy, and affordable.
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">How It Works</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Using advanced AI, PixCraftX transforms your text descriptions into clean line art coloring pages, batch-generates entire collections, auto-assembles them into books with correct KDP formatting, and exports print-ready 300 DPI PDFs. Every plan includes a commercial license so you can sell on Amazon KDP, Etsy, or anywhere else.
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">Made With Love</h2>
            <p className="text-muted-foreground leading-relaxed">
              PixCraftX is built by a small team passionate about creativity and technology.
              We&apos;re constantly improving our AI models and adding new features based on your
              feedback.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
