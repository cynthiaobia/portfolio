
import { skills } from "../../data";

export default function Skills() {
  
  return (
    <div>

      <h2>Skills</h2>

      <div>
        {
          skills.map(skill => <i key={skills.indexOf(skill)}>{skill}, </i>)
        }
      </div>
      

    </div>
  )
}