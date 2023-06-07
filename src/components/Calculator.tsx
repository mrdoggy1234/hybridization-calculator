import { Element, elements } from "./ElementList";
import { Orbital, maxOrbitals } from "./OrbitalList";

export let centralAtom: Element = {
	elemSymbol: "",
	elemName: "",
	period: 0,
	group: 0,
	atomicNumber: 0,
	valenceElectrons: 0,
	block: "",
	electronegativity: 0,
};
const sigmaBonds: Element[] = [];

export function setCentralAtom(atomicNumber: number) {
	centralAtom = elements.at(atomicNumber - 1)!;

	let applicableAtoms: number[] = [];
	let centralEN: number = centralAtom!.electronegativity;
	for (const thisElement of elements) {
		let thisEN: number = thisElement.electronegativity;
		if (thisEN !== 0 && Math.abs(centralEN - thisEN) >= 2.1) {
			applicableAtoms.push(thisElement.atomicNumber);
		}
	}

	return applicableAtoms;
}

export function addAtom(atomicNumber: number) {
	sigmaBonds.push(elements.at(atomicNumber - 1)!);
}

// Calculates the hybridization based on what atoms are currently entered
// Returns an empty string if the steric number is less than zero
export function calcHybridization(piBondCount: number) {
	let hybridization: string = "";

	let sigmaCount: number = sigmaBonds.length;
	let valenceCount: number = centralAtom.valenceElectrons;
	let bondCount: number = sigmaCount + piBondCount;
	let loneCount: number = Math.floor((valenceCount - bondCount) / 2);

	let steric: number = sigmaCount + loneCount;

	if (steric < 0) {
		return "";
	}

	// TEMP
	console.log(steric);

	let orbitals: Orbital[] = [];
	let orbitalsLeft: number = steric;
	for (
		let orbitalCount: number = 0;
		orbitalCount < maxOrbitals.length;
		orbitalCount++
	) {
		let thisOrbital: Orbital = maxOrbitals.at(orbitalCount)!;

		// TEMP
		// if (orbitalsLeft > thisOrbital.count) {
		//     orbitals.push()
		// }

		let thisOrbitalCount: number = 0;
		while (thisOrbitalCount < thisOrbital.count && orbitalsLeft !== 0) {
			thisOrbitalCount++;
			orbitalsLeft--;
		}

		orbitals.push({ name: thisOrbital.name, count: thisOrbitalCount });

		if (orbitalsLeft === 0) {
			break;
		}
	}

	for (const thisOrbital of orbitals) {
		hybridization += thisOrbital.name;
		if (thisOrbital.count > 1) {
			hybridization += thisOrbital.count;
		}
	}

	return hybridization;
}
