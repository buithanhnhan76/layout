// pages
import Home from "src/pages/Home";
import Services from "src/pages/Services";
import News from "src/pages/News";
import Blog from "src/pages/Blog";
import Contact from "src/pages/Contact";

export const listRoutes = [
  { id: 0, path: "/", element: Home },
  { id: 1, path: "/services", element: Services },
  { id: 2, path: "/news", element: News },
  { id: 3, path: "/blog", element: Blog },
  { id: 4, path: "/contact", element: Contact },
];
