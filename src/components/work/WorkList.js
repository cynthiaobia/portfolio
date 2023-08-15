
import WorkListItem from "./WorkListItem";

export default function WorkList() {

  const projects = [
    {
      id: 1,
      name: 'Tic Tac Toe',
      img: 'image linke here',
      description: 'description here',
      link: 'www.link.com'
    },
    
    {
      id: 2,
      name: 'Something else',
      img: 'image linke here',
      description: 'description here',
      link: 'www.google.com'
    }
  ]

  // projects.map((project) => console.log(project.id, project.name, project.link))

  return (
    <div>
      {/* <WorkListItem /> */}

      {/* {projects.map((project) => <h1 key={project.id}>{project.name, project.link}</h1>)} */}

      {/* {projects.map((project) => <WorkListItem key={project.id} name={project.name} link={project.link} />)} */}

      {projects.map((project) => <WorkListItem project={project} />)}


    </div>
  )
}