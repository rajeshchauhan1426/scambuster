import { Header } from "@/components/header";
import { ContentAnalyzer } from "@/components/content-analyzer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <ContentAnalyzer />
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        © {new Date().getFullYear()} ScamBuster.ai. All rights reserved.
      </footer>
    </>
  );
}
