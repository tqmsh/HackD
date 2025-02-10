import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import { UserMenu } from "@/components/UserMenu";


export default function SplashPageLayout({ 
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ConvexClientProvider>
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-20 border-b bg-background/80 px-4 backdrop-blur md:px-6">
        <nav className="container hidden w-full justify-between gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/">
          
            <Image
              src="/Hackd.png"
              alt="Logo"
              width={128}
              height={128}
              className="rounded-full"/>
          </Link>
          <div className="flex items-center gap-4">
            <SplashPageNav />
          </div>
          <UserMenu>David</UserMenu>
        </nav>
      </header>
      <main className="flex grow flex-col">{children}</main>
      <footer className="border-t">
        <div className="container py-4 text-sm leading-loose">
          Built with ❤️ at{" "}
          <FooterLink href="https://hackthenorth2024.devpost.com/">HackTheNorth2024</FooterLink>.
          Powered by Convex,{" "}
          <FooterLink href="https://nextjs.org/">Next.js</FooterLink> and{" "}
          <FooterLink href="https://ui.shadcn.com/">shadcn/ui</FooterLink>.
        </div>
      </footer>
    </div>
    </ConvexClientProvider>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 hover:no-underline"
      target="_blank"
    >
      {children}
    </Link>
  );
}

function SplashPageNav() {
  return (
    <>
    
      <Link href="/hacker">
        <Button>Get Started</Button>
      </Link>
    </>
  );
}
