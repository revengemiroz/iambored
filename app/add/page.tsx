"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 👇 Hardcoded demo categories
const categoryOptions = [
  { label: "Video", value: "1" },
  { label: "Website", value: "2" },
  { label: "Game", value: "3" },
  { label: "Art", value: "4" },
];

export default function DemoAddItemPage() {
  const addItem = useMutation(api.functions.items.addItem);

  const [form, setForm] = useState({
    title: "",
    url: "",
    type: "site",
    slug: "",
    categoryNumber: "1",
    tags: "",
    description: "",
    thumbnail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addItem({
      ...form,
      slug: form.slug || form.title.toLowerCase().replace(/\s+/g, "-"),
      tags: form.tags.split(",").map((tag) => tag.trim()),
      categoryNumber: Number(form.categoryNumber),
      thumbnail: form.thumbnail || undefined,
    });
    alert("Item added!");
    setForm({
      title: "",
      url: "",
      type: "site",
      slug: "",
      categoryNumber: "1",
      tags: "",
      description: "",
      thumbnail: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Add Demo Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title" className="text-sm font-medium">
            Title
          </Label>
          <Input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full"
            type="text"
          />
        </div>

        <div>
          <Label htmlFor="url" className="text-sm font-medium">
            URL
          </Label>
          <Input
            id="url"
            name="url"
            value={form.url}
            onChange={handleChange}
            className="w-full"
            type="url"
          />
        </div>

        <div>
          <Label htmlFor="type" className="text-sm font-medium">
            Type (e.g. youtube, tiktok)
          </Label>
          <Input
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full"
            type="text"
          />
        </div>

        <div>
          <Label htmlFor="slug" className="text-sm font-medium">
            Slug (optional)
          </Label>
          <Input
            id="slug"
            name="slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full"
            type="text"
          />
        </div>

        <div>
          <Label htmlFor="category" className="text-sm font-medium">
            Category
          </Label>
          <Select
            value={form.categoryNumber}
            onValueChange={(value) =>
              setForm((f) => ({ ...f, categoryNumber: value }))
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="w-full">
              {categoryOptions.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  className="w-full"
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="tags" className="text-sm font-medium">
            Tags (comma separated)
          </Label>
          <Input
            id="tags"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            className="w-full"
            type="text"
          />
        </div>

        <div>
          <Label htmlFor="description" className="text-sm font-medium">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="thumbnail" className="text-sm font-medium">
            Thumbnail (optional)
          </Label>
          <Input
            id="thumbnail"
            name="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            className="w-full"
            type="text"
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          variant="default"
          size="default"
        >
          Add Item
        </Button>
      </form>
    </div>
  );
}
