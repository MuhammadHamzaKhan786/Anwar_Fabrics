import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, AlertTriangle, CheckCircle, Clock, TrendingUp, TrendingDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function StatsOverview() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["/api/analytics/stats"],
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="p-6">
            <Skeleton className="h-20 w-full" />
          </Card>
        ))}
      </div>
    );
  }

  // Provide default values to prevent TypeScript errors
  const defaultStats = {
    totalEmails: 0,
    highPriority: 0,
    processed: 0,
    avgResponseTime: "0h"
  };

  // Type the stats data properly
  const typedStats = stats as typeof defaultStats || defaultStats;

  const statCards = [
    {
      title: "Total Emails",
      value: typedStats.totalEmails,
      icon: Mail,
      trend: "+12%",
      trendUp: true,
      description: "from last week",
      color: "primary"
    },
    {
      title: "High Priority",
      value: typedStats.highPriority,
      icon: AlertTriangle,
      trend: "+8%",
      trendUp: true,
      description: "from last week",
      color: "error"
    },
    {
      title: "Processed",
      value: typedStats.processed,
      icon: CheckCircle,
      trend: "+15%",
      trendUp: true,
      description: "from last week",
      color: "success"
    },
    {
      title: "Avg Response Time",
      value: typedStats.avgResponseTime,
      icon: Clock,
      trend: "-23%",
      trendUp: false,
      description: "faster",
      color: "warning"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statCards.map((stat, index) => (
        <Card key={index} className="shadow-sm border border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${
                stat.color === 'primary' ? 'bg-primary-100' :
                stat.color === 'error' ? 'bg-error-100' :
                stat.color === 'success' ? 'bg-success-100' :
                'bg-warning-100'
              }`}>
                <stat.icon className={`h-5 w-5 ${
                  stat.color === 'primary' ? 'text-primary-500' :
                  stat.color === 'error' ? 'text-error-500' :
                  stat.color === 'success' ? 'text-success-500' :
                  'text-warning-500'
                }`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value.toLocaleString()}</p>
                <p className={`text-sm flex items-center ${
                  stat.trendUp ? 'text-success-500' : 'text-error-500'
                }`}>
                  {stat.trendUp ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                  <span>{stat.trend} {stat.description}</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
