import { Button } from "../../../components/ui/button";
import { ExternalLink, Home, RefreshCw, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

function NavBar({ title, url, onOpenClick }) {
  return (
    <div className="bg-white border-b shadow-sm z-10 w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-row sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
        {/* Left side */}
        <div className="flex items-center gap-2 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-1 font-bold text-rose-600 text-base sm:text-lg whitespace-nowrap"
          >
            <Sparkles className="h-5 w-5" />
            <span>UnboreMe</span>
          </Link>

          <span className="text-gray-400 hidden sm:inline">|</span>

          <span className="capitalize text-sm font-semibold text-gray-600 truncate max-w-[180px] sm:max-w-xs">
            {title}
          </span>
        </div>

        {/* Right side actions */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-end gap-2">
          {/* Optional refresh button */}
          {/* <Button
            onClick={onRefreshClick}
            size="sm"
            className="bg-rose-600 hover:bg-rose-700 rounded-full h-9 w-9 p-0"
            aria-label="Get another random site"
          >
            <RefreshCw className="h-4 w-4" />
          </Button> */}

          <Button
            onClick={() => window.open(url)}
            variant="outline"
            size="sm"
            className="cursor-pointer flex items-center gap-1"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Open</span>
          </Button>

          <Button
            asChild
            variant="outline"
            size="sm"
            className={"cursor-pointer"}
          >
            <Link href="/" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
