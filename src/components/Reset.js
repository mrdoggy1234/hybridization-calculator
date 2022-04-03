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

export default Reset;
