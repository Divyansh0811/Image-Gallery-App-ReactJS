import "./ImageModal.css";

const ImageModal = ({image, username, likes}) => {
 return (
  <div className="image-modal">
   <img src={image} alt="data" />
   <span> username: {username}</span>
   <span> likes: {likes}</span>
  </div>
 );
};

export default ImageModal;
