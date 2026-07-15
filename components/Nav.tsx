import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold font-heading text-gray-900">
          MeetingCost
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/calculator" className="text-sm text-gray-600 hover:text-gray-900">
            Calculator
          </Link>
          <Link href="/score" className="text-sm text-gray-600 hover:text-gray-900">
            Score
          </Link>
          <Link href="/insights" className="text-sm text-gray-600 hover:text-gray-900">
            Insights
          </Link>
        <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
          About
        </Link>
          <Link href="/waitlist" className="btn-primary !py-2 !px-4 !text-xs">
            Get Early Access
          </Link>
        </div>
      </div>
    </nav>
  );
}
