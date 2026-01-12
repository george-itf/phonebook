import { Card, Badge } from "@/components/ui";
import { ReportForm } from "@/components/reports";
import { Flag, CheckCircle, Users } from "lucide-react";

// Mock shops data
const mockShops = [
  { id: "1", name: "Wheeler's Oyster Bar" },
  { id: "2", name: "The Cheese Box" },
  { id: "3", name: "Whitstable Oyster Company" },
  { id: "4", name: "The Old Neptune" },
  { id: "5", name: "JoJo's" },
  { id: "6", name: "Frank" },
  { id: "7", name: "Samphire" },
  { id: "8", name: "The Sportsman" },
];

export const metadata = {
  title: "Submit a Report",
  description: "Help keep Whitstable's directory accurate and up-to-date",
};

export default function ReportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center">
          <Flag className="h-6 w-6 text-ocean-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-oyster-900">Submit a Report</h1>
          <p className="text-oyster-600">
            Help keep Whitstable&apos;s directory accurate
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <Card className="text-center !p-4">
          <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <p className="font-medium text-oyster-900">Quick Review</p>
          <p className="text-xs text-oyster-500">Usually within 24 hours</p>
        </Card>
        <Card className="text-center !p-4">
          <Users className="h-8 w-8 text-ocean-500 mx-auto mb-2" />
          <p className="font-medium text-oyster-900">Earn Points</p>
          <p className="text-xs text-oyster-500">Helpful reports add to your score</p>
        </Card>
        <Card className="text-center !p-4">
          <Badge variant="success" className="mx-auto mb-2">
            Contributor
          </Badge>
          <p className="font-medium text-oyster-900">Unlock Badges</p>
          <p className="text-xs text-oyster-500">3+ helpful reports</p>
        </Card>
      </div>

      {/* Form */}
      <Card>
        <ReportForm shops={mockShops} />
      </Card>
    </div>
  );
}
