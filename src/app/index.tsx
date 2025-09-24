import { memo } from "react";

import AppProvider from "./provider";
import Approuter from "./routes";

const App = memo(() => {
  return (
    <div>
      <AppProvider>
        <Approuter />
      </AppProvider>
    </div>
  );
});

export default App;
