import { Button } from "@/components/ui/button";
import { ExternalLink, Home, RefreshCw, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="bg-white border-b shadow-sm z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-rose-600"
          >
            <Sparkles className="h-5 w-5" />
            <span>UnboreMe</span>
          </Link>
          <span className="text-gray-400">|</span>
          <span className="text-sm text-gray-600 truncate max-w-[300px]">
            {/* {currentSite.title} */}
            title
          </span>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-600 hidden sm:block">
            Still bored? Press the Bored Button™ again.
          </p>
          <Button
            // onClick={handleGetAnother}
            size="sm"
            className="bg-rose-600 hover:bg-rose-700 rounded-full h-10 w-10 p-0"
            aria-label="Get another random site"
          >
            <RefreshCw className="h-5 w-5" />
          </Button>
          <Button
            // onClick={openInNewTab}
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Open in New Tab
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
