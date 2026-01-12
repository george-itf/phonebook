import Link from "next/link";
import {
  Camera,
  Trophy,
  Heart,
  MessageCircle,
  Tag,
  Users,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";
import { CompetitionBanner } from "@/components/photos";

// Mock data - in production these would come from Supabase
const mockCompetition = {
  id: "1",
  month: "2025-01-01",
  title: "January 2025: Winter Light",
  theme: "Capture the magical winter light in Whitstable",
  prize_description: "£50 voucher for Wheeler's Oyster Bar",
  prize_shop_id: null,
  prize_value: "£50",
  submissions_open: "2025-01-01T00:00:00Z",
  submissions_close: "2025-01-21T23:59:59Z",
  voting_open: "2025-01-22T00:00:00Z",
  voting_close: "2025-01-28T23:59:59Z",
  winner_id: null,
  runner_up_id: null,
  status: "submissions" as const,
  created_at: "2025-01-01T00:00:00Z",
};

const quickLinks = [
  {
    href: "/photos",
    icon: Camera,
    title: "Photo Gallery",
    description: "See community photos of Whitstable",
    color: "ocean",
  },
  {
    href: "/leaderboard",
    icon: Trophy,
    title: "Shop Leaderboard",
    description: "Top trending shops this week",
    color: "amber",
  },
  {
    href: "/community",
    icon: Heart,
    title: "Community Hub",
    description: "Charities & volunteer events",
    color: "rose",
  },
  {
    href: "/ask",
    icon: MessageCircle,
    title: "Ask a Local",
    description: "Get tips from the community",
    color: "emerald",
  },
  {
    href: "/offers",
    icon: Tag,
    title: "Deals & Offers",
    description: "Special offers from local shops",
    color: "violet",
  },
  {
    href: "/report",
    icon: Users,
    title: "Contribute",
    description: "Report updates, suggest new shops",
    color: "blue",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <Badge variant="info" className="mb-4">
          Community-powered since 2024
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold text-oyster-900 mb-4">
          Welcome to{" "}
          <span className="text-ocean-600">whitstable.shop</span>
        </h1>
        <p className="text-lg text-oyster-600 max-w-2xl mx-auto mb-8">
          Your community guide to Whitstable. Discover local shops, join photo
          competitions, support charities, and connect with locals.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/photos/submit">
            <Button size="lg" leftIcon={<Camera className="h-5 w-5" />}>
              Submit a Photo
            </Button>
          </Link>
          <Link href="/ask">
            <Button size="lg" variant="outline">
              Ask the Community
            </Button>
          </Link>
        </div>
      </section>

      {/* Photo Competition Banner */}
      <section className="mb-12">
        <CompetitionBanner competition={mockCompetition} />
      </section>

      {/* Quick Links Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-oyster-900 mb-6">
          Explore & Engage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Card hoverable className="h-full">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center
                      ${link.color === "ocean" ? "bg-ocean-100 text-ocean-600" : ""}
                      ${link.color === "amber" ? "bg-amber-100 text-amber-600" : ""}
                      ${link.color === "rose" ? "bg-rose-100 text-rose-600" : ""}
                      ${link.color === "emerald" ? "bg-emerald-100 text-emerald-600" : ""}
                      ${link.color === "violet" ? "bg-violet-100 text-violet-600" : ""}
                      ${link.color === "blue" ? "bg-blue-100 text-blue-600" : ""}
                    `}
                  >
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-oyster-900 mb-1">
                      {link.title}
                    </h3>
                    <p className="text-sm text-oyster-600">
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-oyster-400" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-12">
        <Card className="bg-gradient-to-r from-oyster-900 to-oyster-800 text-white border-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-oyster-300 text-sm">Local Shops</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-oyster-300 text-sm">Photos Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">2,000+</div>
              <div className="text-oyster-300 text-sm">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-oyster-300 text-sm">Local Tips</div>
            </div>
          </div>
        </Card>
      </section>

      {/* Trending Section */}
      <section className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Trending Shops */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-oyster-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-ocean-600" />
              Trending This Week
            </h2>
            <Link
              href="/leaderboard"
              className="text-sm text-ocean-600 hover:text-ocean-700 font-medium"
            >
              View all →
            </Link>
          </div>
          <Card>
            <div className="divide-y divide-oyster-100">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="py-3 first:pt-0 last:pb-0 flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center font-bold">
                    {i}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-oyster-900">
                      {["Whitstable Oyster Company", "The Cheese Box", "Frank"][i - 1]}
                    </p>
                    <p className="text-sm text-oyster-500">
                      {["Food & Drink", "Food & Drink", "Retail"][i - 1]}
                    </p>
                  </div>
                  <Badge variant="success" size="sm">
                    ↑{4 - i}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Questions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-oyster-900 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-emerald-600" />
              Recent Questions
            </h2>
            <Link
              href="/ask"
              className="text-sm text-ocean-600 hover:text-ocean-700 font-medium"
            >
              View all →
            </Link>
          </div>
          <Card>
            <div className="divide-y divide-oyster-100">
              {[
                "Best fish and chips near the harbour?",
                "Where can I find vintage clothes?",
                "Dog-friendly cafes with outdoor seating?",
              ].map((q, i) => (
                <div key={i} className="py-3 first:pt-0 last:pb-0">
                  <p className="font-medium text-oyster-900 mb-1">{q}</p>
                  <div className="flex items-center gap-2 text-sm text-oyster-500">
                    <span>{3 - i} answers</span>
                    <span>•</span>
                    <span>{i + 1}h ago</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <Card className="text-center">
          <h2 className="text-2xl font-bold text-oyster-900 mb-2">
            Know something we don&apos;t?
          </h2>
          <p className="text-oyster-600 mb-6 max-w-xl mx-auto">
            Spotted a new shop? Know the real opening hours? Share your local
            knowledge and help keep Whitstable&apos;s directory up to date.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/report">
              <Button>Submit a Report</Button>
            </Link>
            <Link href="/photos/submit">
              <Button variant="outline">Share a Photo</Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
