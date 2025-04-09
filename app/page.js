import Image from "next/image";
import MainButton from "./uiLayout/MainButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 bg-gradient-to-b from-white to-rose-50">
        <div className="w-3/4 mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Feeling Bored?
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
              Discover something amazing with just one click. Our smart
              algorithm finds the perfect content to cure your boredom.
            </p>
          </div>

          <MainButton />

          <div className="mt-8 text-sm text-gray-500 space-y-1">
            <p>
              "I was bored at work. I was bored at home. I was bored everywhere
              until I found UnboreMe!"
            </p>
            <p className="font-medium">— Happy User</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>
              <b className="text-rose-600">1,000+</b> Curated Sites
            </span>
            <span>
              <b className="text-rose-600">10M+</b> Boredom Cured
            </span>
            <span>
              <b className="text-rose-600">24/7</b> Entertainment
            </span>
          </div>
        </div>
      </section>

      <section className="w-3/4 mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose UnboreMe?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Smart Recommendations",
              description:
                "Our algorithm learns what you enjoy and suggests content tailored to your interests.",
              icon: (
                <>
                  <path d="M12 2v8" />
                  <path d="m4.93 10.93 1.41 1.41" />
                  <path d="M2 18h2" />
                  <path d="M20 18h2" />
                  <path d="m19.07 10.93-1.41 1.41" />
                  <path d="M22 22H2" />
                  <path d="m16 6-4 4-4-4" />
                  <path d="M16 18a4 4 0 0 0-8 0" />
                </>
              ),
            },
            {
              title: "Curated Categories",
              description:
                "Choose from games, articles, videos, and more to find exactly what you're in the mood for.",
              icon: (
                <>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m7 10 2 2 6-6" />
                  <path d="m7 16 2 2 6-6" />
                </>
              ),
            },
            {
              title: "History Tracking",
              description:
                "Save your favorite discoveries and easily return to content you enjoyed.",
              icon: (
                <>
                  <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                  <path d="M12 8v4l2 2" />
                </>
              ),
            },
          ].map(({ title, description, icon }, idx) => (
            <div key={idx} className="rounded-lg border p-6 shadow-sm bg-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  {icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm text-gray-500 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-3/4 mx-auto py-16 bg-rose-50 rounded-xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-left text-gray-700">
            {[
              {
                q: "What is UnboreMe?",
                a: "UnboreMe is a platform that helps you discover interesting websites, games, tools, and content from across the internet with just one click.",
              },
              {
                q: "How does it work?",
                a: "Simply click the UnboreMe button, and we'll instantly show you a handpicked destination from our curated collection of websites.",
              },
              {
                q: "Is it free to use?",
                a: "Yes, UnboreMe is completely free! We believe everyone should have access to interesting content without paywalls.",
              },
              {
                q: "Can I suggest a website?",
                a: (
                  <>
                    We welcome submissions from our community. Visit our{" "}
                    <Link
                      href="/submit"
                      className="text-rose-600 hover:underline"
                    >
                      submission page
                    </Link>{" "}
                    to share your favorite websites.
                  </>
                ),
              },
              {
                q: "How do you select websites?",
                a: "Our team personally reviews each submission to ensure it's high-quality, safe, and genuinely interesting before adding it to our collection.",
              },
            ].map(({ q, a }, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold mb-1">{q}</h3>
                <p className="text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
