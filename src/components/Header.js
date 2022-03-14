import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} />
    </header>
  )
}

// css in js
/**
const headingStyle = {
  color: 'red',
  backgroundColor: '#000'
}
**/


Header.propTypes = {
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'Task Tracker'
}

export default Header

