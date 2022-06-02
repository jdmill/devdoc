function ProjectPreview() {
  return (
    <div className="live__preview">
      <button>Change Theme</button>
      <h2>I'm a project preview</h2>
      {/* TODO: figure out how to render a user component with the props of their options passed in, maybe state management on the parent component for this which is holding the editor form for the component and THIS component too */}
    </div>
  );
}
export default ProjectPreview;
