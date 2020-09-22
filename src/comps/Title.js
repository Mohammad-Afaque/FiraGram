import React from "react";

const Title = () => {
  const darkMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };
  return (
    <div>
      <div className="title">
        <h1>FiraGram</h1>
        <label className="moon" onClick={darkMode}>
          Switch Theme
        </label>
      </div>
      <div className="tile-2">
        <h2>Your Uploads</h2>
        <p>Upload your images here using this button.</p>
      </div>
    </div>
  );
};

export default Title;
