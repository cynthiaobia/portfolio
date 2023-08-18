
import NavLeft from "./NavLeft";
import NavCenter from "./NavCenter";
import NavRight from "./NavRight";

export default function Nav(props) {
  return (
    <div className='nav'>

      <NavLeft />
      <NavCenter />
      <NavRight />
      
    </div>
  )
};