import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart } from "lucide-react";

export default function AnalyticsCharts() {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-sm border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Email Volume Trends</h3>
            <Select defaultValue="7days">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 font-medium">Email Volume Chart</p>
              <p className="text-xs text-gray-400 mt-1">Chart visualization would be implemented here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Priority Distribution</h3>
            <Button variant="ghost" size="sm" className="text-primary-500 hover:text-primary-600">
              View Details
            </Button>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 font-medium">Priority Distribution Chart</p>
              <p className="text-xs text-gray-400 mt-1">Doughnut chart visualization would be implemented here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
