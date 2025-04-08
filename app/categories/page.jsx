import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"

// Sample categories and websites
const CATEGORIES = [
  {
    name: "Educational",
    description: "Learn something new",
    websites: [
      { name: "Wikipedia", url: "https://www.wikipedia.org" },
      { name: "Khan Academy", url: "https://www.khanacademy.org" },
      { name: "TED", url: "https://www.ted.com" },
      { name: "NASA", url: "https://www.nasa.gov" },
    ],
  },
  {
    name: "Entertainment",
    description: "Have some fun",
    websites: [
      { name: "YouTube", url: "https://www.youtube.com" },
      { name: "Reddit", url: "https://www.reddit.com" },
      { name: "Spotify", url: "https://open.spotify.com" },
      { name: "Chess.com", url: "https://www.chess.com" },
    ],
  },
  {
    name: "Productivity",
    description: "Get things done",
    websites: [
      { name: "Notion", url: "https://www.notion.so" },
      { name: "Trello", url: "https://trello.com" },
      { name: "GitHub", url: "https://github.com" },
      { name: "Canva", url: "https://www.canva.com" },
    ],
  },
  {
    name: "Relaxation",
    description: "Take a break",
    websites: [
      { name: "Calm", url: "https://www.calm.com" },
      { name: "Rainy Mood", url: "https://rainymood.com" },
      { name: "Pixel Art", url: "https://www.pixilart.com" },
      { name: "Virtual Vacation", url: "https://virtualvacation.us" },
    ],
  },
]

export default function CategoriesPage() {
  return (
    (<div className="flex flex-col min-h-screen bg-red-50">
      <header className="bg-white border-b border-red-100 py-4">
        <div className="container mx-auto px-6 flex items-center">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-red-600 ml-4">Categories</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Browse by Category</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {CATEGORIES.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg shadow-md p-6 border border-red-100">
                <h3 className="text-xl font-bold text-red-600 mb-2">{category.name}</h3>
                <p className="text-red-800/80 mb-4">{category.description}</p>

                <ul className="space-y-2">
                  {category.websites.map((site) => (
                    <li key={site.name} className="flex items-center justify-between">
                      <span className="text-red-800">{site.name}</span>
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-700 flex items-center">
                        Visit <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-red-800/80 mb-6">Want to explore without choosing? Try the Bored Button!</p>
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700">Back to Bored Button</Button>
            </Link>
          </div>
        </div>
      </main>
      <footer
        className="py-6 text-center text-red-600 border-t border-red-100 bg-white">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Bored Button. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/about" className="text-red-500 hover:text-red-700 text-sm">
              About
            </Link>
            <Link href="/privacy" className="text-red-500 hover:text-red-700 text-sm">
              Privacy
            </Link>
            <Link href="/settings" className="text-red-500 hover:text-red-700 text-sm">
              Settings
            </Link>
          </div>
        </div>
      </footer>
    </div>)
  );
}
