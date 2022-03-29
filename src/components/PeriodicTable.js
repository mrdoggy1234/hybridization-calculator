import PropTypes from 'prop-types'

import elements from "./ElementList";
import PTElement from "./PTElement";

const PeriodicTable = ({callback}) =>
{
    const PTElements = [];
    for (const thisElement of elements)
    {
        let column = thisElement.at(3);
        if (column > 2)
        {
            column -= 9;
        }

        PTElements.push(
            <PTElement
                atomicNumber={thisElement.at(4)}
                elemSymbol={thisElement.at(0)}
                elemName={thisElement.at(1)}
                elemStyle={{
                    gridColumn: column,
                    gridRow: thisElement.at(2)
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
