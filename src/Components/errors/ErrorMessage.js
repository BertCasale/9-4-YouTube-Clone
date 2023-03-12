import "./ErrorMessage.css"

export default function ErrorMessage() {
  return(<div className="error-modal">
    <div className="modal-message">
      <button className="close-button">x</button>
    <h2>There was an issue with your request. Please try again.</h2>
    </div>
    
  </div>);
}