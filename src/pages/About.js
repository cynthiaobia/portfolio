
import AboutNav from "../components/about/AboutNav";
import Bio from "../components/about/Bio";
import Experience from "../components/about/Experience";
import Education from "../components/about/Education";
import Skills from "../components/about/Skills";

export default function About(props) {
  return (
    <div>

      <h1>About</h1>
      <AboutNav />
      <Bio />
      <Experience />
      <Education />
      <Skills />

    </div>
  )
};