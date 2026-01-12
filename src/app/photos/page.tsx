import { Suspense } from "react";
import Link from "next/link";
import { Camera, Filter, Award } from "lucide-react";
import { Button, Card, Badge, Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";
import { PhotoGrid, CompetitionBanner } from "@/components/photos";
import type { PhotoEntryWithUser, PhotoCompetition } from "@/types/database";

// Mock data - in production this would come from Supabase
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
  {
    id: "4",
    user_id: "user4",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    title: "Oyster Beds at Low Tide",
    description: null,
    location: "Whitstable Oyster Beds",
    shop_id: null,
    competition_month: "2025-01-01",
    status: "approved",
    vote_count: 28,
    camera_info: "Fujifilm X-T5",
    created_at: "2025-01-07T11:20:00Z",
    profiles: { display_name: "Beach Walker", avatar_url: null },
    shops: null,
  },
];

const mockCompetition: PhotoCompetition = {
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
  status: "submissions",
  created_at: "2025-01-01T00:00:00Z",
};

export const metadata = {
  title: "Photo Gallery",
  description: "Explore beautiful photos of Whitstable shared by the community",
};

export default function PhotosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-oyster-900">Photo Gallery</h1>
          <p className="text-oyster-600 mt-1">
            Beautiful moments captured by the community
          </p>
        </div>
        <Link href="/photos/submit">
          <Button leftIcon={<Camera className="h-4 w-4" />}>
            Submit Photo
          </Button>
        </Link>
      </div>

      {/* Competition Banner */}
      <div className="mb-8">
        <CompetitionBanner competition={mockCompetition} variant="compact" />
      </div>

      {/* Filters & Gallery */}
      <Tabs defaultValue="thisMonth">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <TabsList>
            <TabsTrigger value="thisMonth">This Month</TabsTrigger>
            <TabsTrigger value="allTime">All Time</TabsTrigger>
            <TabsTrigger value="winners">Winners</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" leftIcon={<Filter className="h-4 w-4" />}>
              Sort: Most Voted
            </Button>
          </div>
        </div>

        <TabsContent value="thisMonth">
          <PhotoGrid photos={mockPhotos} showVoteButton />
        </TabsContent>

        <TabsContent value="allTime">
          <PhotoGrid photos={mockPhotos} showVoteButton />
        </TabsContent>

        <TabsContent value="winners">
          <div className="text-center py-12">
            <Award className="h-12 w-12 text-oyster-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-oyster-900 mb-2">
              No winners yet
            </h3>
            <p className="text-oyster-600 max-w-md mx-auto">
              Check back at the end of the month to see the winning photos from our
              community competition.
            </p>
            <Link href="/photos/winners" className="inline-block mt-4">
              <Button variant="outline" size="sm">
                View Past Winners
              </Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>

      {/* Load More */}
      <div className="mt-8 text-center">
        <Button variant="outline">Load More Photos</Button>
      </div>
    </div>
  );
}
