import { useToggle } from '@/index.ts';
import { component$ } from '@builder.io/qwik';
import { createDOM } from '@builder.io/qwik/testing';
import { expect, test } from 'vite-plus/test';

const TestComponent = component$(() => {
	const [toggled, toggle] = useToggle();

	return (
		<div>
			<span data-test="value">{String(toggled.value)}</span>
			<button onClick$={toggle}>Toggle</button>
		</div>
	);
});

test('should toggle', async () => {
	const { screen, render, userEvent } = await createDOM();

	await render(<TestComponent />);

	expect(screen.querySelector('[data-test="value"]')?.textContent).toBe('false');

	await userEvent('button', 'click');
	expect(screen.querySelector('[data-test="value"]')?.textContent).toBe('true');

	await userEvent('button', 'click');
	expect(screen.querySelector('[data-test="value"]')?.textContent).toBe('false');
});
