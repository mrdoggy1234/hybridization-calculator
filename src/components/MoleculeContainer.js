import Molecule from "./Molecule";

const MoleculeContainer = ({central, surrounding}) =>
{
    return (
        <div className="moleculecontainer">
            <Molecule></Molecule>
        </div>
    );
}

export default MoleculeContainer;
