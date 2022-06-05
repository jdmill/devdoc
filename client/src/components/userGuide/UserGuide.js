import './userGuide.css';

export default function UserGuide()  {
    return (
        <div className="userguide__container">
            <div className="guide__card">
                <h1>User Guide</h1>
                    <p>This page is a guide for how to use our app's spicy 🥵 components in your own project.</p>
                <h2>Installing NodeJS/React</h2>
                    <h3>If you haven't yet created a NodeJS / React project:</h3>
                        <p>You'll first need to install NodeJS if you haven't already. Use this <a href="https://nodejs.org/en/download/" target="_blank">link</a> to download NodeJS and NPM.</p>
                        <p>Open up terminal, navigate to a containing folder of your choice, then use the following command to create a new folder which will contain your project.</p>
                        <div className="guide__code__section">
                            <span style={{ color: '#fac863' }}>mkdir</span> my-app
                        </div>
                        <p>Create the react app, then navigate to the folder and run the app with the following commands:</p>
                        <div className="guide__code__section">
                            npx create-react-app my-app<br/>
                            <span style={{ color: '#fac863' }}>cd</span> my-app<br/>
                            <span style={{ color: '#79b6f2' }}>npm</span> start
                        </div>
                <h2>Importing Your Custom Components Into Your Project</h2>
                    <h3>Now that you've created your react app:</h3>
                    <p>Inside my-app/src, create a new folder to hold your components, then navigate to it:</p>
                    <div className="guide__code__section">
                        <span style={{ color: '#fac863' }}>mkdir</span> components<br/>
                        <span style={{ color: '#fac863' }}>cd</span> components
                    </div>
                    <h3>Once you've customized a component using our app, copy the code and paste it into your new js file:</h3>
                    <p>Create a folder and name it matching what you'd like your component to be called, in camelCase<br/>
                    (If I want my component to be called "my component" I'll name the folder myComponent.)</p>
                    <p>Inside, create a new js file with the same name, in PascalCase(e.g. myComponent/MyComponent.js)</p>
                    <p>In order to use your exported component, you'll import it at the top (line 3) and then place the component into the div that app returns (line 8)</p>
                    <img className='guide__img' src='/AppJSPrev.png'></img>
            </div>
        </div>
    );
} 