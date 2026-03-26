export interface SalaryBand {
  label: string;
  hourlyRate: number;
}

export const salaryBands: SalaryBand[] = [
  { label: 'Junior ($40/hr)', hourlyRate: 40 },
  { label: 'Mid-Level ($65/hr)', hourlyRate: 65 },
  { label: 'Senior ($95/hr)', hourlyRate: 95 },
  { label: 'Lead ($120/hr)', hourlyRate: 120 },
  { label: 'Director ($160/hr)', hourlyRate: 160 },
  { label: 'VP ($200/hr)', hourlyRate: 200 },
  { label: 'C-Suite ($300/hr)', hourlyRate: 300 },
];

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCurrencyPrecise(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
