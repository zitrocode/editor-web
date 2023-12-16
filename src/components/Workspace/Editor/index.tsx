import { useContext } from "react";
import { Editor as MoEditor } from "@monaco-editor/react";

import AppContext from "../../../contexts/AppContext";
import "./editor.style.css";

const Editor: React.FC = () => {
  const { code, updateCode } = useContext(AppContext);

  return (
    <div className="editor">
      <MoEditor
        width="calc(100vw - 620px)"
        height="calc(100vh - 42px)"
        defaultLanguage="markdown"
        defaultValue=""
        value={code}
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
        onChange={updateCode}
      />
    </div>
  );
};

export default Editor;