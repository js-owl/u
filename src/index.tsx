import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@/1_shared/config/i18n/i18n';
import { ErrorBoundary } from '@/7_app/providers/ErrorBoundary';
import { ThemeProvider } from '@/7_app/providers/ThemeProvider';
import { StoreProvider } from '@/7_app/providers/StoreProvider';
import '@/7_app/s/index.scss';
import App from './7_app/App';

console.log('|-index');
const container = document.getElementById('root');
if (!container) {
  throw new Error('index error');
}
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
