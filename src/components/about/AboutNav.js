
import resume from '../../Obia-Resume.pdf';

export default function AboutNav() {
  return (
    <div>
      <a href="#biography">Biography</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href={resume} target='_blank' rel='noreferrer'>Resume</a>
      
    </div>
  )
}