import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "1_shared/config/i18n/i18n";
import { ThemeProvider } from "7_app/providers/ThemeProvider";
import App from "./7_app/App";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
