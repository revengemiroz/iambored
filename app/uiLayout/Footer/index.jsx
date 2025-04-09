import { Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-8 px-4 md:px-6">
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-lg text-rose-600"
          >
            <Sparkles className="h-5 w-5" />
            <span>UnboreMe</span>
          </Link>
          <p className="text-sm text-gray-500">
            © 2025 UnboreMe. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-gray-500">
          <Link href="/terms" className="hover:text-rose-600 transition-colors">
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-rose-600 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="hover:text-rose-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
