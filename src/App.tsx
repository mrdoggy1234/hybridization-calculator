import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Result from "./components/Result";
import Menu from "./components/Menu";
import PeriodicTable from "./components/PeriodicTable";
import {
	centralAtom,
	setCentralAtom,
	addAtom,
	calcHybridization,
} from "./components/Calculator";

import React, { useState } from "react";

function App() {
	const [piBondCount, setPiBondCount] = useState<number>(0);
	const [result, setResult] = useState<string>("--");

	const [resetDisabled, setResetDisabled] = useState<boolean>(true);
	const [addPiBondDisabled, setAddPiBondDisabled] = useState<boolean>(true);
	const [disabledElements, setDisabledElements] = useState<number[]>([]);

	const onElementClick = (atomicNumber: number) => {
		if (centralAtom.atomicNumber === 0) {
			let ionic = setCentralAtom(atomicNumber);
			setDisabledElements(ionic);

			setResetDisabled(false);
			setAddPiBondDisabled(false);
		} else {
			addAtom(atomicNumber);
			let hybridization = calcHybridization(piBondCount);
			setResult(hybridization);
		}
	};

	const addPiBond = () => {
		let hybridization: string = calcHybridization(piBondCount);
		if (hybridization !== "") {
			setPiBondCount(piBondCount + 1);
			setResult(hybridization);
		}
	};

	return (
		<div className="container">
			<Header text="Hybridization Calculator" />
			<Instructions text="* Select a central atom then any surrounding atoms to calculate the central atom's hybridization." />
			<Result res={result}></Result>
			<Menu
				resetDisabled={resetDisabled}
				addPiBondCallback={addPiBond}
				addPiBondDisabled={addPiBondDisabled}
				piBondCount={piBondCount}
			></Menu>
			<PeriodicTable
				callback={onElementClick}
				disabledElements={disabledElements}
			></PeriodicTable>
		</div>
	);
}

export default App;
