import Link from "next/link";
import { Camera, Gift, Calendar, Clock, Store, Award } from "lucide-react";
import { Button, Card, Badge, Countdown } from "@/components/ui";
import { PhotoGrid } from "@/components/photos";
import type { PhotoEntryWithUser, PhotoCompetition } from "@/types/database";

// Mock data
const mockCompetition: PhotoCompetition = {
  id: "1",
  month: "2025-01-01",
  title: "January 2025: Winter Light",
  theme: "Capture the magical winter light in Whitstable",
  prize_description: "£50 voucher for Wheeler's Oyster Bar",
  prize_shop_id: "shop1",
  prize_value: "£50",
  submissions_open: "2025-01-01T00:00:00Z",
  submissions_close: "2025-01-21T23:59:59Z",
  voting_open: "2025-01-22T00:00:00Z",
  voting_close: "2025-01-28T23:59:59Z",
  winner_id: null,
  runner_up_id: null,
  status: "submissions",
  created_at: "2025-01-01T00:00:00Z",
};

const mockPrizeSponsor = {
  name: "Wheeler's Oyster Bar",
  image_url: null,
};

const mockPhotos: PhotoEntryWithUser[] = [
  {
    id: "1",
    user_id: "user1",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    title: "Sunset over the Harbour",
    description: "Golden hour at Whitstable Harbour",
    location: "Whitstable Harbour",
    shop_id: null,
    competition_month: "2025-01-01",
    status: "approved",
    vote_count: 42,
    camera_info: "iPhone 15 Pro",
    created_at: "2025-01-10T14:30:00Z",
    profiles: { display_name: "Sarah M.", avatar_url: null },
    shops: null,
  },
  {
    id: "2",
    user_id: "user2",
    image_url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    title: "Winter Morning Light",
    description: "Early morning frost on Tankerton Slopes",
    location: "Tankerton Slopes",
    shop_id: null,
    competition_month: "2025-01-01",
    status: "approved",
    vote_count: 38,
    camera_info: "Canon EOS R5",
    created_at: "2025-01-09T08:15:00Z",
    profiles: { display_name: "James K.", avatar_url: null },
    shops: null,
  },
  {
    id: "3",
    user_id: "user3",
    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    title: "The Old Neptune",
    description: "Iconic pub on the beach",
    location: "Marine Terrace",
    shop_id: null,
    competition_month: "2025-01-01",
    status: "approved",
    vote_count: 35,
    camera_info: null,
    created_at: "2025-01-08T16:45:00Z",
    profiles: { display_name: "Local Lens", avatar_url: null },
    shops: null,
  },
];

export const metadata = {
  title: "Photo Competition",
  description: "Enter the monthly photo competition and win prizes from local shops",
};

export default function CompetitionPage() {
  const isSubmissionsOpen = mockCompetition.status === "submissions";
  const isVotingOpen = mockCompetition.status === "voting";
  const deadline = isSubmissionsOpen
    ? mockCompetition.submissions_close
    : isVotingOpen
    ? mockCompetition.voting_close
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-ocean-500 via-ocean-600 to-ocean-700 rounded-2xl text-white p-8 md:p-12 mb-8">
        <Badge variant="outline" className="border-white/30 text-white mb-4">
          <Camera className="h-3 w-3 mr-1" />
          {isSubmissionsOpen ? "Submissions Open" : isVotingOpen ? "Voting Open" : mockCompetition.status}
        </Badge>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {mockCompetition.title}
        </h1>

        {mockCompetition.theme && (
          <p className="text-ocean-100 text-lg mb-6">
            Theme: {mockCompetition.theme}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Prize */}
          <div className="bg-white/10 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Gift className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-ocean-100 mb-1">Prize</p>
                <p className="font-semibold text-lg">
                  {mockCompetition.prize_description}
                </p>
                {mockCompetition.prize_value && (
                  <p className="text-sm text-ocean-200">
                    Value: {mockCompetition.prize_value}
                  </p>
                )}
                {mockPrizeSponsor && (
                  <p className="text-sm text-ocean-200 flex items-center gap-1 mt-2">
                    <Store className="h-4 w-4" />
                    Donated by {mockPrizeSponsor.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white/10 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-ocean-100 mb-2">Timeline</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isSubmissionsOpen ? 'bg-green-400' : 'bg-white/40'}`} />
                    <span>Submissions: Jan 1 - Jan 21</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isVotingOpen ? 'bg-green-400' : 'bg-white/40'}`} />
                    <span>Voting: Jan 22 - Jan 28</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <span>Winner announced: Jan 29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown & CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {deadline && (
            <div>
              <p className="text-sm text-ocean-100 mb-2 flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {isSubmissionsOpen ? "Submit by" : "Vote by"}
              </p>
              <Countdown targetDate={deadline} />
            </div>
          )}

          <div className="flex gap-3">
            {isSubmissionsOpen && (
              <Link href="/photos/submit">
                <Button variant="secondary" size="lg" leftIcon={<Camera className="h-5 w-5" />}>
                  Submit Your Photo
                </Button>
              </Link>
            )}
            <Link href="/photos/winners">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
                leftIcon={<Award className="h-5 w-5" />}
              >
                Past Winners
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <Card className="mb-8">
        <h2 className="text-lg font-semibold text-oyster-900 mb-4">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <p className="font-medium text-oyster-900">Submit</p>
              <p className="text-sm text-oyster-600">
                Upload your best Whitstable photo during the submission period
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <p className="font-medium text-oyster-900">Vote</p>
              <p className="text-sm text-oyster-600">
                Browse entries and vote for your favourites
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <p className="font-medium text-oyster-900">Win</p>
              <p className="text-sm text-oyster-600">
                The top-voted photo wins the prize!
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Entries */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-oyster-900">
            Competition Entries
          </h2>
          <Badge variant="info">{mockPhotos.length} entries</Badge>
        </div>

        <PhotoGrid
          photos={mockPhotos}
          showVoteButton={isVotingOpen}
          emptyMessage="No entries yet. Be the first to submit!"
        />
      </div>
    </div>
  );
}
