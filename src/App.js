import Header from './components/Header';
import Instructions from './components/Instructions';
import Result from './components/Result';
import PeriodicTable from './components/PeriodicTable';
// import MoleculeCanvas from './components/MoleculeCanvas';
import AddAtom from './components/Calculator';

import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import * as ReactDOMClient from 'react-dom/client';

// import setResult from './components/Result';

// let resultText = <Result text=" "></Result>;

/* function onElementClick(atomicNumber)
{
  let hybridization = AddAtom(atomicNumber);
  console.log(hybridization);
  // ReactDOM.render(<div></div><AppRes result={hybridization}></AppRes>);
  // ReactDOM.render(
  //   <div className="container">
  //     <Header text="Hybridization Calculator"/>
  //     <Instructions text="* Select a central atom then any surrounding atoms to calculate the central atom's hybridization."/>
  //     <Result text={hybridization}></Result>
  //     <PeriodicTable callback={onElementClick}></PeriodicTable>
  //   </div>
  // )

  // ReactDOM.render(
  //   <React.StrictMode>
  //     <App result={hybridization}/>
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );

  // resultText.setResult(hybridization);
} */


/* function AppRes(result)
{
  // const onElementClick = (atomicNumber) =>
  // {
  //   let hybridization = AddAtom(atomicNumber);
  //   console.log(hybridization);
  //   // result.state.text = hybridization;
  // };

  return (
    <div className="container">
      <Header text="Hybridization Calculator"/>
      <Instructions text="* Select a central atom then any surrounding atoms to calculate the central atom's hybridization."/>
      <Result text={result}></Result>
      <PeriodicTable callback={onElementClick}></PeriodicTable>
    </div>
  );
} */

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
