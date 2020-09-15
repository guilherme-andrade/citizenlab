import { useRef, useEffect } from 'react';

export default function usePrevious(value) {
	const ref = useRef();
	useEffect(
		() => {
			ref.current = value;
		},
		[ value ]
	); // Only re-run if value changes
	return ref.current;
}
