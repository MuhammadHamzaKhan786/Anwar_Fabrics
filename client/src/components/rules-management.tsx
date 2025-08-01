import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Rule } from "@shared/schema";

export default function RulesManagement() {
  const [editingRule, setEditingRule] = useState<Rule | null>(null);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: rules, isLoading } = useQuery({
    queryKey: ["/api/rules"],
  });

  const deleteRuleMutation = useMutation({
    mutationFn: async (ruleId: string) => {
      await apiRequest("DELETE", `/api/rules/${ruleId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/rules"] });
      toast({
        title: "Success",
        description: "Rule deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete rule",
        variant: "destructive",
      });
    },
  });

  const handleDeleteRule = (ruleId: string) => {
    if (confirm("Are you sure you want to delete this rule?")) {
      deleteRuleMutation.mutate(ruleId);
    }
  };

  const getStatusColor = (isActive: boolean) => {
    return isActive ? "bg-success-100 text-success-800" : "bg-gray-100 text-gray-800";
  };

  const getActionColor = (action: string) => {
    if (action.includes("High Priority")) return "bg-error-100 text-error-800";
    if (action.includes("Client")) return "bg-blue-100 text-blue-800";
    if (action.includes("Report")) return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  };

  if (isLoading) {
    return (
      <Card className="mt-8 shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <Skeleton className="h-8 w-48" />
        </div>
        <div className="p-6">
          <Skeleton className="h-64 w-full" />
        </div>
      </Card>
    );
  }

  return (
    <Card className="mt-8 shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Automation Rules</h3>
          <Button className="bg-primary-500 hover:bg-primary-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Rule
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rule Name
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Condition
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Success Rate
              </TableHead>
              <TableHead className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rules?.map((rule: Rule) => (
              <TableRow key={rule.id} className="hover:bg-gray-50">
                <TableCell>
                  <div className="text-sm font-medium text-gray-900">{rule.name}</div>
                  <div className="text-sm text-gray-500">{rule.description}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-900 font-mono bg-gray-100 px-2 py-1 rounded max-w-xs">
                    {rule.condition}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getActionColor(rule.action)}>
                    {rule.action}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(rule.isActive)}>
                    {rule.isActive ? "Active" : "Paused"}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-gray-900">
                  {rule.successRate}%
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary-600 hover:text-primary-900"
                      onClick={() => setEditingRule(rule)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-gray-600"
                      onClick={() => handleDeleteRule(rule.id)}
                      disabled={deleteRuleMutation.isPending}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
