import react, { useState, useEffect } from "react";
import axios from "axios";
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Convert = ({ language, text }) => {
  const [translatedtext, settranslatedtext] = useState("");
  const [debouncedtext, setdebouncedtext] = useState(text);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setdebouncedtext(text);
    }, 1000);
    return () => {
      clearTimeout(timeId);
    };
  }, [text]);
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedtext,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      settranslatedtext(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedtext]);
  return (
    <div>
      <h1 className="ui header">{translatedtext}</h1>
    </div>
  );
};
export default Convert;
