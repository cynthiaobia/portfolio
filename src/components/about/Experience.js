
export default function Experience() {

  const experience = [
    {
      id: 0,
      company: 'Per Scholas',
      role: 'Software Engineering Training Candidate',
      location: 'Chicago, IL',
      date: 'Jun 2023 - Present',
      description: [
        'A 15-week Software Engineering course that dives deep into every aspect of software engineering including computer science, React, Node, design patterns & system architecture, and more. The curriculum extensively covers MERN stack technologies.'
      ]
    },
  
    {
      id: 2,
      company: 'DRW',
      role: 'DevOps Engineer',
      location: 'Chicago, IL',
      date: 'May 2022 - Dec 2022',
      description: [
        'Cooperated with teammates to implement blue/green deployment strategies with Kubernetes to reduce downtime between development and production environments',
  
        'Utilized CI/CD tools to build pipelines through TeamCity and Concourse, manage images in Docker and Harbor registries, and maintain source code via Git and GitHub',
  
        'Collaborated with team managers to improve team productivity by researching and providing feedback on trending technology topics and skills for future company-provided learning courses and modules'
      ]
    }
  ]
  
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