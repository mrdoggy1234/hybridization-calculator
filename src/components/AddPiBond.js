const AddPiBond = ({callback, disabled, piBondCount}) =>
{
    return (
        <button className="menubtn" onClick={callback} disabled={disabled}>
            + pi bond ({piBondCount})
        </button>
    )
}

export default AddPiBond;
