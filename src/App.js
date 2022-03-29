import Header from './components/Header';
import Subheader from './components/Subheader';
import PeriodicTable from './components/PeriodicTable';
import MoleculeCanvas from './components/MoleculeCanvas';
import onElementClick from './components/Calculator';

function App() {
  return (
    <div className="container">
      <Header title="Hybridization Calculator"/>
      <Subheader text="* Select a central atom then any surrounding atoms to calculate the central atom's hybridization."/>
      <PeriodicTable callback={onElementClick}></PeriodicTable>
      {/* <MoleculeCanvas></MoleculeCanvas> */}
    </div>
  );
}

export default App;
