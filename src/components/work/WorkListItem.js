
export default function WorkListItem(props) {
  const { name, img, description, link } = props.project;

  return(
    <div>
      <h2>{name}</h2>
      <img src={img} />
      <h3>{description}</h3>
      <a href={link}>Link to project</a>
    </div>
  )
}