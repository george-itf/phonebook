import Link from "next/link";
import { Trophy, Calendar, ChevronLeft, Heart } from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";
import { WinnerCard } from "@/components/photos";
import type { PhotoEntryWithUser, PhotoCompetition } from "@/types/database";

// Mock past winners data
const mockWinners = [
  {
    competition: {
      id: "dec24",
      month: "2024-12-01",
      title: "December 2024: Festive Whitstable",
      theme: "Christmas spirit in our seaside town",
      prize_description: "£40 voucher for The Cheese Box",
      prize_shop_id: null,
      prize_value: "£40",
      submissions_open: "2024-12-01T00:00:00Z",
      submissions_close: "2024-12-21T23:59:59Z",
      voting_open: "2024-12-22T00:00:00Z",
      voting_close: "2024-12-28T23:59:59Z",
      winner_id: "w1",
      runner_up_id: "r1",
      status: "complete" as const,
      created_at: "2024-12-01T00:00:00Z",
    },
    winner: {
      id: "w1",
      user_id: "user1",
      image_url: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800",
      title: "Christmas Lights on Harbour Street",
      description: "The festive decorations bring so much warmth",
      location: "Harbour Street",
      shop_id: null,
      competition_month: "2024-12-01",
      status: "winner" as const,
      vote_count: 89,
      camera_info: "Sony A7III",
      created_at: "2024-12-15T19:30:00Z",
      profiles: { display_name: "Emma T.", avatar_url: null },
      shops: null,
    },
    runner_up: {
      id: "r1",
      user_id: "user2",
      image_url: "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=800",
      title: "Frosty Morning on the Beach",
      description: null,
      location: "West Beach",
      shop_id: null,
      competition_month: "2024-12-01",
      status: "runner_up" as const,
      vote_count: 76,
      camera_info: null,
      created_at: "2024-12-10T08:15:00Z",
      profiles: { display_name: "Tom H.", avatar_url: null },
      shops: null,
    },
  },
  {
    competition: {
      id: "nov24",
      month: "2024-11-01",
      title: "November 2024: Autumn Colours",
      theme: "Fall in love with Whitstable's autumn palette",
      prize_description: "£35 voucher for JoJo's",
      prize_shop_id: null,
      prize_value: "£35",
      submissions_open: "2024-11-01T00:00:00Z",
      submissions_close: "2024-11-21T23:59:59Z",
      voting_open: "2024-11-22T00:00:00Z",
      voting_close: "2024-11-28T23:59:59Z",
      winner_id: "w2",
      runner_up_id: "r2",
      status: "complete" as const,
      created_at: "2024-11-01T00:00:00Z",
    },
    winner: {
      id: "w2",
      user_id: "user3",
      image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      title: "Golden Hour at the Slopes",
      description: "The trees were glowing in the late afternoon sun",
      location: "Tankerton Slopes",
      shop_id: null,
      competition_month: "2024-11-01",
      status: "winner" as const,
      vote_count: 95,
      camera_info: "Canon EOS R5",
      created_at: "2024-11-12T16:45:00Z",
      profiles: { display_name: "Photography Pro", avatar_url: null },
      shops: null,
    },
    runner_up: {
      id: "r2",
      user_id: "user4",
      image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      title: "Falling Leaves",
      description: null,
      location: "Castle Gardens",
      shop_id: null,
      competition_month: "2024-11-01",
      status: "runner_up" as const,
      vote_count: 82,
      camera_info: "iPhone 14 Pro",
      created_at: "2024-11-08T14:20:00Z",
      profiles: { display_name: "Nature Lover", avatar_url: null },
      shops: null,
    },
  },
];

export const metadata = {
  title: "Past Winners",
  description: "Hall of fame - see the winning photos from past competitions",
};

export default function WinnersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/photos">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Gallery
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
          <Trophy className="h-6 w-6 text-amber-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-oyster-900">Hall of Fame</h1>
          <p className="text-oyster-600">
            Celebrating our community&apos;s best photographers
          </p>
        </div>
      </div>

      {/* Winners by Month */}
      <div className="space-y-12">
        {mockWinners.map(({ competition, winner, runner_up }) => (
          <section key={competition.id}>
            {/* Month Header */}
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline" className="text-sm">
                <Calendar className="h-3 w-3 mr-1" />
                {competition.title}
              </Badge>
              {competition.theme && (
                <span className="text-sm text-oyster-500">
                  Theme: {competition.theme}
                </span>
              )}
            </div>

            {/* Winner & Runner Up */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Winner */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span className="font-semibold text-oyster-900">Winner</span>
                </div>
                <WinnerCard photo={winner} competition={competition} />
              </div>

              {/* Runner Up */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="h-5 w-5 text-oyster-400" />
                  <span className="font-semibold text-oyster-900">Runner Up</span>
                </div>
                <Card hoverable className="h-full">
                  <div className="flex gap-4">
                    <div
                      className="w-24 h-24 flex-shrink-0 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${runner_up.image_url})` }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-oyster-900 truncate">
                        {runner_up.title}
                      </h3>
                      <p className="text-sm text-oyster-600">
                        by {runner_up.profiles?.display_name || "Anonymous"}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-oyster-500">
                        <Heart className="h-4 w-4" />
                        {runner_up.vote_count} votes
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12">
        <Card className="text-center">
          <Trophy className="h-12 w-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-oyster-900 mb-2">
            Want to be featured here?
          </h2>
          <p className="text-oyster-600 mb-6 max-w-md mx-auto">
            Enter this month&apos;s competition for a chance to win prizes and
            have your photo featured in our hall of fame.
          </p>
          <Link href="/photos/competition">
            <Button>View Current Competition</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
