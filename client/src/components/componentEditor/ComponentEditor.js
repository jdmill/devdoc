import "./componentEditor.css";
// import { useState } from "react";
import EFHeader from "../editorForm/EFHeader"; // Editor Form for Header
import EFArticlePhoto from "../editorForm/EFArticle-photo"; // Editor Form for Article w/ photo
import EFContact from "../editorForm/EFContact"; // Editor Form for Contact Form
import EFFooter from "../editorForm/EFFooter"; // Editor Form for Footer
import ComponentPreview from "../componentPreview/ComponentPreview";

function ComponentEditor() {
  const compType = localStorage.getItem("compType");
  console.log(compType);

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render. I'm using this over the react Router to avoid having to change the endpoint URL

  const renderPage = () => {
    if (compType === "header") {
      return <EFHeader />;
    }
    if (compType === "article") {
      return <EFArticlePhoto />;
    }
    if (compType === "contact") {
      return <EFContact />;
    }
    if (compType === "footer") {
      return <EFFooter />;
    }
    return <p>Something has gone wrong. Please go back and try again.</p>;
  };

  return (
    <div className="split__screen">
      <h2>Component Editor Page</h2>
      {/*Just have this here to identify the component is linked in development*/}
      <div className="left__side">{renderPage()}</div>
      <div className="right__side">
        <ComponentPreview />
      </div>
    </div>
  );
}

export default ComponentEditor;
