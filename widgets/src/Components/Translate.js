import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Africaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];
const Translate = () => {
  const [language, setLangauage] = useState(options[0]);
  const [text, settext] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => settext(e.target.value)}></input>
        </div>
      </div>

      <Dropdown
        label={"Select a Language"}
        selected={language}
        onSelectChange={setLangauage}
        options={options}
      ></Dropdown>
      <hr />
      <div className="ui header">Output</div>
      <Convert language={language} text={text} />
    </div>
  );
};
export default Translate;
