import { useState } from "react";
import style from "../styles/modules/edit-text.module.css";

export default function EditText({ label, inputType, validate, invalideMsg }) {
  if (!inputType) inputType = "text";
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleBlur = () => {
    if (validate && !validate(value)) {
      setError(true);
    }
  };

  return (
    <div className={style.layout}>
      <label className={style.label}>{label}</label>
      <input
        type={inputType}
        className={`${error && "error"}`}
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
      ></input>
      {error && <span className={style.error}>{invalideMsg}</span>}
    </div>
  );
}
