import { ThemeProvider } from '@/components/ui/theme-provider';
import Home from '@/pages/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function Routers() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}