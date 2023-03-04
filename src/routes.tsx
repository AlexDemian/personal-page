import React from "react";
import { IndexPage } from "./pages/Index";
import { ProjectsPage } from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import { PostsPage } from "./pages/Posts";
import { NotFoundPage } from "./pages/NotFound";

export const routes = [
  { name: "Skills", path: "/", element: <IndexPage /> },
  { name: "Projects", path: "/projects", element: <ProjectsPage /> },
  { name: "Posts", path: "/posts", element: <PostsPage /> },
];

export const SiteRouter: React.FC = () => (
  <Routes>
    {routes.map((route) => (
      <Route {...route} key={route.path} />
    ))}
    <Route path="*" element={NotFoundPage} />
  </Routes>
);
