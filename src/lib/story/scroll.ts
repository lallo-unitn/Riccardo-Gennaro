// Small scroll helpers used as Svelte attachments ({@attach ...}).
// They only write CSS variables, classes or a callback; all the motion itself is CSS,
// so pages still render fully without JavaScript, and reduced-motion is handled in CSS.

import type { Attachment } from 'svelte/attachments';

/**
 * Sets `--p` on the element: 0 when its top reaches the top of the viewport,
 * 1 when its bottom reaches the bottom. Used by pinned scenes (a tall element
 * containing a `position: sticky` child) to drive their animation.
 */
export const scrollProgress: Attachment<HTMLElement> = (node) => {
	let frame = 0;
	const update = () => {
		frame = 0;
		const rect = node.getBoundingClientRect();
		const distance = rect.height - window.innerHeight;
		const p = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 1;
		node.style.setProperty('--p', p.toFixed(4));
	};
	const schedule = () => {
		if (!frame) frame = requestAnimationFrame(update);
	};
	update();
	window.addEventListener('scroll', schedule, { passive: true });
	window.addEventListener('resize', schedule);
	return () => {
		window.removeEventListener('scroll', schedule);
		window.removeEventListener('resize', schedule);
		cancelAnimationFrame(frame);
	};
};

/** Adds `is-in` once the element scrolls into view (see `.reveal` in app.css). */
export const reveal: Attachment<HTMLElement> = (node) => {
	const io = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('is-in');
				io.disconnect();
			}
		},
		{ rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
	);
	io.observe(node);
	return () => io.disconnect();
};

/**
 * Calls `onactive(index)` with the index of the child matching `selector` that
 * crosses the middle of the viewport. Used for "the step you are reading now".
 */
export function activeChild(
	selector: string,
	onactive: (index: number) => void
): Attachment<HTMLElement> {
	return (node) => {
		const items = [...node.querySelectorAll<HTMLElement>(selector)];
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) onactive(items.indexOf(entry.target as HTMLElement));
				}
			},
			{ rootMargin: '-50% 0px -50% 0px' }
		);
		items.forEach((item) => io.observe(item));
		return () => io.disconnect();
	};
}
