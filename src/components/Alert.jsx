import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Alert.css";

function Alert({ alertIcon, text, displayClass, setDisplayClass, type }) {
  const closeAlert = () => {
    setDisplayClass("hide");
  };

  return (
    <div className={`alert ${displayClass} ${type}`}>
      {alertIcon}
      <p>{text}</p>
      <button onClick={closeAlert}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default Alert;
