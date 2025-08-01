import EmailList from "@/components/email-list";

export default function Emails() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Email Management</h2>
        <p className="text-gray-600">View and manage all incoming emails</p>
      </div>

      <EmailList showFullView />
    </div>
  );
}
