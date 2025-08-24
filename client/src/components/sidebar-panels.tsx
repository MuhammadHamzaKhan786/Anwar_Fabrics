import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus, Download, Settings, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function SidebarPanels() {
  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["/api/analytics/categories"],
  });

  const { data: analytics, isLoading: analyticsLoading } = useQuery({
    queryKey: ["/api/analytics"],
  });

  // Provide default values to prevent TypeScript errors
  const defaultCategories = {
    analytics: 0,
    reports: 0,
    optimization: 0,
    presentation: 0,
    other: 0
  };

  // Type the categories data properly
  const typedCategories = categories as typeof defaultCategories || defaultCategories;

  const categoryColors = [
    { name: "analytics", color: "bg-blue-500", count: typedCategories.analytics },
    { name: "reports", color: "bg-green-500", count: typedCategories.reports },
    { name: "optimization", color: "bg-purple-500", count: typedCategories.optimization },
    { name: "presentation", color: "bg-yellow-500", count: typedCategories.presentation },
    { name: "other", color: "bg-gray-400", count: typedCategories.other },
  ];

  return (
    <div className="space-y-6">
      {/* Categories Distribution */}
      <Card className="shadow-sm border border-gray-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories Distribution</h3>
          {categoriesLoading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full" />
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {categoryColors.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 ${category.color} rounded-full mr-3`}></div>
                    <span className="text-sm text-gray-700 capitalize">{category.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{category.count}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-sm border border-gray-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-between bg-primary-50 border-primary-200 hover:bg-primary-100 text-primary-700"
            >
              <div className="flex items-center">
                <Plus className="h-4 w-4 mr-3" />
                <span className="text-sm font-medium">Create New Rule</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="w-full justify-between"
            >
              <div className="flex items-center">
                <Download className="h-4 w-4 mr-3" />
                <span className="text-sm font-medium">Export Analytics</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="w-full justify-between"
            >
              <div className="flex items-center">
                <Settings className="h-4 w-4 mr-3" />
                <span className="text-sm font-medium">Manage Rules</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card className="shadow-sm border border-gray-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Impact</h3>
          {analyticsLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Automation Accuracy</span>
                  <span className="text-sm font-medium text-gray-900">94.2%</span>
                </div>
                <Progress value={94.2} className="h-2" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Time Saved</span>
                  <span className="text-sm font-medium text-gray-900">16.7h/week</span>
                </div>
                <Progress value={83.5} className="h-2" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Response Quality</span>
                  <span className="text-sm font-medium text-gray-900">91.8%</span>
                </div>
                <Progress value={91.8} className="h-2" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
