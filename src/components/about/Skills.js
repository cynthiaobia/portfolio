
import { skills } from "../../data";

export default function Skills() {
  
  return (
    <div>
      <a name="skills"></a>
      <h2>Skills</h2>

      <div>
        {
          skills.map((skill, index) => <i key={index}>{skill}, </i>)
        }
      </div>
      

    </div>
  )
}