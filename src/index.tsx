import { render } from "react-dom";
import App from "./7_app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "7_app/providers/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
