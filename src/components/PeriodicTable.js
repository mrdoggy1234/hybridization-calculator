import PropTypes from 'prop-types'

import elements from "./ElementList";
import PTElement from "./PTElement";

const PeriodicTable = ({callback}) =>
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

PeriodicTable.propTypes = {
    callback: PropTypes.func.isRequired
}

export default PeriodicTable;
