import {Link} from 'react-router-dom';

export default function NavLeft(props) {
  return (
    <div className='nav-left'>

      <Link to='/'>
        <div>H</div>
      </Link>

      <Link to='/about'>
        <div>About</div>
      </Link>

      <Link to='/work'>
        <div>Work</div>
      </Link>

      <Link to='/contact'>
        <div>Contact</div>
      </Link>
    </div>
  )
};