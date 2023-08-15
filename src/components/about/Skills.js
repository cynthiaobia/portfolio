
export default function Skills() {

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js' 
  ]

  return (
    <div>

      <h2>Skills</h2>

      <div>
        {
          skills.map(skill => <i>{skill}, </i>)
        }
      </div>
      

    </div>
  )
}