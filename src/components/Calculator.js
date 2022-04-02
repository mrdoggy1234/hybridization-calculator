import elements from "./ElementList";
import totalOrbitals from "./OrbitalList";

let centralAtom = [];
const sigmaBonds = [];

function AddAtom(atomicNumber)
{
    if (centralAtom.length === 0)
    {
        centralAtom = elements.at(atomicNumber - 1);
        return "--";
    }
    else
    {
        sigmaBonds.push(atomicNumber);
        let sigmaBondCount = sigmaBonds.length;
        let valenceElectronCount = centralAtom.at(5);
        let stericNumber = valenceElectronCount + sigmaBondCount - 4;
    
        let orbitals = [];
        let orbitalsLeft = stericNumber;
        for (let orbitalCount = 0; orbitalCount < totalOrbitals.length; orbitalCount++)
        {
            let thisOrbital = totalOrbitals.at(orbitalCount);
            let thisOrbitalCount = 0;
            while (thisOrbitalCount < thisOrbital.at(1) && orbitalsLeft !== 0)
            {
                thisOrbitalCount++;
                orbitalsLeft--;
            }
            orbitals.push([thisOrbital.at(0), thisOrbitalCount]);
            if (orbitalsLeft === 0)
            {
                break;
            }
        }
    
        let hybridization = "";
        
        for (const thisOrbital of orbitals)
        {
            hybridization += thisOrbital.at(0);
            if (thisOrbital.at(1) > 1)
            {
                hybridization += thisOrbital.at(1);
            }
        }
        
        return hybridization;
    }
};

export default AddAtom;
