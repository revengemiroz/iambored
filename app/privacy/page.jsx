import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
          <h1 className="text-2xl font-bold text-red-600 ml-4">Privacy Policy</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-6 py-12">
        <div
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 border border-red-100">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Privacy Policy</h2>

          <div className="space-y-6 text-red-800/90">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h3 className="text-xl font-semibold text-red-600 mt-8">Introduction</h3>
            <p>
              At Bored Button, we respect your privacy and are committed to protecting your personal data. This Privacy
              Policy explains how we collect, use, and safeguard your information when you use our website.
            </p>

            <h3 className="text-xl font-semibold text-red-600 mt-8">Information We Collect</h3>
            <p>We collect minimal information to provide and improve our service:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Usage data (pages visited, time spent, etc.)</li>
              <li>Device information (browser type, operating system, etc.)</li>
              <li>IP address and approximate location</li>
              <li>If you enable the "Save History" setting, we store your browsing history locally on your device</li>
            </ul>

            <h3 className="text-xl font-semibold text-red-600 mt-8">How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide, maintain, and improve our service</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Detect and prevent technical issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-red-600 mt-8">Cookies</h3>
            <p>
              We use cookies to remember your preferences and settings. You can control cookies through your browser
              settings.
            </p>

            <h3 className="text-xl font-semibold text-red-600 mt-8">Third-Party Websites</h3>
            <p>
              The Bored Button redirects you to third-party websites. This Privacy Policy does not apply to those
              websites. We encourage you to review the privacy policies of any website you visit through our service.
            </p>

            <h3 className="text-xl font-semibold text-red-600 mt-8">Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h3 className="text-xl font-semibold text-red-600 mt-8">Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@boredbutton.example.com.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
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
