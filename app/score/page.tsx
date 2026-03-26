'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

interface ScoreResult {
  score: number;
  verdict: string;
  description: string;
  color: string;
}

function calculateScore(
  purposeClear: boolean | null,
  decisionsMade: boolean | null,
  actionItems: boolean | null,
  satisfaction: number
): ScoreResult | null {
  if (purposeClear === null || decisionsMade === null || actionItems === null || satisfaction === 0) {
    return null;
  }

  // Weighted scoring: purpose 20%, decisions 30%, actions 25%, satisfaction 25%
  const purposeScore = purposeClear ? 5 : 1;
  const decisionScore = decisionsMade ? 5 : 1;
  const actionScore = actionItems ? 5 : 1;

  const weighted =
    purposeScore * 0.2 +
    decisionScore * 0.3 +
    actionScore * 0.25 +
    satisfaction * 0.25;

  if (weighted >= 4.0) {
    return { score: weighted, verdict: 'High ROI Meeting', description: 'This meeting created real value. Clear purpose, decisions made, actions assigned.', color: 'text-green-700 bg-green-50 border-green-200' };
  } else if (weighted >= 2.5) {
    return { score: weighted, verdict: 'Needs Restructuring', description: 'This meeting had some value but could be more effective. Consider tighter agendas or fewer attendees.', color: 'text-yellow-700 bg-yellow-50 border-yellow-200' };
  } else {
    return { score: weighted, verdict: 'Consider Making Async', description: 'This meeting could likely be replaced by a Slack thread, Loom video, or email update.', color: 'text-red-700 bg-red-50 border-red-200' };
  }
}

export default function ScorePage() {
  const [purposeClear, setPurposeClear] = useState<boolean | null>(null);
  const [decisionsMade, setDecisionsMade] = useState<boolean | null>(null);
  const [actionItems, setActionItems] = useState<boolean | null>(null);
  const [satisfaction, setSatisfaction] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const result = calculateScore(purposeClear, decisionsMade, actionItems, satisfaction);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (result) setSubmitted(true);
  };

  const handleReset = () => {
    setPurposeClear(null);
    setDecisionsMade(null);
    setActionItems(null);
    setSatisfaction(0);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-heading tracking-tight text-gray-900">
            Meeting Investment Score
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Rate your meeting in 30 seconds. Find out if it was worth the investment.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="card space-y-8">
            {/* Purpose */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">Was the purpose of this meeting clear?</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setPurposeClear(true)}
                  className={`flex-1 rounded-lg border py-3 text-sm font-medium transition-colors ${
                    purposeClear === true
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setPurposeClear(false)}
                  className={`flex-1 rounded-lg border py-3 text-sm font-medium transition-colors ${
                    purposeClear === false
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Decisions */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">Were decisions made?</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setDecisionsMade(true)}
                  className={`flex-1 rounded-lg border py-3 text-sm font-medium transition-colors ${
                    decisionsMade === true
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setDecisionsMade(false)}
                  className={`flex-1 rounded-lg border py-3 text-sm font-medium transition-colors ${
                    decisionsMade === false
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Action Items */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">Were action items assigned?</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setActionItems(true)}
                  className={`flex-1 rounded-lg border py-3 text-sm font-medium transition-colors ${
                    actionItems === true
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setActionItems(false)}
                  className={`flex-1 rounded-lg border py-3 text-sm font-medium transition-colors ${
                    actionItems === false
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Satisfaction */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Overall, was this meeting worth your time? ({satisfaction || '—'}/5)
              </p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setSatisfaction(n)}
                    className={`flex-1 rounded-lg border py-3 text-sm font-medium transition-colors ${
                      satisfaction === n
                        ? 'border-brand-500 bg-brand-50 text-brand-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Not at all</span><span>Absolutely</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={!result}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get Your Score
            </button>
          </form>
        ) : result ? (
          <div className="space-y-6">
            {/* Score Display */}
            <div className={`card border-2 ${result.color} text-center`}>
              <p className="text-6xl font-bold font-heading">{result.score.toFixed(1)}</p>
              <p className="text-sm text-gray-500 mt-1">out of 5.0</p>
              <p className="text-xl font-bold mt-4">{result.verdict}</p>
              <p className="text-sm mt-2 opacity-80">{result.description}</p>
            </div>

            {/* Breakdown */}
            <div className="card">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Score Breakdown</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Purpose Clear (20%)</span>
                  <span className={purposeClear ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                    {purposeClear ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Decisions Made (30%)</span>
                  <span className={decisionsMade ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                    {decisionsMade ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Action Items (25%)</span>
                  <span className={actionItems ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                    {actionItems ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Satisfaction (25%)</span>
                  <span className="font-medium text-gray-900">{satisfaction}/5</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={handleReset} className="btn-secondary flex-1">
                Score Another Meeting
              </button>
              <a href="/calculator" className="btn-primary flex-1 text-center">
                Calculate Cost
              </a>
            </div>
          </div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
