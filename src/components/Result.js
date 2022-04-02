/* import PropTypes from 'prop-types'
import React from 'react';

class Result extends React.Component
{
    constructor(text)
    {
        super(text);
        this.state =
        {
            text: "fasdasgsdfgsdf"
        };
    }

    // setResult = (result) =>
    // {
    //     this.setState({
    //         text: result
    //     })
    // } 

    render()
    {
        return (
            <header className="result">
                <h2>{this.state.text}</h2>
            </header>
        );
    }
};

// Result.propTypes =
// {
//     text: PropTypes.string.isRequired,
// }

export default Result; */



import PropTypes from 'prop-types'
import React from 'react'

const Result = ({res}) =>
{
    return (
        <header className="result">
            <h2>{res}</h2>
        </header>
    );
}

Result.propTypes =
{
    res: PropTypes.string.isRequired,
}

export default Result;
