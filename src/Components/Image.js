const Image = ({image, type}) => {
  return (  
    <img src={image} alt={type} width="330px" height="220px" />
  );
}
 
export default Image;