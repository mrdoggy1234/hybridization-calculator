function onResetClick()
{
    window.location.reload();
    return false;
}

const Reset = ({disabled}) =>
{
    return (
        <button className="menubtn" onClick={onResetClick} disabled={disabled}>
            Reset
        </button>
    )
}

export default Reset;
