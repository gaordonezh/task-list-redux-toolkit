import React from "react";
import ThemeConfig from "theme";
import GlobalStyles from "theme/globalStyles";
import { BrowserRouter } from "react-router-dom";
import ConfigRoutes from "routes";

const App = () => {
  return (
    <ThemeConfig mode="dark">
      <GlobalStyles />
      <BrowserRouter>
        <ConfigRoutes />
      </BrowserRouter>
    </ThemeConfig>
  );
};

export default App;
