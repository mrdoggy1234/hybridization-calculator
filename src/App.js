import Header from './components/Header';
import Instructions from './components/Instructions';
import Result from './components/Result';
import Reset from './components/Reset';
import PeriodicTable from './components/PeriodicTable';
import { centralAtom, setCentralAtom, addAtom } from './components/Calculator';

import React, { useState } from 'react';

function App()
{
  const [result, setResult] = useState("--");
  const [resetDisabled, setResetDisabled] = useState(true);
  const [disabledElements, setDisabledElements] = useState([]);
  
  const onElementClick = (atomicNumber) =>
  {
    if (centralAtom.length === 0)
    {
      let ionic = setCentralAtom(atomicNumber);
      setDisabledElements(ionic);
      
      setResetDisabled(false);
    }
    else
    {
      let hybridization = addAtom(atomicNumber);
      setResult(hybridization);
    }
  }

  return (
    <div className="container">
      <Header text="Hybridization Calculator"/>
      <Instructions text="* Select a central atom then any surrounding atoms to calculate the central atom's hybridization."/>
      <Result res={result}></Result>
      <Reset disabled={resetDisabled}></Reset>
      <PeriodicTable callback={onElementClick} disabledElements={disabledElements}></PeriodicTable>
    </div>
  );
}

export default App;
