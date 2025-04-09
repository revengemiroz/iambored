"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

export const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }) {
  // Zustand store functions & state

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
