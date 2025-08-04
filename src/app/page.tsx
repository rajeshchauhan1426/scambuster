
import { Header } from "@/components/header";
import { ContentAnalyzer } from "@/components/content-analyzer";
import { Button } from "@/components/ui/button";
import { Shield, Bot, FileScan, Users } from "lucide-react";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <section className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Unified AI-Powered Threat Detection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            SafeNet.AI protects you from phishing, fake job offers, scam messages, and manipulated media using cutting-edge AI.
          </p>
          <div className="flex justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <a href="#analyzer">Get Started</a>
            </Button>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-card/50 rounded-xl">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Why SafeNet.AI?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center p-6 rounded-lg hover:bg-card transition-colors">
                        <Shield className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Comprehensive Protection</h3>
                        <p className="text-muted-foreground">Detects a wide range of threats including phishing, scams, and deepfakes in one platform.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-lg hover:bg-card transition-colors">
                        <Bot className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">AI-Driven Analysis</h3>
                        <p className="text-muted-foreground">Leverages advanced AI to provide real-time risk scores and detailed explanations.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-lg hover:bg-card transition-colors">
                        <FileScan className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Multi-Format Scanning</h3>
                        <p className="text-muted-foreground">Analyze text, emails, messages, and soon, URLs and files for complete digital safety.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="analyzer" className="py-16 md:py-24">
            <ContentAnalyzer />
        </section>

        <section id="about-us-cta" className="py-16 md:py-24 text-center bg-card/50 rounded-xl">
            <div className="container mx-auto max-w-3xl">
                <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Curious About the Minds Behind the Shield?</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                    Meet the team of dedicated experts who are committed to building a safer digital environment for everyone.
                </p>
                <Button asChild size="lg" variant="outline">
                    <Link href="/about">Learn More About Us</Link>
                </Button>
            </div>
        </section>

      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        © {new Date().getFullYear()} SafeNet.AI. All rights reserved.
      </footer>
    </>
  );
}
