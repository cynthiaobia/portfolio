
import WorkListItem from "./WorkListItem";

import { projects } from '../../data'

export default function WorkList() {

  // projects.map((project) => console.log(project.id, project.name, project.link))

  return (
    <div>
      {/* <WorkListItem /> */}

      {/* {projects.map((project) => <h1 key={project.id}>{project.name, project.link}</h1>)} */}

      {/* {projects.map((project) => <WorkListItem key={project.id} name={project.name} link={project.link} />)} */}

      {projects.map((project) => <WorkListItem key={project.id} project={project} />)}


    </div>
  )
}