import { $, useSignal, type QRL, type ReadonlySignal } from '@builder.io/qwik';

export function useToggle(
	initialValue: boolean = false,
): [ReadonlySignal<boolean>, QRL<() => void>] {
	const state = useSignal(initialValue);

	const toggle = $(() => {
		state.value = !state.value;
	});

	return [state, toggle] as const;
}
