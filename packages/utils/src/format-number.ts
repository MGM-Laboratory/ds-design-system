const BYTE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'] as const;

export function formatBytes(bytes: number, decimals = 1): string {
  if (!Number.isFinite(bytes) || bytes < 0) return '0 B';
  if (bytes === 0) return '0 B';
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), BYTE_UNITS.length - 1);
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(decimals)} ${BYTE_UNITS[i]}`;
}

export function formatNumber(
  value: number,
  options: Intl.NumberFormatOptions = {},
  locale = 'en-US',
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function formatPercent(value: number, decimals = 0, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatCurrency(
  value: number,
  currency = 'USD',
  locale = 'en-US',
  options: Intl.NumberFormatOptions = {},
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...options,
  }).format(value);
}
