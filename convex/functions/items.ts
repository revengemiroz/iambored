import { action, mutation } from "../_generated/server";
import { v } from "convex/values";
import { query } from "../_generated/server";

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

// // Get a random item from all or a specific category
// export const getRandomItem = query({
//   args: {
//     categoryNumber: v.optional(v.number()), // if passed, filter by this
//   },
//   handler: async (ctx, args) => {
//     let items = await ctx.db.query("items").collect();

//     if (args.categoryNumber !== undefined) {
//       items = items.filter(
//         (item) => item.categoryNumber === args.categoryNumber
//       );
//     }

//     if (items.length === 0) return null;

//     const randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
//   },
// });

export const getRandomItem = query({
  args: {
    categoryNumber: v.optional(v.number()),
    trigger: v.number(), // ⚡ used to re-run query on demand
  },
  handler: async (ctx, args) => {
    let items = await ctx.db.query("items").collect();

    if (args.categoryNumber !== undefined) {
      items = items.filter(
        (item) => item.categoryNumber === args.categoryNumber
      );
    }

    if (items.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  },
});
