import PropTypes from 'prop-types'
import PTElement from './PTElement'

const Header = ({title}) => {
  return (
      <header>
          <h1>{title}</h1>
      </header>
  )
}

Header.defaultProps = {
    title: 'default title',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
