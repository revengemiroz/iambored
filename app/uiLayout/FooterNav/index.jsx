"use client";

import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Share,
  List,
  Sparkles,
  Gamepad2,
  Palette,
  Users,
  Globe,
  PlaySquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MiniMainButton from "./smallButton";

const categories = [
  { label: "Videos", icon: <PlaySquare className="h-4 w-4" /> },
  { label: "WYR", icon: <Sparkles className="h-4 w-4" /> },
  { label: "Websites", icon: <Globe className="h-4 w-4" /> },
  { label: "Polls", icon: <Users className="h-4 w-4" /> },
  { label: "Games", icon: <Gamepad2 className="h-4 w-4" /> },
  { label: "Art", icon: <Palette className="h-4 w-4" /> },
];

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t px-3 py-6 z-50 shadow-md flex items-center justify-between">
      {/* Left arrows */}
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" className="text-rose-500">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-rose-500">
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Center categories + main button */}
      <div className="flex items-center gap-2 sm:gap-3">
        {categories.slice(0, 3).map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-[11px] text-gray-600"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-rose-300 text-rose-500 hover:bg-rose-50"
            >
              {cat.icon}
            </Button>
            <span className="mt-1 hidden sm:block">{cat.label}</span>
          </div>
        ))}

        <MiniMainButton />

        {categories.slice(3).map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-[11px] text-gray-600"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-rose-300 text-rose-500 hover:bg-rose-50"
            >
              {cat.icon}
            </Button>
            <span className="mt-1 hidden sm:block">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Right icons */}
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" className="text-rose-500">
          <Heart className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-rose-500">
          <Share className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-rose-500">
          <List className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
