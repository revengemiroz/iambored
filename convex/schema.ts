import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; // ✅ You forgot this part

export default defineSchema({
  categories: defineTable({
    name: v.string(), // ✅ was "string"
    slug: v.string(),
    number: v.number(),
  }),

  items: defineTable({
    title: v.string(),
    slug: v.string(),
    url: v.string(),
    type: v.string(), // ✅ was "string"
    categoryNumber: v.number(),
    tags: v.array(v.string()),
    description: v.string(),
    thumbnail: v.optional(v.string()),
    createdAt: v.number(),
  }),
});
