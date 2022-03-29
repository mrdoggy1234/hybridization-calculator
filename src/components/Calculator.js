import elements from "./ElementList";

const atoms = [];

const onElementClick = (atomicNumber) =>
{
    // The "1" here should be replaced with the selected number of bonds to the atom once support for that is added
    atoms.push([atomicNumber, 1]);
    let sigmaBondCount = atoms.length - 1;
    if (sigmaBondCount > 0)
    {
        let valenceElectronCount = 0;
        for (const thisElement of elements)
        {
            if (thisElement.at(4) === atoms.at(0).at(0))
            {
                valenceElectronCount = thisElement.at(5);
                break;
            }
        }

        let requiredValenceElectrons = 8 - valenceElectronCount;
        let piBondCount = requiredValenceElectrons - sigmaBondCount;
        let sp = 3 - piBondCount;
        console.log("hybridization: sp" + sp.toString());

        // console.log("valence electrons: " + valenceElectronCount.toString());
        // let lonePairs = Math.floor((valenceElectronCount - sigmaBondCount) / 2);
        // console.log("lone pairs: " + lonePairs.toString());
        // let hybridization = sigmaBondCount + lonePairs - 1;
        // console.log("surrounding atoms: " + sigmaBondCount.toString());
        // console.log("hybridization: sp" + hybridization.toString());
        // console.log();
    }
};

export default onElementClick;
