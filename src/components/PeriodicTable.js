import PropTypes from 'prop-types'

import elements from "./ElementList";
import PTElement from "./PTElement";

const PeriodicTable = ({callback}) =>
{
    const PTElements = [];
    for (const thisElement of elements)
    {
        // if (column > 2)
        // {
        //     column -= 9;
        // }
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

/*         let background = "";
        switch (thisElement.at(6))
        {
            case ("s"):
            {
                background = "lightcoral";
                break;
            }
            case ("p"):
            {
                background = "lightyellow";
                break;
            }
            case ("d"):
            {
                background = "lightblue";
                break;
            }
            case ("f"):
            {
                background = "lightgreen";
                break;
            }
            default:
            {
                background = "whitesmoke";
                break;
            }
        } */

        PTElements.push(
            <PTElement
                atomicNumber={atomicNumber}
                elemSymbol={thisElement.at(0)}
                elemName={thisElement.at(1)}
                elemStyle={{
                    gridColumn: column,
                    gridRow: row,
                    // background: background
                    // elementColor: background
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
