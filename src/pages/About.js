
import Bio from "../components/about/Bio";
import Experience from "../components/about/Experience";
import Education from "../components/about/Education";

export default function About(props) {
  return (
    <div>

      <h1>About</h1>
      <div>
        <a href="#">Biography</a>
        <a href="#">Experience</a>
        <a href="#">Education</a>
      </div>
      
      <Bio />
      <Experience />
      <Education />

    </div>
  )
};