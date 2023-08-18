
import Description from "../components/main/Description";
import Logo from "../components/main/Logo";
import Quote from "../components/main/Quote";

export default function Main() {
  return (
    <div>
      <Logo />
      <div className="main-container">
        <Quote />
        <Description />
      </div>
    </div>
    
  )
};



