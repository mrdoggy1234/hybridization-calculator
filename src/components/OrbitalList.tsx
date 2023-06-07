export interface Orbital {
	name: string;
	count: number;
}

export const maxOrbitals: Orbital[] = [
	{ name: "s", count: 1 },
	{ name: "p", count: 3 },
	{ name: "d", count: 5 },
	{ name: "f", count: 7 },
];
