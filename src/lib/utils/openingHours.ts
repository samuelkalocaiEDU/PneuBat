export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface DaySchedule {
	open: string | null;
	close: string | null;
}

export interface ShopStatus {
	isOpen: boolean;
	statusText: string;
	nextEventText: string;
	dayName: string;
	todaySchedule: DaySchedule;
	urgency: 'open' | 'closing-soon' | 'closed';
}

export const SCHEDULE: Record<DayOfWeek, DaySchedule> = {
	0: { open: null, close: null },
	1: { open: '07:30', close: '17:00' },
	2: { open: '07:30', close: '17:00' },
	3: { open: '07:30', close: '17:00' },
	4: { open: '07:30', close: '17:00' },
	5: { open: '07:30', close: '16:00' },
	6: { open: null, close: null }
};

export const CZECH_DAY_NAMES: Record<DayOfWeek, string> = {
	0: 'neděle',
	1: 'pondělí',
	2: 'úterý',
	3: 'středa',
	4: 'čtvrtek',
	5: 'pátek',
	6: 'sobota'
};

function parseTime(timeStr: string): number {
	const [hours, minutes] = timeStr.split(':').map(Number);
	return hours * 60 + minutes;
}

export function getShopStatus(nowParam?: Date): ShopStatus {
	const now = nowParam || new Date();
	
	// Convert to Europe/Prague time
	const options: Intl.DateTimeFormatOptions = { timeZone: 'Europe/Prague', hour: 'numeric', minute: 'numeric', weekday: 'long', hour12: false };
	const pragueDate = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Prague', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false }).formatToParts(now);
	
	const parts: Record<string, number> = {};
	for (const p of pragueDate) {
		if (p.type !== 'literal') parts[p.type] = Number(p.value);
	}
	
	const localDateObj = new Date(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
	const localDayOfWeek = localDateObj.getDay() as DayOfWeek;
	const localMinutes = parts.hour * 60 + parts.minute;
	
	const todaySchedule = SCHEDULE[localDayOfWeek];
	const dayName = CZECH_DAY_NAMES[localDayOfWeek];
	
	// Helper to find next open day
	function getNextOpenEvent(): { text: string; dayIndex: DayOfWeek; isTomorrow: boolean } {
		for (let i = 1; i <= 7; i++) {
			const checkDay = (localDayOfWeek + i) % 7 as DayOfWeek;
			const sched = SCHEDULE[checkDay];
			if (sched.open) {
				const isTomorrow = i === 1;
				const czechName = CZECH_DAY_NAMES[checkDay];
				let text = isTomorrow ? `zítra v ${sched.open}` : `v ${czechName} v ${sched.open}`;
				return { text, dayIndex: checkDay, isTomorrow };
			}
		}
		return { text: 'brzy', dayIndex: 1, isTomorrow: false };
	}
	
	if (!todaySchedule.open || !todaySchedule.close) {
		const nextOpen = getNextOpenEvent();
		return {
			isOpen: false,
			statusText: 'Dnes zavřeno',
			nextEventText: `Otevíráme ${nextOpen.text}`,
			dayName,
			todaySchedule,
			urgency: 'closed'
		};
	}
	
	const openMins = parseTime(todaySchedule.open);
	const closeMins = parseTime(todaySchedule.close);
	
	if (localMinutes < openMins) {
		return {
			isOpen: false,
			statusText: 'Momentálně zavřeno',
			nextEventText: `Dnes otevíráme v ${todaySchedule.open}`,
			dayName,
			todaySchedule,
			urgency: 'closed'
		};
	}
	
	if (localMinutes >= closeMins) {
		const nextOpen = getNextOpenEvent();
		return {
			isOpen: false,
			statusText: 'Dnes již zavřeno',
			nextEventText: `Otevíráme ${nextOpen.text}`,
			dayName,
			todaySchedule,
			urgency: 'closed'
		};
	}
	
	const minsToClose = closeMins - localMinutes;
	
	if (minsToClose <= 60) {
		return {
			isOpen: true,
			statusText: 'Brzy zavíráme',
			nextEventText: `Dnes zavíráme v ${todaySchedule.close} — zbývá ${minsToClose} minut`,
			dayName,
			todaySchedule,
			urgency: 'closing-soon'
		};
	}
	
	return {
		isOpen: true,
		statusText: 'Nyní otevřeno',
		nextEventText: `Dnes zavíráme v ${todaySchedule.close}`,
		dayName,
		todaySchedule,
		urgency: 'open'
	};
}