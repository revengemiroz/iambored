"use client";
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Loader2,
  BookOpen,
  Shuffle,
  Sparkles,
  Lightbulb,
  Briefcase,
  Users,
  Compass,
  X,
  Home,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  ExternalLink,
  AlertCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Sample list of websites to redirect to with categories
const WEBSITES = [
  { url: "https://www.wikipedia.org", name: "Wikipedia", category: "Educational" },
  { url: "https://www.khanacademy.org", name: "Khan Academy", category: "Educational" },
  { url: "https://www.ted.com", name: "TED", category: "Educational" },
  { url: "https://www.nasa.gov", name: "NASA", category: "Educational" },

  { url: "https://www.reddit.com", name: "Reddit", category: "Entertainment" },
  { url: "https://www.youtube.com", name: "YouTube", category: "Entertainment" },
  { url: "https://www.twitch.tv", name: "Twitch", category: "Entertainment" },
  { url: "https://www.chess.com", name: "Chess.com", category: "Entertainment" },

  { url: "https://www.github.com", name: "GitHub", category: "Productivity" },
  { url: "https://www.notion.so", name: "Notion", category: "Productivity" },
  { url: "https://www.trello.com", name: "Trello", category: "Productivity" },
  { url: "https://www.canva.com", name: "Canva", category: "Productivity" },

  { url: "https://www.twitter.com", name: "Twitter", category: "Social" },
  { url: "https://www.pinterest.com", name: "Pinterest", category: "Social" },
  { url: "https://www.instagram.com", name: "Instagram", category: "Social" },
  { url: "https://www.linkedin.com", name: "LinkedIn", category: "Social" },

  { url: "https://www.nationalgeographic.com", name: "National Geographic", category: "Discovery" },
  { url: "https://www.atlasobscura.com", name: "Atlas Obscura", category: "Discovery" },
  { url: "https://www.openculture.com", name: "Open Culture", category: "Discovery" },
  { url: "https://www.curiositystream.com", name: "Curiosity Stream", category: "Discovery" },
]

// Get unique categories
const CATEGORIES = ["All", ...Array.from(new Set(WEBSITES.map((site) => site.category)))]

// Category icons mapping
const CATEGORY_ICONS = {
  All: <Sparkles className="h-4 w-4" />,
  Educational: <BookOpen className="h-4 w-4" />,
  Entertainment: <Lightbulb className="h-4 w-4" />,
  Productivity: <Briefcase className="h-4 w-4" />,
  Social: <Users className="h-4 w-4" />,
  Discovery: <Compass className="h-4 w-4" />,
}

export function BoredButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [destination, setDestination] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentSite, setCurrentSite] = useState(null)
  const [buttonPressed, setButtonPressed] = useState(false)
  const [showIframe, setShowIframe] = useState(false)
  const [iframeError, setIframeError] = useState(false)
  const iframeRef = useRef(null)

  const handleClick = () => {
    if (isLoading) return

    // Button press animation
    setButtonPressed(true)
    setTimeout(() => setButtonPressed(false), 150)

    setIsLoading(true)
    setIframeError(false)

    // Filter websites by selected category if not "All"
    const filteredSites =
      selectedCategory === "All" ? WEBSITES : WEBSITES.filter((site) => site.category === selectedCategory)

    // Simulate loading
    setTimeout(() => {
      const randomSite = filteredSites[Math.floor(Math.random() * filteredSites.length)]
      setDestination(randomSite.name)
      setCurrentSite({
        url: randomSite.url,
        name: randomSite.name,
        category: randomSite.category,
      })

      // Show iframe after showing destination
      setTimeout(() => {
        setIsLoading(false)
        setDestination(null)
        setShowIframe(true)
      }, 1000)
    }, 800)
  }

  const closeIframe = () => {
    setShowIframe(false)
    setCurrentSite(null)
    setIframeError(false)
  }

  const openInNewTab = () => {
    if (currentSite) {
      window.open(currentSite.url, "_blank")
    }
  }

  // Handle iframe load errors
  useEffect(() => {
    const handleIframeError = () => {
      setIframeError(true)
    }

    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener("error", handleIframeError)

      return () => {
        iframe.removeEventListener("error", handleIframeError)
      };
    }
  }, [showIframe])

  if (showIframe && currentSite) {
    return (
      (<div className="w-full max-w-6xl mx-auto flex flex-col h-[85vh]">
        {/* Browser-like navigation bar */}
        <div
          className="bg-zinc-900 text-white p-2 flex items-center gap-2 rounded-t-lg">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-zinc-700 rounded-full"
            onClick={closeIframe}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-zinc-700 rounded-full"
            disabled>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-zinc-700 rounded-full"
            onClick={() => {
              if (iframeRef.current) {
                iframeRef.current.src = currentSite.url
              }
            }}>
            <RefreshCw className="h-4 w-4" />
          </Button>

          <div
            className="flex-1 mx-2 bg-zinc-800 rounded-full px-3 py-1 text-sm flex items-center">
            <span className="truncate">{currentSite.url}</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-zinc-700 rounded-full"
            onClick={openInNewTab}>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
        {/* Bored Button header */}
        <div
          className="bg-white border-b border-red-100 p-2 flex items-center justify-between">
          <div className="text-red-800 text-sm">
            Be a big fish in a small pond. Still bored? Press the Bored Button™ again.
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-red-600 hover:bg-red-50"
              onClick={closeIframe}>
              <Home className="h-4 w-4 mr-1" />
              Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-red-600 hover:bg-red-50"
              onClick={closeIframe}>
              <X className="h-4 w-4 mr-1" />
              Remove Frame
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleClick}
                className="bg-red-600 hover:bg-red-700 text-white rounded-full h-10 w-10">
                <Shuffle className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Iframe content */}
        <div className="flex-1 bg-white">
          {iframeError ? (
            <div
              className="h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4 text-red-600">
                <AlertCircle className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Unable to load website</h3>
              <p className="text-red-600 mb-4 max-w-md">
                This website cannot be displayed in an iframe due to security restrictions.
              </p>
              <Button onClick={openInNewTab} className="bg-red-600 hover:bg-red-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in New Tab
              </Button>
            </div>
          ) : (
            <iframe
              ref={iframeRef}
              src={currentSite.url}
              className="w-full h-full border-0"
              title={currentSite.name}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              onError={() => setIframeError(true)} />
          )}
        </div>
      </div>)
    );
  }

  return (
    (<div className="w-full max-w-md">
      <Card
        className="border-red-100 shadow-md bg-gradient-to-b from-white to-red-50/50 overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col items-center gap-8">
            {/* Main Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative">
              <div
                className={cn(
                  "absolute inset-0 bg-red-600 rounded-full opacity-20 blur-xl transition-all",
                  buttonPressed ? "scale-90" : "scale-100"
                )} />

              <Button
                onClick={handleClick}
                disabled={isLoading}
                className={cn(
                  "bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-full w-36 h-36 text-xl font-bold shadow-lg transition-all",
                  buttonPressed ? "shadow-inner scale-95" : "shadow-red-200/50 hover:shadow-xl",
                  isLoading ? "cursor-not-allowed" : "cursor-pointer"
                )}>
                {isLoading ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin mb-1" />
                    <span className="text-sm animate-pulse">Loading...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Shuffle className="h-8 w-8 mb-2" />
                    <span>BORED?</span>
                  </div>
                )}
              </Button>
            </motion.div>

            {/* Destination Notification */}
            {destination && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 font-medium flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full shadow-sm">
                <BookOpen className="h-4 w-4" />
                <span>Taking you to {destination}</span>
              </motion.div>
            )}

            {/* Categories */}
            <div className="w-full">
              <p className="text-red-700/70 text-xs mb-2 text-center">CHOOSE A CATEGORY</p>
              <div className="grid grid-cols-3 gap-2">
                {CATEGORIES.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "h-auto py-2 border-red-100 hover:border-red-200 hover:bg-red-50 transition-all",
                      selectedCategory === category
                        ? "bg-red-100 text-red-700 border-red-200"
                        : "bg-white text-red-600"
                    )}>
                    <div className="flex flex-col items-center gap-1">
                      {CATEGORY_ICONS[category]}
                      <span className="text-xs">{category}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>)
  );
}
