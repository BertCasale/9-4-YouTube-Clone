import "./ErrorMessage.css"
import { useEffect, useRef } from "react";

export default function ErrorMessage({setErrorShown, setOpaque}) {
  const divRef = useRef(null);

  function closeErrorMessage() {
    setErrorShown(false);
    setOpaque(true);
  }
  
  //focus on the div when rendering
  useEffect(() => {
    divRef.current.focus();
  }, []);
  

  return(<div className="modal-backdrop">
      <div 
      className="error-modal"
      tabIndex="0"
      ref={divRef}
      onBlur={closeErrorMessage}>
      <div className="modal-message">
        <button 
          className="close-button"
          onClick={closeErrorMessage}
        >x</button>
        <h2>There was an issue with your request. Please try again.</h2>
      </div>
    </div>
  </div>);
}