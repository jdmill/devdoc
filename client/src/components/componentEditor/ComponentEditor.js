import './componentEditor.css';
import { useState } from 'react';
import EF_header from '../editorForm/EF_header'; // Editor Form for Header
import EF_articlePhoto from '../editorForm/EF_article-photo'; // Editor Form for Article w/ photo
import EF_contact from '../editorForm/EF_contact'; // Editor Form for Contact Form
import EF_footer from '../editorForm/EF_footer'; // Editor Form for Footer
import ComponentPreview from '../componentPreview/ComponentPreview';

function ComponentEditor() {

  const [currentPage, setCurrentPage] = useState('header');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render. I'm using this over the react Router to avoid having to change the endpoint URL
  /* 
  const renderPage = () => {
    if (currentPage === 'header') {
      return <EF_header />;
    }
    if (currentPage === 'article-photo') {
      return <EF_articlePhoto />;
    }
    if (currentPage === 'contact') {
      return <EF_contact />;
    }
    if (currentPage === 'footer') {
        return <EF_footer />;
      }
    return (<p>Something has gone wrong. Please go back and try again.</p>);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  */
 
    return (
        <div className="split__screen">
            <h2>Component Editor Page</h2>{/*Just have this here to identify the component is linked in development*/}
            <div className="left__side">{/* {renderPage()} */} <h2>Imagine a Form is here</h2></div>
            <div className="right__side">
                <ComponentPreview />
            </div>
        </div>
    );
};  

export default ComponentEditor;