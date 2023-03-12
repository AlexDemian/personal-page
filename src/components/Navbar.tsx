import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routes";

import { Box, Paper, styled, Tab, Tabs } from "@mui/material";

const NavPaper = styled(Paper)`
  border-radius: unset;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavPaper>
      <Box display="flex" justifyContent="center" width="100%">
        <Tabs value={location.pathname} variant="scrollable">
          {routes.map((route) => (
            <Tab
              key={route.path}
              label={route.name}
              value={route.path}
              onClick={() => navigate(route.path)}
            />
          ))}
        </Tabs>
      </Box>
    </NavPaper>
  );
};
