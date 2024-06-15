import React from "react";
import { debugData } from "../utils/debugData";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  return (
    <div className="nui-wrapper">
    </div>
  );
};

export default App;
