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
                <h2>Deployment</h2>
                    <h3>Converting app to work with gh-pages</h3>
                    <p>Inside your app directory, run the following command to install gh-pages:</p>
                    <div className="guide__code__section">
                        <span style={{ color: '#79b6f2' }}>npm</span> install gh-pages --save-dev
                    </div>
                    <p>Also inside your app directory, open up package.json and add a "homepage" property.</p>
                    <p>You'll replace "gitname" with your github username and "react-gh-pages" with the name of the GitHub repository you create.</p>
                    <img className='guide__img' src='/uGHomePage.png'></img>
                    <p>Also in package.json, inside the "scripts" section, add the following deploy scripts:</p>
                    <img className='guide__img' src='/uGDeployScript.png'></img>
                    <h3>Create a new GitHub Repo</h3>
                    <p>Create or sign in to your GitHub account.</p>
                    <p>Create a new <a href="https://github.com/new" target="_blank">repository</a>.</p>
                    <p>You can name the repository anything you'd like (but it needs to match what we named the homepage in package.json).<br/>
                    Select the option to make your repository public, as we need to deploy it.</p>
                    <p>Inside your project folder, open a command line and use the following to initialize a git repository and link it to the repo you made on GitHub.<br/>
                    (You'll need to install <a href="https://git-scm.com/downloads" target="_blank">Git</a> for this)</p>
                    <div className="guide__code__section">
                        <span style={{ color: '#5ad17a' }}>git</span> init<br/>
                        <span style={{ color: '#5ad17a' }}>git</span> add .<br/>
                        <span style={{ color: '#5ad17a' }}>git</span> commit -m "your message here"<br/>
                        <span style={{ color: '#5ad17a' }}>git</span> branch -m main<br/>
                        <span style={{ color: '#5ad17a' }}>git</span> remote add origin git@github.com:username/repositoryName.git<br/>
                    </div>
                    <h3>Final Steps</h3>
                    <p>Now that we've done all the necessary behind-the-scenes work to deploy our app, we simply use one command any time we'd like github to deploy our code:</p>
                    <div className="guide__code__section">
                        <span style={{ color: '#79b6f2' }}>npm</span> run deploy
                    </div>
                    <p>Finally, because the gh-pages npm package pushes our built code to a branch called gh-pages, we will need to alter the GitHub repository settings to make it available.</p>
                    <p>Navigate to settings in the top right, then pages, in the table of contents pane on the left. Finally under source, select your gh-pages branch.</p>
                    <p>Once GitHub has finished making your page public to the world, this same settings page will provide you a link to access your new website.</p>
            </div>
        </div>
    );
} 