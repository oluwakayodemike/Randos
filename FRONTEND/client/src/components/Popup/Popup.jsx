import React, {useState} from "react";
import "./Popup.css";
import { FaClipboard } from "react-icons/fa";

const Popup = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  return (
    <div className="popup-container">
      <div className="popup">
        <h3 className="heading">Join the Session</h3>
        <p className="description">
          This is the room code for the Session. Share it with anyone you want
          to invite.
        </p>
        <div className="code-container">
          <h3 className="code">123456</h3>
          <button className="copy-button" onClick={()=>setCopySuccess(true)}>
            <FaClipboard />
            {copySuccess?'Copied':'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;