import elements from "./ElementList";
import totalOrbitals from "./OrbitalList";

export let centralAtom = [];
const sigmaBonds = [];

export function setCentralAtom(atomicNumber)
{
    centralAtom = elements.at(atomicNumber - 1);

    let res = [];
    let centralEN = centralAtom.at(7);
    for (const thisElement of elements)
    {
        let thisEN = thisElement.at(7);
        if ((thisEN !== 0) && (Math.abs(centralEN - thisEN) >= 2.1))
        {
            res.push(thisElement.at(4));
        }
    }

    return res;
}

export function addAtom(atomicNumber)
{
    sigmaBonds.push(elements.at(atomicNumber - 1));
};

export function calcHybridization(piBondCount)
{
    let hybridization = "";

    let sigmaBondCount = sigmaBonds.length;
    let valenceElectronCount = centralAtom.at(5);
    let bondCount = sigmaBondCount + piBondCount;
    let lonePairCount = Math.floor((valenceElectronCount - bondCount) / 2);

    let stericNumber = sigmaBondCount + lonePairCount;

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
