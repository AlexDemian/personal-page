import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import styled from "@emotion/styled";

import { SiteRouter } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import { Profile } from "./components/Profile";
import { Navbar } from "./components/Navbar";

const container = document.createElement("div");
container.id = "root-container";
document.body.appendChild(container);
const root = ReactDOM.createRoot(container);

const Page = styled(Paper)`
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
  min-height: 600px;
  background-color: rgba(255, 255, 255, 0.85);
  padding-bottom: 50px;
  border-top-left-radius: unset;
  border-top-right-radius: unset;
`;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Page>
        <Grid
          mt={4}
          container
          spacing={2}
          justifyContent="center"
          sx={{ px: 10 }}
        >
          <Grid
            item
            mr={{ xs: 0, md: 2, lg: 3, xl: 6 }}
            style={{ width: "450px", minWidth: "450px" }}
          >
            <Profile />
          </Grid>

          <Grid item xs style={{ minWidth: "450px" }}>
            <SiteRouter />
          </Grid>
        </Grid>
      </Page>
    </BrowserRouter>
  </React.StrictMode>
);
