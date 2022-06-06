import UserHeader from "../../userComps/userHeaders/userHeaders";
import UserArticles from "../../userComps/userAtricles/UserArticles";
import UserContact from "../../userComps/userContacts/UserContacts";
import UserFooter from "../../userComps/userFooters/userFooters";
import "./projectPreview.css";
import "../../userComps/css/DevDr.css";

function ProjectPreview({
  compTheme,
  compTitle,
  compType,
  compImage,
  compText,
}) {
  if (compType === "header") {
    return (
      <div className="comp__preview">
        <UserHeader theme={compTheme} title={compTitle} photo={compImage} />
      </div>
    );
  } else if (compType === "article-photo") {
    return (
      <div className="comp__preview">
        <UserArticles
          theme={compTheme}
          title={compTitle}
          photo={compImage}
          text={compText}
        />
      </div>
    );
  } else if (compType === "contact") {
    return (
      <div className="comp__preview">
        <UserContact theme={compTheme} title={compTitle} text={compText} />
      </div>
    );
  } else if (compType === "footer") {
    return (
      <div className="comp__preview">
        <UserFooter theme={compTheme} title={compTitle} text={compText} />
      </div>
    );
  } else {
    return <div className="comp__preview"></div>;
  }
}
export default ProjectPreview;
