import { mutation } from "../_generated/server";
import { v } from "convex/values";

// Add an item to the "items" table
export const addItem = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    url: v.string(),
    type: v.string(),
    categoryNumber: v.number(),
    tags: v.array(v.string()),
    description: v.string(),
    thumbnail: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("items", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
