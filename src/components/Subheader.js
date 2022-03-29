import PropTypes from 'prop-types'

const Subheader = ({text}) => {
  return (
      <header className="subheader">
          <h3>{text}</h3>
      </header>
  )
}

Subheader.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Subheader;
