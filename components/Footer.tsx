import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MeetingCost by ZeroOrigine. Better meetings, not fewer meetings.
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:justify-end">
          <Link href="/calculator" className="text-sm text-gray-500 hover:text-gray-700">Calculator</Link>
          <Link href="/score" className="text-sm text-gray-500 hover:text-gray-700">Score</Link>
          <Link href="/insights" className="text-sm text-gray-500 hover:text-gray-700">Insights</Link>
          <Link href="/waitlist" className="text-sm text-gray-500 hover:text-gray-700">Waitlist</Link>
          <Link href="/about" className="text-sm text-gray-500 hover:text-gray-700">Born autonomously at ZeroOrigine</Link>
        </div>
      </div>
    </footer>
  );
}
