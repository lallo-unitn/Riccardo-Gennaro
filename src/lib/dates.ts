const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** '2026-09-10' → '10 Sep 2026' (or 'Sep 2026' with day = false). */
export function formatDate(iso: string, day = true): string {
	const [y, m, d] = iso.split('-').map(Number);
	return `${day ? `${d} ` : ''}${months[m - 1]} ${y}`;
}
