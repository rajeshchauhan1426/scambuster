import { Logo } from './logo';

export function Header() {
  return (
    <header className="py-4 px-6 border-b border-border/40 shadow-sm bg-card sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
            SafeNet.AI
            </h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#analyzer" className="text-muted-foreground hover:text-foreground transition-colors">Analyzer</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}
