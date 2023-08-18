
import { education } from "../../data";

export default function Education() {
  return (
    <div id='education'>
      <h2>Education / Certifications</h2>

      {
        education.map( item => 
          <div key={item.id}>
            <h3>{item.school}</h3>
            <h4>{item.field}</h4>
            <h5>{item.date}</h5>
            <ul>
              { item.courses.map( 
                (ele, index) => <li key={index}>{ele}</li> 
              )}
            </ul>
          </div>
        )
      }

    </div>
  )
}