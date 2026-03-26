import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaitlistForm from '@/components/WaitlistForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold font-heading tracking-tight text-gray-900 sm:text-6xl">
          Measure What Your
          <br />
          <span className="text-brand-600">Meetings Create</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Not every meeting is a waste. But how do you know which ones matter?
          Calculate costs, score ROI, and track what your meetings actually produce.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/calculator" className="btn-primary text-base px-8 py-4">
            Calculate Your First Meeting
          </Link>
          <Link href="/insights" className="btn-secondary text-base px-8 py-4">
            See Sample Dashboard
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-400">Free forever. No signup required.</p>
      </section>

      {/* Problem Statement */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Organizations waste an estimated <strong>31 hours per month per employee</strong> in
            unproductive meetings. The problem is not that meetings cost money — everything costs money.
            The problem is <strong>most meetings have no feedback loop</strong>. Without measurement,
            there is no improvement.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-heading text-gray-900 text-center mb-12">
          Three free tools. Zero signup.
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Calculator */}
          <div className="card hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center text-2xl mb-4">
              &#9201;
            </div>
            <h3 className="text-lg font-bold text-gray-900">Meeting Cost Calculator</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Plug in attendees, salary bands, and duration. See the real-time cost ticker
              and annual projection if the meeting repeats weekly.
            </p>
            <Link href="/calculator" className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline">
              Try it free &rarr;
            </Link>
          </div>

          {/* Score */}
          <div className="card hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl mb-4">
              &#9989;
            </div>
            <h3 className="text-lg font-bold text-gray-900">Investment Score Simulator</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Rate any meeting in 30 seconds: was the purpose clear? Decisions made?
              Action items assigned? Get a verdict: High ROI, Needs Work, or Go Async.
            </p>
            <Link href="/score" className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline">
              Score a meeting &rarr;
            </Link>
          </div>

          {/* Dashboard */}
          <div className="card hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center text-2xl mb-4">
              &#128202;
            </div>
            <h3 className="text-lg font-bold text-gray-900">Insights Dashboard</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              See a sample team dashboard: weekly trends, scores by meeting type,
              decisions made, and action item follow-through. Your data coming soon.
            </p>
            <Link href="/insights" className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline">
              See the demo &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-gray-900 text-center mb-12">
            How it works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: '1', title: 'Calculate', desc: 'Enter your meeting details and see what it really costs — total, per person, and annualized.' },
              { step: '2', title: 'Score', desc: 'After the meeting, rate it in 30 seconds. Were decisions made? Were action items assigned?' },
              { step: '3', title: 'Improve', desc: 'Over time, see which meetings create value and which can be restructured or made async.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto h-10 w-10 rounded-full bg-brand-600 text-white flex items-center justify-center text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <blockquote className="text-lg text-gray-700 italic leading-relaxed">
          &ldquo;Teams that measure meeting quality hold 25% fewer meetings but make 40% more decisions.
          Better meetings, not fewer meetings.&rdquo;
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading text-white">
            Ready to see what your meetings create?
          </h2>
          <p className="mt-4 text-brand-100">
            Start with the free calculator. No signup, no credit card, no BS.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-600 hover:bg-brand-50 transition-colors"
            >
              Calculate Your First Meeting
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-brand-500">
            <p className="text-sm text-brand-200 mb-3">
              Want real team data? Calendar integration coming soon.
            </p>
            <WaitlistForm source="landing-cta" className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
