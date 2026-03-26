export interface WeeklyTrend {
  week: string;
  meetingHours: number;
  investmentScore: number;
}

export interface MeetingTypeScore {
  type: string;
  avgScore: number;
  count: number;
}

export interface Decision {
  meeting: string;
  decision: string;
  date: string;
}

export const weeklyTrends: WeeklyTrend[] = [
  { week: 'Feb 3', meetingHours: 38, investmentScore: 2.8 },
  { week: 'Feb 10', meetingHours: 42, investmentScore: 2.6 },
  { week: 'Feb 17', meetingHours: 35, investmentScore: 3.1 },
  { week: 'Feb 24', meetingHours: 31, investmentScore: 3.4 },
  { week: 'Mar 3', meetingHours: 29, investmentScore: 3.6 },
  { week: 'Mar 10', meetingHours: 27, investmentScore: 3.8 },
  { week: 'Mar 17', meetingHours: 25, investmentScore: 4.0 },
  { week: 'Mar 24', meetingHours: 24, investmentScore: 4.1 },
];

export const meetingTypeScores: MeetingTypeScore[] = [
  { type: 'Design Review', avgScore: 4.3, count: 8 },
  { type: '1:1', avgScore: 4.1, count: 16 },
  { type: 'Sprint Planning', avgScore: 3.8, count: 4 },
  { type: 'All-Hands', avgScore: 3.2, count: 4 },
  { type: 'Standup', avgScore: 2.9, count: 20 },
  { type: 'Status Update', avgScore: 2.1, count: 8 },
];

export const recentDecisions: Decision[] = [
  { meeting: 'Design Review', decision: 'Ship new onboarding flow by March 28', date: 'Mar 24' },
  { meeting: 'Sprint Planning', decision: 'Prioritize API v2 over mobile app', date: 'Mar 24' },
  { meeting: '1:1 (Sarah + Mike)', decision: 'Promote Sarah to Tech Lead', date: 'Mar 23' },
  { meeting: 'Design Review', decision: 'Use gradient branding for landing page', date: 'Mar 21' },
  { meeting: 'Sprint Planning', decision: 'Cut scope on analytics dashboard', date: 'Mar 17' },
];

export const sampleStats = {
  totalMeetingHours: 24,
  totalDecisions: 12,
  actionItemsCompleted: 8,
  actionItemsTotal: 10,
  avgInvestmentScore: 4.1,
  meetingReduction: 37,
};
