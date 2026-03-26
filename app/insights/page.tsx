import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaitlistForm from '@/components/WaitlistForm';
import {
  weeklyTrends,
  meetingTypeScores,
  recentDecisions,
  sampleStats,
} from '@/data/sample-insights';

function ScoreBar({ score, max = 5 }: { score: number; max?: number }) {
  const pct = (score / max) * 100;
  const color =
    score >= 4 ? 'bg-green-500' : score >= 3 ? 'bg-yellow-500' : 'bg-red-400';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm font-medium text-gray-700 w-8 text-right">{score.toFixed(1)}</span>
    </div>
  );
}

function TrendChart({ data }: { data: typeof weeklyTrends }) {
  const maxHours = Math.max(...data.map((d) => d.meetingHours));
  return (
    <div className="flex items-end gap-1 h-32">
      {data.map((d, i) => {
        const heightPct = (d.meetingHours / maxHours) * 100;
        const color = d.investmentScore >= 3.5 ? 'bg-green-400' : d.investmentScore >= 2.5 ? 'bg-yellow-400' : 'bg-red-300';
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`w-full rounded-t ${color} transition-all`}
              style={{ height: `${heightPct}%` }}
              title={`${d.meetingHours}h — Score: ${d.investmentScore}`}
            />
            <span className="text-[10px] text-gray-400">{d.week.split(' ')[1]}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 mb-3">
            Sample Data
          </div>
          <h1 className="text-4xl font-bold font-heading tracking-tight text-gray-900">
            Meeting Insights Dashboard
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            See how a real team transformed their meeting culture. This is demo data — connect your calendar to see yours.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-8">
          <div className="card text-center">
            <p className="text-3xl font-bold font-heading text-gray-900">{sampleStats.totalMeetingHours}h</p>
            <p className="text-xs text-gray-500 mt-1">Meeting hours this week</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold font-heading text-green-600">{sampleStats.totalDecisions}</p>
            <p className="text-xs text-gray-500 mt-1">Decisions made</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold font-heading text-brand-600">{sampleStats.avgInvestmentScore}</p>
            <p className="text-xs text-gray-500 mt-1">Avg investment score</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold font-heading text-gray-900">
              {Math.round((sampleStats.actionItemsCompleted / sampleStats.actionItemsTotal) * 100)}%
            </p>
            <p className="text-xs text-gray-500 mt-1">Action item follow-through</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Weekly Trend */}
          <div className="card">
            <h2 className="text-sm font-semibold text-gray-900 mb-1">Weekly Meeting Hours</h2>
            <p className="text-xs text-gray-500 mb-4">
              Down {sampleStats.meetingReduction}% — color indicates investment score
            </p>
            <TrendChart data={weeklyTrends} />
          </div>

          {/* Meeting Type Scores */}
          <div className="card">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Investment Score by Meeting Type</h2>
            <div className="space-y-3">
              {meetingTypeScores.map((mt) => (
                <div key={mt.type}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-700 font-medium">{mt.type}</span>
                    <span className="text-gray-400">{mt.count} meetings</span>
                  </div>
                  <ScoreBar score={mt.avgScore} />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Decisions */}
          <div className="card">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Decisions Made This Week</h2>
            <div className="space-y-3">
              {recentDecisions.map((d, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-green-400 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900">{d.decision}</p>
                    <p className="text-xs text-gray-400">{d.meeting} — {d.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Items */}
          <div className="card">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Action Item Follow-Through</h2>
            <div className="flex items-center justify-center py-4">
              <div className="relative h-32 w-32">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                  <circle
                    cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="8"
                    strokeDasharray={`${(sampleStats.actionItemsCompleted / sampleStats.actionItemsTotal) * 251.3} 251.3`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">
                    {sampleStats.actionItemsCompleted}/{sampleStats.actionItemsTotal}
                  </span>
                  <span className="text-xs text-gray-500">completed</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              Up from 58% last month — structured action items drive accountability.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 card bg-brand-50 border-brand-200 text-center">
          <h2 className="text-xl font-bold font-heading text-gray-900">
            See YOUR team&apos;s data
          </h2>
          <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
            Connect your Google Calendar or Outlook to get real meeting insights for your team.
            Calendar integration launches soon — join the waitlist.
          </p>
          <WaitlistForm source="insights-page" className="mt-4 max-w-md mx-auto" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
