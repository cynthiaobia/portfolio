
import {useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function WorkListItem(props) {
  const { title, img, description, link } = props.project;
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

  const isFirstImg = currentImgIndex === 0;
  const isLastImg = currentImgIndex === img.length - 1; 

  return(
    <div>
      <h2>{title}</h2>
      {/* img container */}
      <div className="slideshow-container">
      {!isFirstImg && (
          <ArrowBackIosIcon sx={{ fontSize: 50 }} className="prev" onClick={handlePreviousImg} />
        )}
        
        <div className="slide">
          <img src={img[currentImgIndex]} alt="" className='slide-img'/>
        </div>

        
        {!isLastImg && (
          <ArrowForwardIosIcon sx={{ fontSize: 50 }} className="next" onClick={handleNextImg} />
        )}
      </div>
      
      <h3>{description}</h3>

      <a href={link}>Link to project</a>
    </div>
  )
}