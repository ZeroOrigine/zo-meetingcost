'use client';

import { useState, useEffect, useRef } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { salaryBands, formatCurrency, formatCurrencyPrecise } from '@/data/salary-bands';

export default function CalculatorPage() {
  const [attendees, setAttendees] = useState(6);
  const [selectedBand, setSelectedBand] = useState(2); // Senior default
  const [customRate, setCustomRate] = useState('');
  const [useCustom, setUseCustom] = useState(false);
  const [duration, setDuration] = useState(60); // minutes
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const hourlyRate = useCustom ? Number(customRate) || 0 : salaryBands[selectedBand].hourlyRate;
  const costPerSecond = (attendees * hourlyRate) / 3600;
  const totalCost = attendees * hourlyRate * (duration / 60);
  const costPerAttendee = hourlyRate * (duration / 60);
  const annualCost = totalCost * 52;
  const runningCost = costPerSecond * elapsed;

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setElapsed(0);
      setIsRunning(true);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-heading tracking-tight text-gray-900">
            Meeting Cost Calculator
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            See what your meetings really cost — and what they could create instead.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Input Panel */}
          <div className="card space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Meeting Setup</h2>

            {/* Attendees */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attendees: {attendees}
              </label>
              <input
                type="range"
                min={2}
                max={30}
                value={attendees}
                onChange={(e) => setAttendees(Number(e.target.value))}
                className="w-full accent-brand-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>2</span><span>30</span>
              </div>
            </div>

            {/* Salary Band */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Salary Band
              </label>
              {!useCustom ? (
                <div className="space-y-2">
                  {salaryBands.map((band, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="band"
                        checked={selectedBand === i}
                        onChange={() => setSelectedBand(i)}
                        className="accent-brand-600"
                      />
                      <span className="text-sm text-gray-700">{band.label}</span>
                    </label>
                  ))}
                  <button
                    onClick={() => setUseCustom(true)}
                    className="text-xs text-brand-600 hover:underline mt-1"
                  >
                    Use custom hourly rate
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">$</span>
                    <input
                      type="number"
                      value={customRate}
                      onChange={(e) => setCustomRate(e.target.value)}
                      placeholder="e.g. 85"
                      className="w-32 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                    <span className="text-sm text-gray-500">/hr</span>
                  </div>
                  <button
                    onClick={() => setUseCustom(false)}
                    className="text-xs text-brand-600 hover:underline mt-2"
                  >
                    Use preset bands
                  </button>
                </div>
              )}
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration: {duration} minutes
              </label>
              <input
                type="range"
                min={15}
                max={180}
                step={15}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full accent-brand-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>15m</span><span>3h</span>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* Live Counter */}
            <div className="card bg-gray-900 text-white text-center">
              <p className="text-sm text-gray-400 mb-1">
                {isRunning ? 'Meeting in progress...' : 'Live Meeting Counter'}
              </p>
              <p className="text-5xl font-bold font-mono tracking-tight text-green-400">
                {formatCurrencyPrecise(runningCost)}
              </p>
              <p className="text-sm text-gray-400 mt-1">{formatTime(elapsed)}</p>
              <button
                onClick={handleStartStop}
                className={`mt-4 rounded-lg px-6 py-2 text-sm font-semibold transition-colors ${
                  isRunning
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isRunning ? 'Stop Meeting' : 'Start Meeting'}
              </button>
            </div>

            {/* Summary */}
            <div className="card">
              <h3 className="text-sm font-medium text-gray-500 mb-4">This Meeting Costs</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-600">Total Cost</span>
                  <span className="text-2xl font-bold text-gray-900">{formatCurrency(totalCost)}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-600">Per Attendee</span>
                  <span className="text-lg font-semibold text-gray-700">{formatCurrency(costPerAttendee)}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-600">Per Minute</span>
                  <span className="text-lg font-semibold text-gray-700">{formatCurrencyPrecise(costPerSecond * 60)}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-600">If weekly for a year</span>
                  <span className="text-xl font-bold text-brand-700">{formatCurrency(annualCost)}</span>
                </div>
              </div>
            </div>

            {/* Context */}
            <div className="card bg-brand-50 border-brand-200">
              <p className="text-sm text-brand-800">
                <strong>What could {formatCurrency(totalCost)} create?</strong> That is equivalent to{' '}
                {Math.round(totalCost / hourlyRate)} hours of focused individual work, or{' '}
                {Math.round(annualCost / 50000)} junior developer salaries per year if recurring weekly.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Was this meeting worth it?</p>
          <a href="/score" className="btn-primary">
            Score Your Meeting &rarr;
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
