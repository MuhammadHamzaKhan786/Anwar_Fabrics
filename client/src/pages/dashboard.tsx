import StatsOverview from "@/components/stats-overview";
import EmailList from "@/components/email-list";
import SidebarPanels from "@/components/sidebar-panels";
import AnalyticsCharts from "@/components/analytics-charts";
import RulesManagement from "@/components/rules-management";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Email Automation Dashboard</h2>
        <p className="text-gray-600">Organize and categorize incoming emails with intelligent priority detection</p>
      </div>

      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <EmailList />
        </div>
        <div>
          <SidebarPanels />
        </div>
      </div>

      <AnalyticsCharts />
      <RulesManagement />
    </div>
  );
}
