import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata = {
  title: 'Join the Waitlist | MeetingCost',
  description: 'Get early access when calendar integration launches. Be the first to see your real meeting data.',
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-heading tracking-tight text-gray-900">
            Get Early Access
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We are building calendar integration — connect Google Calendar or Outlook and get
            real meeting insights for your team automatically.
          </p>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Join the waitlist</h2>
          <p className="text-sm text-gray-600 mb-4">
            One email when we launch. No spam. No selling your data.
          </p>
          <WaitlistForm source="waitlist-page" />
        </div>

        <div className="mt-10 space-y-6">
          <h3 className="text-sm font-semibold text-gray-900">What you get with calendar integration:</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Auto-detect meetings', desc: 'We read your calendar (read-only) and identify all meetings automatically.' },
              { title: 'Team investment scores', desc: 'See which meetings create value and which need restructuring.' },
              { title: 'Weekly insights email', desc: 'Your team\'s meeting health report delivered every Monday.' },
              { title: 'Meeting recommendations', desc: 'Data-driven suggestions: which meetings to keep, restructure, or make async.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400">
            While you wait, try our free tools:
          </p>
          <div className="flex gap-4 justify-center mt-2">
            <a href="/calculator" className="text-sm text-brand-600 hover:underline">Cost Calculator</a>
            <a href="/score" className="text-sm text-brand-600 hover:underline">Score a Meeting</a>
            <a href="/insights" className="text-sm text-brand-600 hover:underline">Sample Dashboard</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
