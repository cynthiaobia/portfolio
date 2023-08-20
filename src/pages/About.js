
import AboutNav from "../components/about/AboutNav";
import Bio from "../components/about/Bio";
import Experience from "../components/about/Experience";
import Education from "../components/about/Education";
import Skills from "../components/about/Skills";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function About(props) {
  return (
    <div className="about">

      <h1 id='top'>About</h1>
      <AboutNav />
      <Bio />
      <Skills />
      <Experience />
      <Education />
      <a href="#top">
        <ArrowUpwardIcon className='bottom-right' sx={{ fontSize: 50 }} />
      </a>

    </div>
  )
};