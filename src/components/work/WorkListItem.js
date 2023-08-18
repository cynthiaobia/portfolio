
import {useState} from 'react';

export default function WorkListItem(props) {
  const { name, img, description, link } = props.project;
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handlePreviousImg = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  const handleNextImg = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
  };

  return(
    <div>
      <h2>{name}</h2>

      <div className="slideshow-container">
        <div className="slide">
          <img src={img[currentImgIndex]} alt="" />
        </div>
        <button className="prev" onClick={handlePreviousImg}>
          Previous Image
        </button>
        <button className="next" onClick={handleNextImg}>
          Next Image
        </button>
      </div>

      <h3>{description}</h3>
      <a href={link}>Link to project</a>
    </div>
  )
}