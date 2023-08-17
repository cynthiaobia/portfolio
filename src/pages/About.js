
import Bio from "../components/about/Bio";
import Experience from "../components/about/Experience";
import Education from "../components/about/Education";
import Skills from "../components/about/Skills";

export default function About(props) {
  return (
    <div>

      <h1>About</h1>
      <div>
        <a href="#biography">Biography</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
      </div>

      <Bio />
      <Experience />
      <Education />
      <Skills />

    </div>
  )
};