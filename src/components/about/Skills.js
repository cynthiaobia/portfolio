
import { skills } from "../../data";

export default function Skills() {
  
  return (
    <div id='skills'>
      <h2>Technical Skills</h2>

      <div>
        {
          skills.map((skill, index) => <i key={index}>{skill}, </i>)
        }
      </div>
      

    </div>
  )
}