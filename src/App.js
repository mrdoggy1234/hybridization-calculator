import Header from './components/Header';
import Instructions from './components/Instructions';
import Result from './components/Result';
import PeriodicTable from './components/PeriodicTable';
import AddAtom from './components/Calculator';

import React, { useState } from 'react';

function App()
{
  const [result, setResult] = useState("--");
  
  const onElementClick = (atomicNumber) =>
  {
    let hybridization = AddAtom(atomicNumber);
    setResult(hybridization);
  }

  return (
    <div className="container">
      <Header text="Hybridization Calculator"/>
      <Instructions text="* Select a central atom then any surrounding atoms to calculate the central atom's hybridization."/>
      <Result res={result}></Result>
      <PeriodicTable callback={onElementClick}></PeriodicTable>
    </div>
  );
}

export default App;
