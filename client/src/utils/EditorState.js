//This creates an editor state that allows store of project components before a db mutation
import { createContext, useContext, useState } from "react";
import { useComponentReducer } from "./reducers";

const EditorContext = createContext();
const { Provider } = EditorContext;

const EditorProvider = ({ value = [], ...props }) => {
  // const [initialState, setState] = useState("");
  const [state, dispatch] = useComponentReducer();

  return <Provider value={[state, dispatch]} {...props} />;
};
const useEditorContext = () => {
  return useContext(EditorContext);
};

export { EditorProvider, useEditorContext };
