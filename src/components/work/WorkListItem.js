
export default function WorkListItem(props) {
  const { id, name, img, description, link } = props.project;

  return(
    <div key={id}>
      <h2>{name}</h2>
      {img}
      <h3>{description}</h3>
      <a href={link}>Link to project</a>
    </div>
  )
}