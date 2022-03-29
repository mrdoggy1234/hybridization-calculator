import PropTypes from 'prop-types'

const PTElement = ({ atomicNumber, elemSymbol, elemName, elemStyle, callback}) => {
  return (
    <button className="ptelement" style={elemStyle} onClick={() => callback(atomicNumber)}>
        <text className='atomicnumber'>
            {atomicNumber}<br/>
        </text>
        <text className='elemsymbol'>
            {elemSymbol}<br/>
        </text>
        <text className='elemname'>
            {elemName}
        </text>
    </button>
  )
}

PTElement.propTypes = {
    atomicNumber: PropTypes.number.isRequired,
    elemSymbol: PropTypes.string.isRequired,
    elemName: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}

export default PTElement;
