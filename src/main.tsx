import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index.tsx";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import Services from "./pages/Services.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <ThemeProvider >
      <RouterProvider router={router} />
    </ThemeProvider>
  </LanguageProvider>
);
