import { OpeningHours } from '@/types';

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'pm' : 'am';
  const hour12 = hour % 12 || 12;
  return minutes === '00' ? `${hour12}${ampm}` : `${hour12}:${minutes}${ampm}`;
}

export function getDayName(date: Date = new Date()): keyof OpeningHours {
  const days: (keyof OpeningHours)[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  return days[date.getDay()];
}

export function isCurrentlyOpen(hours: OpeningHours | null): {
  isOpen: boolean;
  message: string;
} {
  if (!hours) {
    return { isOpen: false, message: 'Hours not available' };
  }

  const now = new Date();
  const currentDay = getDayName(now);
  const todayHours = hours[currentDay];

  if (!todayHours || todayHours.closed) {
    // Find next open day
    const days: (keyof OpeningHours)[] = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ];
    const currentIndex = days.indexOf(currentDay);

    for (let i = 1; i <= 7; i++) {
      const nextDay = days[(currentIndex + i) % 7];
      const nextHours = hours[nextDay];
      if (nextHours && !nextHours.closed) {
        const dayName = i === 1 ? 'tomorrow' : nextDay;
        return {
          isOpen: false,
          message: `Closed · opens ${formatTime(nextHours.open)} ${dayName}`,
        };
      }
    }
    return { isOpen: false, message: 'Closed' };
  }

  const currentTime = now.getHours() * 60 + now.getMinutes();
  const [openHour, openMin] = todayHours.open.split(':').map(Number);
  const [closeHour, closeMin] = todayHours.close.split(':').map(Number);
  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;

  if (currentTime >= openTime && currentTime < closeTime) {
    return {
      isOpen: true,
      message: `Open · closes ${formatTime(todayHours.close)}`,
    };
  } else if (currentTime < openTime) {
    return {
      isOpen: false,
      message: `Closed · opens ${formatTime(todayHours.open)} today`,
    };
  } else {
    // After closing, find next open time
    const days: (keyof OpeningHours)[] = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ];
    const currentIndex = days.indexOf(currentDay);

    for (let i = 1; i <= 7; i++) {
      const nextDay = days[(currentIndex + i) % 7];
      const nextHours = hours[nextDay];
      if (nextHours && !nextHours.closed) {
        const dayName = i === 1 ? 'tomorrow' : nextDay;
        return {
          isOpen: false,
          message: `Closed · opens ${formatTime(nextHours.open)} ${dayName}`,
        };
      }
    }
    return { isOpen: false, message: 'Closed' };
  }
}

export function validateUKPostcode(postcode: string): boolean {
  const regex = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i;
  return regex.test(postcode.trim());
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  });
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  return formatDateShort(dateString);
}

export function hashIP(ip: string): string {
  // Simple hash function for IP anonymization
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}

export function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
