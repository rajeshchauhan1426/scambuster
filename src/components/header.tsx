
import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#analyzer", label: "Analyzer" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header className="py-4 px-6 border-b border-border/40 shadow-sm bg-card sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              SafeNet.AI
            </h1>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium p-6 mt-8">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                   <Logo className="h-8 w-8 text-primary" />
                   <span>SafeNet.AI</span>
                </Link>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
