
import { experience } from '../../data'

export default function Experience() {
  
  return (
    <div>
      <h2>Experience</h2>
      
      {
        experience.map( item => 
          <div key={item.id}>
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            <h5>{item.date}</h5>
            <h6>{item.location}</h6>
            <ul>
              { item.description.map( 
                ele => <li key={item.description.indexOf(ele)}>{ele}</li> 
              )}
            </ul>
          </div>
        )
      }

    </div>
  )
}