import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "1_shared/config/i18n/i18n";
import { ErrorBoundary } from "7_app/providers/ErrorBoundary";
import { ThemeProvider } from "7_app/providers/ThemeProvider";
import { StoreProvider } from "7_app/providers/StoreProvider";
import App from "./7_app/App";
import "7_app/s/index.scss";

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
