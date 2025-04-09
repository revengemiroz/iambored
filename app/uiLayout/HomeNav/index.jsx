import { Button } from "../../../components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

function HomeNav() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm top-0 z-10">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-2xl text-rose-600"
        >
          <Sparkles className="h-6 w-6" />
          <span>UnboreMe</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/about"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/random"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            Random
          </Link>
          <Link
            href="/history"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            History
          </Link>
          <Link
            href="/submit"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            Submit a Site
          </Link>
        </nav>
        <Button variant="ghost" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
}

export default HomeNav;
