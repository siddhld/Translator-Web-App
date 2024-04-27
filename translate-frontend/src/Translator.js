import { useState } from "react";
import "./Translator.css";
import axios from "axios";

function Translator({ value, set }) {
  const [text, setText] = useState(""); // State for user input text
  const [targetLang, setTargetLang] = useState("hi"); // Default target language (English)
  const [translatedText, setTranslatedText] = useState(""); // State for translated text
  const [isLoading, setLoading] = useState(false);

  console.log("--------- 1");
  // Function to handle text input change
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  console.log("--------- 3");
  // Function to handle target language selection
  const handleTargetLangChange = (event) => {
    setTargetLang(event.target.value);
  };

  console.log("--------- 4");
  // Function to handle translation request
  const translateText = async () => {
    if (!text) {
      return;
    }
    console.log("--------- 5");
    setLoading(true);
    axios
      .post(
        "https://translator-web-app-backend.onrender.com",
        {
          text: text,
          sourceLang: "",
          targetLang: targetLang,
        },
        {
          headers: { "Content-Type": "application/json" }, // Jis Format me data bhej rahe hai wo define kar rahe hai.
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);

        setLoading(false);

        setTranslatedText(response.data);
        console.log(translateText);
      });
  };

  const handleChecked = () => {
    set(!value);
  };

  return (
    <div className={` translator ${value ? "tlight" : "tdark"}`}>
      <div>
        <input type="checkbox" id="darkmode-toggle" onChange={handleChecked} />
        <label htmlFor="darkmode-toggle">
          <svg
            version="1.1"
            className="moon"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" />
            <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" />
            <path
              opacity="0.5"
              d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            />
          </svg>

          <svg
            version="1.1"
            className="sun"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
            />
            <g opacity="0.5">
              <path d="M3.66919 3.7156C3.94869 3.4099 4.42309 3.38867 4.72879 3.66817L6.95081 5.69975C7.25651 5.97925 7.27774 6.45365 6.99824 6.75935C6.71874 7.06505 6.24434 7.08629 5.93865 6.80679L3.71663 4.7752C3.41093 4.4957 3.38969 4.0213 3.66919 3.7156Z" />
              <path d="M20.3319 3.7156C20.6114 4.0213 20.5902 4.4957 20.2845 4.7752L18.0624 6.80679C17.7567 7.08629 17.2823 7.06505 17.0028 6.75935C16.7233 6.45365 16.7446 5.97925 17.0503 5.69975L19.2723 3.66817C19.578 3.38867 20.0524 3.4099 20.3319 3.7156Z" />
              <path d="M17.0261 17.0247C17.319 16.7318 17.7938 16.7319 18.0867 17.0248L20.3087 19.2471C20.6016 19.54 20.6016 20.0148 20.3087 20.3077C20.0158 20.6006 19.5409 20.6006 19.248 20.3076L17.026 18.0854C16.7331 17.7924 16.7332 17.3176 17.0261 17.0247Z" />
              <path d="M6.97521 17.0249C7.2681 17.3177 7.2681 17.7926 6.97521 18.0855L4.75299 20.3077C4.46009 20.6006 3.98522 20.6006 3.69233 20.3077C3.39943 20.0148 3.39943 19.54 3.69233 19.2471L5.91455 17.0248C6.20744 16.732 6.68232 16.732 6.97521 17.0249Z" />
            </g>
          </svg>
        </label>
      </div>
      <h2>
        Lost in Translation? We Got You{" "}
        <span className="heading-prob">(Probably)</span>
      </h2>{" "}
      <div className="input-box">
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text to translate..."
        />
      </div>
      <div className="output-box">
        <select
          className="language-selector"
          value={targetLang}
          onChange={handleTargetLangChange}
        >
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
          <option value="pa">Punjabi</option>
          <option value="mr">Marathi</option>
          <option value="te">Telugu</option>
          <option value="ta">Tamil</option>
          <option value="gu">Gujarati</option>
          <option value="ur">Urdu</option>
          <option value="kn">Kannada</option>
          <option value="or">Odia</option>
        </select>
        <textarea
          placeholder={
            isLoading
              ? "Chill out, my friend. Your message will be here soon...🧑🏻‍🎨"
              : "Translated text..."
          }
          value={translatedText && `${translatedText}`}
        />
      </div>
      <button onClick={translateText}>Translate</button>
    </div>
  );
}

export default Translator;
