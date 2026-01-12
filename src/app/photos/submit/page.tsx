import { Card } from "@/components/ui";
import { PhotoSubmitForm } from "@/components/photos";
import { getCompetitionMonth } from "@/lib/utils";

// Mock shops data - in production this would come from Supabase
const mockShops = [
  { id: "1", name: "Wheeler's Oyster Bar" },
  { id: "2", name: "The Cheese Box" },
  { id: "3", name: "Whitstable Oyster Company" },
  { id: "4", name: "The Old Neptune" },
  { id: "5", name: "JoJo's" },
];

export const metadata = {
  title: "Submit Photo",
  description: "Share your Whitstable photos with the community",
};

export default function SubmitPhotoPage() {
  const competitionMonth = getCompetitionMonth();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-oyster-900">Submit a Photo</h1>
        <p className="text-oyster-600 mt-2">
          Share your favourite Whitstable moment with the community. Your photo
          will be entered into this month&apos;s competition automatically.
        </p>
      </div>

      {/* Form Card */}
      <Card>
        <PhotoSubmitForm
          shops={mockShops}
          competitionMonth={competitionMonth}
        />
      </Card>
    </div>
  );
}
