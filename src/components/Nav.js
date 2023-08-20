
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <div className='nav'>

      <Link to='/'>
          <div>Home</div>
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