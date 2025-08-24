import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import EmailDetailModal from "./email-detail-modal";
import type { Email } from "@shared/schema";

interface EmailListProps {
  showFullView?: boolean;
}

export default function EmailList({ showFullView = false }: EmailListProps) {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const queryClient = useQueryClient();

  const { data: emails, isLoading, refetch } = useQuery({
    queryKey: ["/api/emails", { priority: priorityFilter !== "all" ? priorityFilter : undefined }],
  });

  const handleRefresh = () => {
    refetch();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-error-100 text-error-800";
      case "medium":
        return "bg-warning-100 text-warning-800";
      case "low":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "analytics":
        return "bg-blue-100 text-blue-800";
      case "reports":
        return "bg-green-100 text-green-800";
      case "optimization":
        return "bg-purple-100 text-purple-800";
      case "presentation":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getInitials = (email: string) => {
    return email.split('@')[0].split('.').map(part => part[0]?.toUpperCase()).join('').slice(0, 2);
  };

  const getGradientColor = (email: string) => {
    const colors = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-teal-600", 
      "from-orange-500 to-red-600",
      "from-indigo-500 to-blue-600",
      "from-pink-500 to-rose-600",
      "from-violet-500 to-purple-600"
    ];
    const index = email.length % colors.length;
    return colors[index];
  };

  if (isLoading) {
    return (
      <Card className="shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <Skeleton className="h-8 w-48" />
        </div>
        <div className="divide-y divide-gray-200">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="px-6 py-4">
              <Skeleton className="h-16 w-full" />
            </div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <>
      <Card className="shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {showFullView ? "All Emails" : "Recent Emails"}
            </h3>
            <div className="flex space-x-2">
              <Button
                onClick={handleRefresh}
                size="sm"
                className="bg-primary-500 hover:bg-primary-600 text-white"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Refresh
              </Button>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Priorities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {emails && Array.isArray(emails) ? emails.map((email: Email) => (
            <div
              key={email.id}
              className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => setSelectedEmail(email)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${getGradientColor(email.sender)} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-sm font-medium">{getInitials(email.sender)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{email.sender}</p>
                    <p className="text-sm text-gray-600 truncate max-w-md">{email.subject}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(email.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={getPriorityColor(email.priority)}>
                    {email.priority.charAt(0).toUpperCase() + email.priority.slice(1)} Priority
                  </Badge>
                  <Badge className={getCategoryColor(email.category)}>
                    {email.category.charAt(0).toUpperCase() + email.category.slice(1)}
                  </Badge>
                  <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="px-6 py-8 text-center text-gray-500">
              No emails available
            </div>
          )}
        </div>

        {!showFullView && (
          <div className="px-6 py-4 border-t border-gray-200">
            <Button
              variant="ghost"
              className="w-full text-primary-500 hover:text-primary-600"
            >
              Load More Emails
            </Button>
          </div>
        )}
      </Card>

      {selectedEmail && (
        <EmailDetailModal
          email={selectedEmail}
          onClose={() => setSelectedEmail(null)}
        />
      )}
    </>
  );
}
