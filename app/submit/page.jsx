"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/@/components/ui/input";
import { Textarea } from "@/@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/@/components/ui/select";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    websiteName: "",
    websiteUrl: "",
    category: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);

    // Show success message
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-red-50">
        <header className="bg-white border-b border-red-100 py-4">
          <div className="container mx-auto px-6 flex items-center">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-red-600 hover:text-red-700 hover:bg-red-50 -ml-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-red-600 ml-4">Submit</h1>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-6 py-12 flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 border border-red-100 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-red-600 mb-4">Thank You!</h2>
            <p className="text-red-800/80 mb-6">
              Your website suggestion has been submitted successfully. Our team
              will review it soon.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/">
                <Button className="bg-red-600 hover:bg-red-700">
                  Back to Home
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-red-200 text-red-600 hover:bg-red-50"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    websiteName: "",
                    websiteUrl: "",
                    category: "",
                    description: "",
                  });
                }}
              >
                Submit Another
              </Button>
            </div>
          </div>
        </main>
        <footer className="py-6 text-center text-red-600 border-t border-red-100 bg-white">
          <div className="container mx-auto">
            <p>
              © {new Date().getFullYear()} Bored Button. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <Link
                href="/about"
                className="text-red-500 hover:text-red-700 text-sm"
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Privacy
              </Link>
              <Link
                href="/settings"
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Settings
              </Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <header className="bg-white border-b border-red-100 py-4">
        <div className="container mx-auto px-6 flex items-center">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 -ml-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-red-600 ml-4">Submit</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 border border-red-100">
          <h2 className="text-2xl font-bold text-red-600 mb-6">
            Submit a Website
          </h2>
          <p className="text-red-800/80 mb-6">
            Know an interesting website that should be included in our
            collection? Submit it below and help others discover great content!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="websiteName"
                className="text-sm font-medium text-red-800"
              >
                Website Name
              </label>
              <Input
                id="websiteName"
                name="websiteName"
                value={formData.websiteName}
                onChange={handleChange}
                placeholder="e.g., Wikipedia"
                required
                className="border-red-200 focus-visible:ring-red-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="websiteUrl"
                className="text-sm font-medium text-red-800"
              >
                Website URL
              </label>
              <Input
                id="websiteUrl"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="e.g., https://www.wikipedia.org"
                type="url"
                required
                className="border-red-200 focus-visible:ring-red-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="category"
                className="text-sm font-medium text-red-800"
              >
                Category
              </label>
              <Select
                value={formData.category}
                onValueChange={handleSelectChange}
                required
              >
                <SelectTrigger className="border-red-200 focus:ring-red-500">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="educational">Educational</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="productivity">Productivity</SelectItem>
                  <SelectItem value="relaxation">Relaxation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="text-sm font-medium text-red-800"
              >
                Why is this website interesting?
              </label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us why this website is worth visiting..."
                className="min-h-[100px] border-red-200 focus-visible:ring-red-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Submit Website
            </Button>
          </form>
        </div>
      </main>
      <footer className="py-6 text-center text-red-600 border-t border-red-100 bg-white">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Bored Button. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              href="/about"
              className="text-red-500 hover:text-red-700 text-sm"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Privacy
            </Link>
            <Link
              href="/settings"
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Settings
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
