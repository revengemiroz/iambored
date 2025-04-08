"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Save } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    theme: "red",
    openInNewTab: true,
    animationSpeed: 50,
    showDestination: true,
    excludeCategories: [],
    saveHistory: false,
  })

  const [saved, setSaved] = useState(false)

  const handleSwitchChange = (name) => {
    setSettings((prev) => ({ ...prev, [name]: !prev[name] }))
    setSaved(false)
  }

  const handleThemeChange = (value) => {
    setSettings((prev) => ({ ...prev, theme: value }))
    setSaved(false)
  }

  const handleSliderChange = (value) => {
    setSettings((prev) => ({ ...prev, animationSpeed: value[0] }))
    setSaved(false)
  }

  const handleSave = () => {
    // In a real app, you would save these settings to localStorage or a backend
    console.log("Saving settings:", settings)
    setSaved(true)

    // Reset saved status after 3 seconds
    setTimeout(() => setSaved(false), 3000)
  }

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
          <h1 className="text-2xl font-bold text-red-600 ml-4">Settings</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-6 py-12">
        <div
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 border border-red-100">
          <h2 className="text-2xl font-bold text-red-600 mb-6">Customize Your Experience</h2>

          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-red-800">Theme</h3>
                <p className="text-sm text-red-600/70">Choose your preferred color theme</p>
              </div>
              <Select value={settings.theme} onValueChange={handleThemeChange}>
                <SelectTrigger className="w-[180px] border-red-200">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">Red (Default)</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="dark">Dark Mode</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-red-800">Open in New Tab</h3>
                <p className="text-sm text-red-600/70">Open websites in a new browser tab</p>
              </div>
              <Switch
                checked={settings.openInNewTab}
                onCheckedChange={() => handleSwitchChange("openInNewTab")}
                className="data-[state=checked]:bg-red-600" />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-red-800">Animation Speed</h3>
                <p className="text-sm text-red-600/70">Adjust how fast the button animations play</p>
              </div>
              <div className="pt-2">
                <Slider
                  defaultValue={[settings.animationSpeed]}
                  max={100}
                  step={1}
                  onValueChange={handleSliderChange}
                  className="[&>span]:bg-red-600" />
                <div className="flex justify-between mt-1 text-xs text-red-600/70">
                  <span>Slower</span>
                  <span>Faster</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-red-800">Show Destination</h3>
                <p className="text-sm text-red-600/70">Show website name before redirecting</p>
              </div>
              <Switch
                checked={settings.showDestination}
                onCheckedChange={() => handleSwitchChange("showDestination")}
                className="data-[state=checked]:bg-red-600" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-red-800">Save History</h3>
                <p className="text-sm text-red-600/70">Keep track of websites you've visited</p>
              </div>
              <Switch
                checked={settings.saveHistory}
                onCheckedChange={() => handleSwitchChange("saveHistory")}
                className="data-[state=checked]:bg-red-600" />
            </div>
          </div>

          <div className="mt-10 flex items-center justify-end gap-4">
            <span
              className={`text-green-600 transition-opacity duration-300 ${saved ? "opacity-100" : "opacity-0"}`}>
              Settings saved!
            </span>
            <Button onClick={handleSave} className="bg-red-600 hover:bg-red-700">
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
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
