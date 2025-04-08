import Link from "next/link";
import { BoredButton } from "@/components/bored-button";
import { Info, Grid3X3, Send, Settings } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-red-50 to-white">
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-4 text-center">
          Bored Button
        </h1>
        <p className="text-md md:text-lg text-red-800/70 max-w-md mb-10 text-center">
          Click the button to discover something interesting
        </p>

        <BoredButton />

        <div className="mt-12 grid gap-3 md:grid-cols-3 max-w-2xl w-full">
          <Link href="/about" className="group">
            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-red-100 h-full">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-red-600" />
                <h2 className="text-lg font-medium text-red-700 group-hover:text-red-800">
                  About
                </h2>
              </div>
              <p className="text-red-800/70 text-sm">
                Learn how the Bored Button works
              </p>
            </div>
          </Link>

          <Link href="/categories" className="group">
            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-red-100 h-full">
              <div className="flex items-center gap-2 mb-2">
                <Grid3X3 className="h-4 w-4 text-red-600" />
                <h2 className="text-lg font-medium text-red-700 group-hover:text-red-800">
                  Categories
                </h2>
              </div>
              <p className="text-red-800/70 text-sm">
                Browse websites by category
              </p>
            </div>
          </Link>

          <Link href="/submit" className="group">
            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-red-100 h-full">
              <div className="flex items-center gap-2 mb-2">
                <Send className="h-4 w-4 text-red-600" />
                <h2 className="text-lg font-medium text-red-700 group-hover:text-red-800">
                  Submit
                </h2>
              </div>
              <p className="text-red-800/70 text-sm">Suggest a new website</p>
            </div>
          </Link>
        </div>
      </main>
      <footer className="py-4 text-center text-red-700/80 border-t border-red-100 bg-white text-sm">
        <div className="container mx-auto">
          <div className="flex justify-center gap-4 mb-1">
            <Link
              href="/about"
              className="text-red-600 hover:text-red-800 flex items-center gap-1"
            >
              <Info className="h-3 w-3" />
              <span>About</span>
            </Link>
            <Link
              href="/privacy"
              className="text-red-600 hover:text-red-800 flex items-center gap-1"
            >
              <Settings className="h-3 w-3" />
              <span>Privacy</span>
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Bored Button</p>
        </div>
      </footer>
    </div>
  );
}
