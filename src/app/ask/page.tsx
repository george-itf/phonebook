import Link from "next/link";
import { HelpCircle, MessageCircle, CheckCircle, Search } from "lucide-react";
import { Button, Card, Badge, Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";
import { QuestionCard, AskQuestionForm } from "@/components/questions";
import type { Question, Profile } from "@/types/database";

// Mock questions data
const mockQuestions: (Question & { profiles: Pick<Profile, 'display_name' | 'avatar_url'> | null })[] = [
  {
    id: "1",
    user_id: "user1",
    question: "Best fish and chips near the harbour?",
    context: "Visiting for a day trip and want to try the local fish and chips. Looking for somewhere with outdoor seating if possible!",
    status: "answered",
    answer_count: 5,
    view_count: 234,
    created_at: "2025-01-10T12:00:00Z",
    profiles: { display_name: "Day Tripper", avatar_url: null },
  },
  {
    id: "2",
    user_id: "user2",
    question: "Where can I find vintage clothes in Whitstable?",
    context: "Love hunting for vintage finds. Are there any good charity shops or vintage stores?",
    status: "answered",
    answer_count: 3,
    view_count: 156,
    created_at: "2025-01-09T15:30:00Z",
    profiles: { display_name: "Vintage Lover", avatar_url: null },
  },
  {
    id: "3",
    user_id: "user3",
    question: "Dog-friendly cafes with outdoor seating?",
    context: "Visiting with our labrador. Looking for cafes where dogs are welcome, ideally with some outdoor space.",
    status: "open",
    answer_count: 2,
    view_count: 89,
    created_at: "2025-01-11T09:15:00Z",
    profiles: { display_name: "Dog Parent", avatar_url: null },
  },
  {
    id: "4",
    user_id: "user4",
    question: "Is there parking near the beach?",
    context: "Coming by car for a beach day. Where's the best place to park?",
    status: "answered",
    answer_count: 4,
    view_count: 445,
    created_at: "2025-01-08T10:00:00Z",
    profiles: { display_name: "Weekend Visitor", avatar_url: null },
  },
  {
    id: "5",
    user_id: "user5",
    question: "What's the best time to visit the oyster beds?",
    context: null,
    status: "open",
    answer_count: 0,
    view_count: 34,
    created_at: "2025-01-12T08:00:00Z",
    profiles: { display_name: "Oyster Curious", avatar_url: null },
  },
  {
    id: "6",
    user_id: "user6",
    question: "Romantic restaurants for anniversary dinner?",
    context: "Celebrating 10 years! Looking for somewhere special with great food and atmosphere.",
    status: "answered",
    answer_count: 6,
    view_count: 178,
    created_at: "2025-01-07T18:00:00Z",
    profiles: { display_name: "Celebrating Soon", avatar_url: null },
  },
];

export const metadata = {
  title: "Ask a Local",
  description: "Get tips and answers from the Whitstable community",
};

export default function AskPage() {
  const openQuestions = mockQuestions.filter(q => q.status === 'open');
  const answeredQuestions = mockQuestions.filter(q => q.status === 'answered');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
          <HelpCircle className="h-6 w-6 text-emerald-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-oyster-900">Ask a Local</h1>
          <p className="text-oyster-600">
            Get tips and answers from the community
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-oyster-400" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-oyster-300 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
              />
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Questions</TabsTrigger>
              <TabsTrigger value="open">
                Open ({openQuestions.length})
              </TabsTrigger>
              <TabsTrigger value="answered">Answered</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-4">
                {mockQuestions.map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="open">
              <div className="space-y-4">
                {openQuestions.length > 0 ? (
                  openQuestions.map((question) => (
                    <QuestionCard key={question.id} question={question} />
                  ))
                ) : (
                  <Card className="text-center py-8">
                    <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                    <p className="text-oyster-600">
                      All questions have been answered!
                    </p>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="answered">
              <div className="space-y-4">
                {answeredQuestions.map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Ask Form */}
          <Card>
            <h2 className="font-semibold text-oyster-900 mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-emerald-600" />
              Ask a Question
            </h2>
            <AskQuestionForm />
          </Card>

          {/* Stats */}
          <Card>
            <h3 className="font-semibold text-oyster-900 mb-4">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-oyster-100">
                <span className="text-oyster-600">Questions asked</span>
                <span className="font-medium text-oyster-900">
                  {mockQuestions.length}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-oyster-100">
                <span className="text-oyster-600">Answered</span>
                <span className="font-medium text-oyster-900">
                  {answeredQuestions.length}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-oyster-600">Waiting for answers</span>
                <span className="font-medium text-emerald-600">
                  {openQuestions.length}
                </span>
              </div>
            </div>
          </Card>

          {/* Become a Local */}
          <Card className="bg-emerald-50 border-emerald-200">
            <h3 className="font-semibold text-oyster-900 mb-2">
              Know Whitstable well?
            </h3>
            <p className="text-sm text-oyster-600 mb-4">
              Help visitors by answering their questions. Helpful answers earn
              you badges and community points!
            </p>
            <Badge variant="success">
              <CheckCircle className="h-3 w-3 mr-1" />
              Helpful Local Badge
            </Badge>
          </Card>
        </div>
      </div>
    </div>
  );
}
