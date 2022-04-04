import Header from './components/Header';
import Instructions from './components/Instructions';
import Result from './components/Result';
import Menu from './components/Menu';
import PeriodicTable from './components/PeriodicTable';
import { centralAtom, setCentralAtom, addAtom, calcHybridization } from './components/Calculator';

import React, { useState } from 'react';

function App()
{
  const [piBondCount, setPiBondCount] = useState(0);
  const [result, setResult] = useState("--");

  const [resetDisabled, setResetDisabled] = useState(true);
  const [addPiBondDisabled, setAddPiBondDisabled] = useState(true);
  const [disabledElements, setDisabledElements] = useState([]);
  
  const onElementClick = (atomicNumber) =>
  {
    if (centralAtom.length === 0)
    {
      let ionic = setCentralAtom(atomicNumber);
      setDisabledElements(ionic);
      
      setResetDisabled(false);
      setAddPiBondDisabled(false);
    }
    else
    {
      addAtom(atomicNumber);
      let hybridization = calcHybridization(piBondCount);
      setResult(hybridization);
    }
  }

  const addPiBond = () =>
  {
    setPiBondCount(piBondCount + 1);
    let hybridization = calcHybridization(piBondCount);
    setResult(hybridization);
  }

  return (
    <div className="container">
      <Header text="Hybridization Calculator"/>
      <Instructions text="* Select a central atom then any surrounding atoms to calculate the central atom's hybridization."/>
      <Result res={result}></Result>
      <Menu resetDisabled={resetDisabled} addPiBondCallback={addPiBond} addPiBondDisabled={addPiBondDisabled} piBondCount={piBondCount}></Menu>
      <PeriodicTable callback={onElementClick} disabledElements={disabledElements}></PeriodicTable>
    </div>
  );
}

export default App;
