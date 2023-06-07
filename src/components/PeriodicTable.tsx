import React, { FC } from "react";
import { elements } from "./ElementList";
import PTElement from "./PTElement";

interface PTProps {
	callback: (atomicNumber: number) => void;
	disabledElements: number[];
}

const PeriodicTable: FC<PTProps> = ({ callback, disabledElements }) => {
	const PTElements = [];
	for (const thisElement of elements) {
		let row: number = thisElement.period;
		let column: number = thisElement.group;
		let atomicNumber: number = thisElement.atomicNumber;
		const fBlockOffset = 3;
		if (atomicNumber >= 57 && atomicNumber <= 70) {
			row += 3;
			column = atomicNumber - (57 - fBlockOffset);
		}
		if (atomicNumber >= 89 && atomicNumber <= 102) {
			row += 3;
			column += atomicNumber - (89 - fBlockOffset);
		}

		let disabled: boolean =
			disabledElements.includes(atomicNumber) ||
			thisElement.electronegativity === 0;

		PTElements.push(
			<PTElement
				atomicNumber={atomicNumber}
				elemSymbol={thisElement.elemSymbol}
				elemName={thisElement.elemName}
				elemStyle={{
					gridColumn: column,
					gridRow: row,
				}}
				callback={callback}
				disabled={disabled}
				key={thisElement.atomicNumber}
			></PTElement>
		);
	}

	return <div className="periodic-table">{PTElements}</div>;
};

export default PeriodicTable;
