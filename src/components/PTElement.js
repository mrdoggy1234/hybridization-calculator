const PTElement = ({ atomicNumber, elemSymbol, elemName, elemStyle, callback, disabled}) =>
{
    return (
        <button
            className="ptelement"
            style={elemStyle}
            onClick={() => callback(atomicNumber)}
            disabled={disabled}
        >
            <div className='atomicnumber'>
                {atomicNumber}<br/>
            </div>
            <div className='elemsymbol'>
                {elemSymbol}<br/>
            </div>
            <div className='elemname'>
                {elemName}
            </div>
        </button>
    )
}

export default PTElement;
