import elements from "./ElementList";
import PTElement from "./PTElement";

const PeriodicTable = ({callback, disabledElements}) =>
{
    const PTElements = [];
    for (const thisElement of elements)
    {
        let row = thisElement.at(2);
        let column = thisElement.at(3);
        let atomicNumber = thisElement.at(4);
        const fBlockOffset = 3;
        if (atomicNumber >= 57 && atomicNumber <= 70)
        {
            row += 3;
            column = atomicNumber - (57 - fBlockOffset);
        }
        if (atomicNumber >= 89 && atomicNumber <= 102)
        {
            row += 3;
            column += atomicNumber - (89 - fBlockOffset);
        }

        let disabled = (disabledElements.includes(atomicNumber) || thisElement.at(7) === 0);

        PTElements.push(
            <PTElement
                atomicNumber={atomicNumber}
                elemSymbol={thisElement.at(0)}
                elemName={thisElement.at(1)}
                elemStyle={{
                    gridColumn: column,
                    gridRow: row
                }}
                callback={callback}
                disabled={disabled}
                key={thisElement.at(4)}
            ></PTElement>
        )
    }

    return (
        <div className="periodictable">
            {PTElements}
        </div>
    );
}

export default PeriodicTable;
