import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Clock, User, Tag } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Email } from "@shared/schema";

interface EmailDetailModalProps {
  email: Email;
  onClose: () => void;
}

export default function EmailDetailModal({ email, onClose }: EmailDetailModalProps) {
  const [priority, setPriority] = useState(email.priority);
  const [category, setCategory] = useState(email.category);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const updateEmailMutation = useMutation({
    mutationFn: async (updates: Partial<Email>) => {
      const response = await apiRequest("PATCH", `/api/emails/${email.id}`, updates);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/emails"] });
      toast({
        title: "Success",
        description: "Email updated successfully",
      });
      onClose();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update email",
        variant: "destructive",
      });
    },
  });

  const handleSave = () => {
    updateEmailMutation.mutate({
      priority,
      category,
    });
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

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Email Details</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto">
          <div className="space-y-6">
            {/* Email Header */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center space-x-3 mb-3">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{email.sender}</p>
                  <p className="text-xs text-gray-500">Sender</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{email.subject}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {new Date(email.createdAt).toLocaleString()}
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getPriorityColor(email.priority)}>
                    {email.priority.charAt(0).toUpperCase() + email.priority.slice(1)} Priority
                  </Badge>
                  <Badge className={getCategoryColor(email.category)}>
                    {email.category.charAt(0).toUpperCase() + email.category.slice(1)}
                  </Badge>
                  {email.status === "processed" && (
                    <Badge className="bg-success-100 text-success-800">Processed</Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Email Content */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Content</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{email.content}</p>
              </div>
            </div>

            {/* Update Controls */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Update Email</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">Priority</label>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High Priority</SelectItem>
                      <SelectItem value="medium">Medium Priority</SelectItem>
                      <SelectItem value="low">Low Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">Category</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="analytics">Analytics</SelectItem>
                      <SelectItem value="reports">Reports</SelectItem>
                      <SelectItem value="optimization">Optimization</SelectItem>
                      <SelectItem value="presentation">Presentation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">Status</label>
                  <Select value={email.status} onValueChange={(value) => setPriority(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processed">Processed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={updateEmailMutation.isPending}
                  className="bg-primary-500 hover:bg-primary-600 text-white"
                >
                  {updateEmailMutation.isPending ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
