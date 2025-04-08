import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
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
          <h1 className="text-2xl font-bold text-red-600 ml-4">About</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 border border-red-100">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            About Bored Button
          </h2>

          <div className="space-y-6 text-red-800/90">
            <p>
              The Bored Button is a simple yet entertaining concept designed to
              cure boredom with just a single click. When you're feeling bored
              and don't know what to do, just press the button and let us take
              you somewhere interesting!
            </p>

            <h3 className="text-xl font-semibold text-red-600 mt-8">
              How It Works
            </h3>
            <p>
              Each time you click the Bored Button, our algorithm selects a
              random website from our curated collection of interesting,
              educational, entertaining, and thought-provoking destinations
              across the internet.
            </p>

            <h3 className="text-xl font-semibold text-red-600 mt-8">
              Our Mission
            </h3>
            <p>
              In a world full of endless scrolling and decision fatigue, we
              wanted to create something that makes discovery fun again. Our
              mission is to help people break out of their internet bubbles and
              discover new content they might never have found otherwise.
            </p>

            <h3 className="text-xl font-semibold text-red-600 mt-8">
              Join Our Community
            </h3>
            <p>
              Have a suggestion for a website that should be included in our
              collection? Visit our
              <Link
                href="/submit"
                className="text-red-600 hover:text-red-700 font-medium mx-1"
              >
                Submit
              </Link>
              page to share your recommendations with us.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700">
                Back to Bored Button
              </Button>
            </Link>
          </div>
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
