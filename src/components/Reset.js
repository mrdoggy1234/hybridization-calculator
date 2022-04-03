import PropTypes from 'prop-types'

function onResetClick()
{
    window.location.reload();
    return false;
}

const Reset = ({disabled}) =>
{
    return (
        <button className="resetbtn" onClick={onResetClick} disabled={disabled}>
            Reset
        </button>
    )
}

Reset.propTypes =
{
    disabled: PropTypes.bool.isRequired,
}

export default Reset;
