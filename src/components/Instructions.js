import PropTypes from 'prop-types'

const Instructions = ({text}) =>
{
    return (
        <header className="instructions">
            <h3>{text}</h3>
        </header>
    )
}

Instructions.propTypes =
{
    text: PropTypes.string.isRequired,
}

export default Instructions;
