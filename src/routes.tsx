import React from "react";
import { SkillsPage } from "./pages/Index";
import { ProjectsPage } from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import { Posts } from "./pages/Posts";

export const routes = [
  { name: "Skills & Career", path: "/", element: <SkillsPage /> },
  { name: "Projects", path: "/projects", element: <ProjectsPage /> },
  { name: "Posts", path: "/posts", element: <Posts /> },
];

export const SiteRouter: React.FC = () => (
  <Routes>
    {routes.map((route) => (
      <Route {...route} key={route.path} />
    ))}
  </Routes>
);
