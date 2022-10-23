import { useState } from "react";
import "./PasswordOverlay.scss";

const PasswordOverlay = (props) => {
  const [pass, setPass] = useState("");
  const [file, setFile] = useState({});
  const { onSave, setIsoverlayActive, passwordNote, label, isInputJSON } =
    props;

  const handleChange = (e) => {
    if (isInputJSON) {
      console.log(e.target.files[0]);
      setFile(e.target.files);
    } else {
      setPass(e.target.value);
    }
  };

  const passwordSelect = () => {
    if (
      (isInputJSON && file.length === 0) ||
      (!isInputJSON && pass.length === 0)
    ) {
      return;
    }

    if (isInputJSON) {
      console.log(file);
      onSave(file[0]);
    } else {
      onSave(pass);
    }
    setPass("");
    setFile({});
  };

  const inputJSON = (
    <input
      id="fileUploadSingle"
      className="fileUploadInput"
      accept=".json"
      type="file"
      onChange={handleChange}
    />
  );

  return (
    <div className="PasswordOverlay">
      <div className="passwordBox">
        <div className="passwordSection">
          <label>{`${label}: `} </label>
          {isInputJSON ? (
            inputJSON
          ) : (
            <input autoFocus={true} type="text" onChange={handleChange} />
          )}
        </div>
        {passwordNote}
        <div className="passwordButtons">
          <button onClick={passwordSelect} className="select">
            {"OK \u2713"}
          </button>
          <button
            onClick={() => {
              setIsoverlayActive(false);
              setPass("");
            }}
            className="close"
          >
            {"Cancel \u00D7"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordOverlay;
