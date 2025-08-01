import RulesManagement from "@/components/rules-management";

export default function Settings() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600">Configure automation rules and system preferences</p>
      </div>

      <RulesManagement />
    </div>
  );
}
