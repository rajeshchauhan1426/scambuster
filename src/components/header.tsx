import { Logo } from './logo';

export function Header() {
  return (
    <header className="py-4 px-6 border-b border-border/40 shadow-sm bg-card">
      <div className="container mx-auto flex items-center gap-3">
        <Logo className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          ScamBuster.ai
        </h1>
      </div>
    </header>
  );
}
